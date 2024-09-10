import connect from "@/lib/db";
import User from "@/lib/models/user"
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_JWT = process.env.NEXT_PUBLIC_SECRET_JWT as string;

export const POST = async (request: Request) => {
  try {
    await connect();

    const { email, password } = await request.json();

    const user = await User.findOne({ email: email, password: password });
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Invalid Credentials", status: "not found" }),
        { status: 500 }
      );
    }
    const token = jwt.sign({ email: email }, SECRET_JWT);

    return new Response(
      JSON.stringify({ message: "Sucessful user login.", status: "success", token, id: user._id }),
      { status: 200 }
    );

  } catch (err: any) {
    console.log(err)
    if (err.code == 11000) {
      return new Response(
        JSON.stringify({ message: "Try a different handle or email.", status: "error" }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ message: "An error occurred", status: "error" }),
      { status: 500 }
    );
  }
}