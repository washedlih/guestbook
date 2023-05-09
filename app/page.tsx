import { SignIn, SignOut } from "components/actions";
import Delete from "components/delete";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Form from "components/form";
import prisma from "@/lib/prisma";

async function getPosts() {
  const data = await prisma.post.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 100,
  });
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  const session = await getServerSession(authOptions);

  return (
    <main className="flex flex-col items-center justify-center font-inter text-white">
      <section className="w-full max-w-[500px]">
        <h1 className="font-erode text-4xl">
          Guestbook{" "}
          <span className="font-inter text-sm font-medium text-neutral-400">
            {" "}
            by{" "}
            <a
              href="https://www.washedlih.com/"
              className="text-white hover:text-white hover:underline hover:decoration-neutral-400 hover:underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              washedlih
            </a>
          </span>
        </h1>
        <div className="mb-4 text-sm font-medium text-neutral-400">
          <a
            href="https://github.com/washedlih/guestbook"
            className="hover:text-white hover:underline hover:decoration-neutral-400 hover:underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/washedlih"
            className="ml-2 hover:text-white hover:underline hover:decoration-neutral-400 hover:underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        {session?.user ? (
          <>
            <Form />
            <SignOut />
          </>
        ) : (
          <SignIn />
        )}
        <div className="mt-6 flex flex-col">
          {posts.map((post) => (
            <div key={post.id} className="mb-4 flex flex-col text-sm">
              <p>
                <span className="font-medium text-neutral-200">{post.user.name}: </span>
                {/* <span className="text-xs text-neutral-400">
                  {new Date(post.createdAt)
                    .toLocaleString("en-US", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })
                    .replace(",", "")}
                </span> */}
                <span>{post.message}</span>
              </p>
              {session?.user?.email === "khanglee11@gmail.com" && <Delete postId={post.id} />}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
