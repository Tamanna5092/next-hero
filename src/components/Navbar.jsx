"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavbarPage = () => {
  const pathName = usePathname();
  const route = useRouter();
  const session = useSession();
  console.log("session", session);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    route.push("/api/auth/signin");
  };

  if (pathName.includes("dashboard")) {
    return <div className="bg-green-400">dashboard layout</div>;
  }

  return (
    <nav className="flex justify-between items-center bg-gray-400 p-4">
      <h4 className="text-3xl">
        Next <span className="text-red-600">Hero</span>
      </h4>
      <ul className="flex items-center space-x-4">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              className={`${pathName === link.path && "text-red-400"}`}
              key={link.path}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center">
          <p>{session?.data?.user?.name}</p>
          <p>{session?.data?.user?.type}</p>
        </div>
        <div>
          {session?.data?.user?.image && (
            <Image
              width={50}
              height={80}
              src={session?.data?.user?.image}
              alt={session?.data?.user?.name}
              className="rounded-full"
            />
          )}
        </div>
          <Link href={'/api/auth/signup'} className="bg-white text-red-600 p-4">
            Sign Up
          </Link>
        {session.status === "authenticated" ? (
          <button onClick={()=>signOut()} className="bg-white text-red-600 p-4 cursor-pointer">
            Log out
          </button>
        ) : (
          <button className="bg-white text-red-600 p-4 cursor-pointer" onClick={handler}>
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavbarPage;
