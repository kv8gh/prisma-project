// 'use client'

// import Link from "next/link"

// export default function Navbar(){
//     return(
//         <main className="h-[100vh] w-full">
//             <nav className="flex justify-evenly items-center h-1/6 ">
//                 <Link href={'/'}>Home</Link>
//                 <Link href={'/'}>Electronics</Link>
//                 <Link href={'/'}>Jewellery</Link>
//                 <Link href={'/'}>Men's clothes</Link>
//                 <Link href={'/'}>Women's clothes</Link>
//             </nav>
//         </main>
//     )
// }

'use client'

import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Navbar(){
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Perform search functionality
        console.log("Search for:", searchQuery);
        setSearchQuery('');
        router.push(`/products/${searchQuery}`);
    };
    return(
        <main className=" w-full">
            <nav className="flex justify-evenly items-center h-1/6">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <div className="relative group">
                    <NavLinkWithDropdown href="/">Electronics</NavLinkWithDropdown>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 py-2 rounded w-48">
                        <Link href="/mens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Shirts
                        </Link>
                        <Link href="/mens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Trousers
                        </Link>
                        <Link href="/mens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Jackets
                        </Link>
                    </div>
                </div>
                <div className="relative group">
                    <NavLinkWithDropdown href="/">Jewellery</NavLinkWithDropdown>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 py-2 rounded w-48">
                        <Link href="/womens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Dresses
                        </Link>
                        <Link href="/womens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Skirts
                        </Link>
                        <Link href="/womens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Tops
                        </Link>
                    </div>
                </div>
                <div className="relative group">
                    <NavLinkWithDropdown href="/">Men's clothes</NavLinkWithDropdown>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 py-2 rounded w-48">
                        <Link href="/mens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Shirts
                        </Link>
                        <Link href="/mens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Trousers
                        </Link>
                        <Link href="/mens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Jackets
                        </Link>
                    </div>
                </div>
                <div className="relative group">
                    <NavLinkWithDropdown href="/">Women's clothes</NavLinkWithDropdown>
                    <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 py-2 rounded w-48">
                        <Link href="/womens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Dresses
                        </Link>
                        <Link href="/womens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Skirts
                        </Link>
                        <Link href="/womens/clothing" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            Tops
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSearchSubmit} className="ml-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="py-2 px-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <button type="submit" className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Search
                        </button>
                    </form>
            </nav>
        </main>
    )
}

const NavLinkWithDropdown = ({href, children}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative group">
            <Link href={href}
            className={`hover:text-blue-500 ${hovered && 'border-b-2 border-red-500 transition-all duration-300 ease-in-out'}`} 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
            >
                    {children}
                
            </Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 py-2 rounded w-48">
                {/* Add your dropdown links here */}
            </div>
        </div>
    );
}