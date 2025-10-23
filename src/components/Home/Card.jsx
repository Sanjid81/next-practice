"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <section className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-black font-bold text-center mb-10">
        🛍️ Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-contain bg-gray-50 p-4"
            />

            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-lg text-black font-semibold mb-2 line-clamp-1">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>

              <a href="#" className="mt-auto bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
