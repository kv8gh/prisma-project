"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import categoryDetails from "@/constants/categoryDetails.json";

export default function Navbar() {
  console.log(Object.keys(categoryDetails));
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    setSearchQuery("");
    router.push(`/products/${searchQuery}`);
  };

  return (
    <main className="h-[100vh] w-full">
      <nav className="flex justify-evenly items-center h-1/6">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        {Object.keys(categoryDetails).map((category, index) => (
          <div key={index} className="relative group">
            <NavLinkWithDropdown category={category}>
              {category}
            </NavLinkWithDropdown>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 py-2 rounded w-48">
              {categoryDetails[category].map((product, id) => (
                <Link
                  key={id}
                  href={`/products/${product.id}`}
                //   as={`/products/${category}/${product.title}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {product.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <form onSubmit={handleSearchSubmit} className="ml-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Search
          </button>
        </form>
      </nav>
    </main>
  );
}

const NavLinkWithDropdown = ({ category, children }) => {
    const [hovered, setHovered] = useState(false);
    const [mouseLeftDropdown, setMouseLeftDropdown] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
      setMouseLeftDropdown(false);
    };
  
    const handleMouseLeave = () => {
      setMouseLeftDropdown(true);
      setTimeout(() => {
        if (mouseLeftDropdown) {
          setHovered(false);
        }
      }); // Adjust the delay here (in milliseconds)
    };
  
    return (
      <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link
          href={`/products/${category}`}
        //   as={`/products/${category}`}
          className={`hover:text-blue-500 ${
            hovered &&
            "border-b-2 border-red-500 transition-all duration-300 ease-in-out"
          }`}
        >
          {children}
        </Link>
        <div className={`absolute ${!hovered && 'hidden'} bg-white shadow-md mt-1 py-2 rounded w-48`} onMouseEnter={() => setMouseLeftDropdown(false)} onMouseLeave={() => setMouseLeftDropdown(true)}>
          {/* Add your dropdown links here */}
        </div>
      </div>
    );
  };
  
