import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (req.method === "POST") {
    const post = JSON.parse(req.body);
    if (!session) {
      return res.status(403).send("Forbidden");
    }
    const prismaUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email || undefined,
      },
    });
    try {
      await prisma.post.create({
        data: {
          message: post.message as string,
          userEmail: prismaUser?.email as string,
        },
      });
      
      return res.status(200).send("Post created");
    } catch (error) {
      return res.status(500).send("Something went wrong");
    }
  }

  if (req.method === "DELETE") {
    const postId = req.body;
    if (!session || session?.user?.email !== "khanglee11@gmail.com") {
      return res.status(403).send("Forbidden");
    }
    try {
      await prisma.post.delete({
        where: {
          id: postId as string,
        },
      });
      return res.status(200).send("Post deleted");
    } catch (error) {
      return res.status(500).send("Something went wrong");
    }
  }
}
