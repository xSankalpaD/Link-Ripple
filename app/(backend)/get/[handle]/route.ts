import connect from "@/lib/db";
import User from "@/lib/models/user"

export const GET = async (request: Request, { params }: { params: { handle: string } }) => {
  try {
    await connect();

    const handle = params.handle;
    const user = await User.findOne({handle: handle});
    const userData = {
      name: user.handle,
      avatar: user.avatar,
      bio: user.bio,
      links: user.links
    }
    const socials = user.socialMedia;

    return new Response(
      JSON.stringify({ message: "Sucessful found the user.", status: "success", userData, socials }),
      { status: 200 }
    );

  } catch (err: any) {
    console.log(err)
    return new Response(
      JSON.stringify({ message: "An error occurred", status: "error" }),
      { status: 500 }
    );
  }
}