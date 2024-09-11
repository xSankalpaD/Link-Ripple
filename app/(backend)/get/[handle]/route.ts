import connect from "@/lib/db";
import User from "@/lib/models/user"

export const GET = async (request: Request, { params }: { params: { handle: string } }) => {
  try {
    await connect();

    const handle = params.handle;
    const user = await User.findOne({handle: handle});
    if (!user) {
      return new Response(
        JSON.stringify({ message: "Did not find the user.", status: "not-found" }),
        { status: 200 }
      );
    }

    const userData = {
      name: user.handle,
      avatar: user.avatar,
      bio: user.bio,
      links: user.links
    }
    const socials = user.socialMedia;
      //test123
    return new Response(
      JSON.stringify({ message: "Sucessful found the user.", status: "success", userData, socials }),
      { status: 200 }
    );

  } catch (err: unknown) {
    console.log(err)
    return new Response(
      JSON.stringify({ message: "An error occurred", status: "error" }),
      { status: 500 }
    );
  }
}