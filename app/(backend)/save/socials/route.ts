import connect from "@/lib/db";
import User from "@/lib/models/user"
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_JWT = process.env.NEXT_PUBLIC_SECRET_JWT as string;

export const POST = async (request: Request) => {
  try {
    await connect();

    const { tokenMail, socials } = await request.json();
    const decodedTokenMail = jwt.verify(tokenMail, SECRET_JWT) as JwtPayload;
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    user.socialMedia = socials;
    await user.save();

    return new Response(
      JSON.stringify({ message: "User successfully saved.", status: "success" }),
      { status: 200 }
    );

  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({ message: "An error occurred.", status: "error" }),
      { status: 500 }
    );
  }
}