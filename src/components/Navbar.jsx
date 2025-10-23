import Link from "next/link";

export default function Navbar() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Insights", path: "/insights" },
    { name: "Leadership", path: "/leadership" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg py-4 px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-600 hover:text-indigo-500 transition-colors duration-300 cursor-pointer">
          MyWebsite
        </h1>

        {/* Menu Items */}
        <ul className="flex gap-8 text-gray-700 font-medium text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="relative group px-2 py-1 hover:text-indigo-600 transition-colors duration-300"
              >
                {item.name}
                {/* Underline effect on hover */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
