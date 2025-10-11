import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About",
  description: "About page",
  keywords: ["about", "about us"],
};

const AboutPage = async () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-center text-4xl font-bold">This is about page</h1>
      <div className="flex flex-col space-x-4">
        <Link href={"/about/history"}>History</Link>
        <Link href={"/about/mission"}>Mission</Link>
      </div>
    </div>
  );
};

export default AboutPage;
