import connect from "@/lib/db";
import User from "@/lib/models/user"
import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET_JWT = process.env.NEXT_PUBLIC_SECRET_JWT as string;

export const POST = async (request: Request) => {
  try {
    await connect();

    const { tokenMail, links } = await request.json();
    const decodedTokenMail = jwt.verify(tokenMail, SECRET_JWT) as JwtPayload;
    const email = decodedTokenMail.email;
    const user = await User.findOne({ email: email });
    const newLinks = links.map((link: any) => ({
      url: link.link.url,
      title: link.link.title,
      icon: ""
    }));
    user.links = newLinks;
    await user.save();

    return new Response(
      JSON.stringify({ message: "Links successfully saved.", status: "success" }),
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