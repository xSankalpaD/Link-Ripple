import connect from "@/lib/db";
import User from "@/lib/models/user"
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_JWT = process.env.SECRET_JWT as string;

export const POST = async (request: Request) => {
  try {
    await connect();

    const { tokenMail, name, bio, avatar } = await request.json();
    const decodedTokenMail = jwt.verify(tokenMail, SECRET_JWT) as JwtPayload;
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found.", status: "not-found" }),
        { status: 500 }
      );
    }

    user.name = name;
    user.bio = bio;
    user.avatar = avatar;
    await user.save();

    return new Response(
      JSON.stringify({ message: "Profile successfully saved.", status: "success", user }),
      { status: 200 }
    );

  } catch (err: unknown) {
    console.log(err);
    return new Response(
      JSON.stringify({ message: "An error occurred.", status: "error" }),
      { status: 500 }
    );
  }
}