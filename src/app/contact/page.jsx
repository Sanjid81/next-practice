export default function ContactPage() {
  return (
    <div className="bg-black p-10 rounded shadow-md w-[500px] text-center">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">You can reach us at contact@mywebsite.com</p>
     <div className="bg-green-700">
       <input
        type="text"
        placeholder="Your Name"
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full mb-4 p-2 border rounded"
      />
      <textarea
        placeholder="Your Message"
        className="w-full mb-4 p-2 border rounded"
      />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Send Message
      </button>
     </div>
    </div>
  );
}
