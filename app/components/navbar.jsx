"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import categoryDetails from "@/constants/categoryDetails.json";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <span className="absolute z-10 w-auto py-1 px-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2">
        {text}
      </span>
    </div>
  );
};

export default function Navbar() {
  console.log(Object.keys(categoryDetails));
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const allowedSearchTerms = [
    "electronics",
    "jewellery",
    "men's clothing",
    "women's clothing",
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search for:", searchQuery);
    if (allowedSearchTerms.includes(searchQuery.toLowerCase())) {
      // Redirect to search page with the query
      router.push(`/products/${searchQuery.toLowerCase()}`);
    } else {
      // Redirect to product not found page
      router.push("/product-not-found");
    }
    setSearchQuery("");
  };

  return (
    <main className="mt-4 mb-12 w-full">
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
        <div className="flex items-center space-x-6">
          <Tooltip text="Login">
            <button className="text-gray-800 hover:text-blue-500 focus:outline-none">
              <FaUser size={24} />
            </button>
          </Tooltip>
          <Tooltip text="Wishlist">
            <Link
              href="/wishlist"
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <FaHeart size={24} />
            </Link>
          </Tooltip>
          <Tooltip text="Cart">
            <Link
              href="/cart"
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
            >
              <FaShoppingCart size={24} />
            </Link>
          </Tooltip>
        </div>
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
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
      <div
        className={`absolute ${
          !hovered && "hidden"
        } bg-white shadow-md mt-1 py-2 rounded w-48`}
        onMouseEnter={() => setMouseLeftDropdown(false)}
        onMouseLeave={() => setMouseLeftDropdown(true)}
      >
        {/* Add your dropdown links here */}
      </div>
    </div>
  );
};
