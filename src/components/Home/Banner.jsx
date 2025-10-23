export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-black-50 to-black-100 text-white py-20">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">NextBlog</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Read amazing blogs, learn new things, and explore creative minds.
        </p>
        <a
          href="#blogs"
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Explore Blogs
        </a>
      </div>

      <div className="absolute inset-0 bg-[url('/banner.webp')] bg-cover bg-center opacity-10"></div>



      {/* <div className="relative w-full h-[400px]">
        <img
          src="/banner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
        </div>
      </div> */}
    </section>
  );
}
