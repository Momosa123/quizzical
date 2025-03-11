import React from "react";
import Link from "next/link";

export default function StartQuizzButton() {
  return (
    <Link href="/game-page" className="bg-blue-500 text-white px-4 py-2 rounded-md">
      Start quizz
    </Link>
  );
}
