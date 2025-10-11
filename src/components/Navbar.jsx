"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavbarPage = () => {
  const pathName = usePathname();
  const route = useRouter()
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
    route.push('/login')
  }

  if(pathName.includes('dashboard')){
    return <div className="bg-green-400">
      dashboard layout
    </div>
  }

  return (
    <nav className="flex justify-between items-center bg-gray-400 p-4">
      <h4 className="text-3xl">
        Next <span className="text-red-600">Hero</span>
      </h4>
      <ul className="flex items-center space-x-4">
        {links.map((link) => (
          <Link
            className={`${pathName === link.path && "text-red-400"}`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </ul>
      <button className="bg-white text-black p-4" onClick={handler}>Login</button>
    </nav>
  );
};

export default NavbarPage;
