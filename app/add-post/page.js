'use client'
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Addpost(){
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const router = useRouter();
  
    const handleSubmit = async(e) => {
      e.preventDefault();

      try {
          const response = await fetch('/api/newpost', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name, id })
          });
  
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
          console.log(data); // Log the response data
          router.refresh()
      } catch (err) {
          console.error(err);
      }
  };
  

    return(
        <div className="min-h-screen flex items-center justify-center bg-black">
        <Link href={'/'}>HOME</Link>
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl mb-4">Enter Name and ID</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input mt-1 block w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700">
              ID
            </label>
            <input
              type="text"
              id="id"
              className="form-input mt-1 block w-full"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter your ID"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}