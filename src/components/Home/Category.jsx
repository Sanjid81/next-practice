'use client';

import Marquee from "react-fast-marquee";

export default function AutoMarquee() {
  return (
    <div className="w-full bg-gray-100 py-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        🎧 Trending Albums
      </h2>

      <div className="w-full max-w-[1200px] overflow-hidden rounded-lg border bg-white shadow-md">
        <Marquee
          pauseOnHover
          speed={50}
          gradient={false}
          className="py-4"
        >
          {[
            "https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677",
            "https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141",
            "https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf",
            "https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f",
            "https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288",
            "https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Album ${i + 1}`}
              className="aspect-square w-[120px] mx-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </Marquee>
      </div>
      
    </div>
  );
}
