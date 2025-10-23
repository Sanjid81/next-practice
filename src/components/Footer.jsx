// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-5xl mx-auto p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NextBlog by Sanjida
      </div>
    </footer>
  );
}
