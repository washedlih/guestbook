"use client";
import { useRouter } from "next/navigation";

export default function Delete({ postId }: { postId: string }) {
  const router = useRouter();

  async function deletePost(id: string) {
    await fetch("/api/guestbook", {
      method: "DELETE",
      body: id,
    });
    router.refresh();
  }

  return (
    <button
      className="mt-1 flex h-7 w-16 items-center justify-center rounded border border-red-950 bg-black px-2 py-1 font-medium text-red-900 transition-all hover:border-red-900 hover:text-red-700"
      onClick={() => deletePost(postId)}
    >
      Delete
    </button>
  );
}
