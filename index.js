import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting No. 1 Entertainment! We'll be in touch.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold tracking-wide">No. 1 Entertainment</h1>
        <div className="space-x-6 text-lg">
          <a href="#about" className="hover:text-gray-600">About</a>
          <a href="#services" className="hover:text-gray-600">Services</a>
          <a href="#contact" className="hover:text-gray-600">Contact</a>
        </div>
      </nav>

      <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
        <h2 className="text-5xl font-bold mb-4">Elevating Entertainment to No. 1</h2>
        <p className="text-xl max-w-2xl mb-6">
          Professional, elegant, and unforgettable experiences tailored just for you.
        </p>
        <button className="rounded-2xl text-lg px-6 py-3 bg-white text-gray-900">Get in Touch</button>
      </section>

      <section id="about" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            At <strong>No. 1 Entertainment</strong>, we specialize in delivering top-tier
            entertainment services that inspire, captivate, and create lasting
            impressions. With a commitment to elegance and professionalism, we
            bring your vision to life in the most unforgettable way.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="shadow-md p-8 bg-white rounded-2xl">
              <h4 className="text-2xl font-semibold mb-4">Billboards</h4>
              <p className="text-gray-600">
                Eye-catching billboard advertising that maximizes brand visibility
                and reaches thousands daily with bold, memorable designs.
              </p>
            </div>

            <div className="shadow-md p-8 bg-white rounded-2xl">
              <h4 className="text-2xl font-semibold mb-4">Out-of-Home (OOH) Ads</h4>
              <p className="text-gray-600">
                Strategic OOH campaigns across high-traffic areas to engage your
                audience in the real world with maximum impact and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full p-3 border rounded-lg"
            />
            <button type="submit" className="w-full rounded-2xl text-lg py-3 bg-gray-900 text-white">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-6 bg-gray-900 text-white">
        <p>© {new Date().getFullYear()} No. 1 Entertainment. All rights reserved.</p>
      </footer>
    </div>
  );
}
