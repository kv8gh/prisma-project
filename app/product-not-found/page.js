import Link from "next/link";

export default function ProductNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-lg mb-8">Sorry, the product you are looking for does not exist.</p>
            <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Go back to Home
            </Link>
        </div>
    );
}
