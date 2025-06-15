
import { useState } from "react";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#272930] rounded-2xl shadow-md px-6 py-8 flex flex-col gap-8">
      <h2 className="text-2xl font-bold mb-2 text-[#B8B8CA]">Contact</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex-1 space-y-3 text-[#B8B8CA]">
          <div>
            <span className="font-medium">📧 Email: </span>
            <a href="mailto:sathvik8317@gmail.com" className="text-[#00BFFF] underline hover:text-[#B8B8CA]">
              sathvik8317@gmail.com
            </a>
          </div>
          <div>
            <span className="font-medium">📱 Phone: </span>
            <a href="tel:9392529828" className="text-[#00BFFF] underline hover:text-[#B8B8CA]">
              9392529828
            </a>
          </div>
          <div className="flex gap-3 mt-3">
            <a href="https://www.linkedin.com/in/sathvik-konda-b890121a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={28} className="text-[#00BFFF] hover:text-[#B8B8CA] transition" />
            </a>
            <a href="https://github.com/sathvik8317" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={28} className="text-[#00BFFF] hover:text-[#B8B8CA] transition" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form
          className="flex-1 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border border-[#22223b] rounded-lg px-4 py-2 bg-[#22223b] text-[#B8B8CA] focus:outline-none focus:border-[#00BFFF] placeholder:text-[#B8B8CA]/60"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-[#22223b] rounded-lg px-4 py-2 bg-[#22223b] text-[#B8B8CA] focus:outline-none focus:border-[#00BFFF] placeholder:text-[#B8B8CA]/60"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="border border-[#22223b] rounded-lg px-4 py-2 bg-[#22223b] text-[#B8B8CA] focus:outline-none focus:border-[#00BFFF] placeholder:text-[#B8B8CA]/60"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-[#00BFFF] text-[#22223b] px-4 py-2 rounded-lg font-semibold hover:bg-[#B8B8CA] hover:text-[#17191A] transition"
          >
            Send Message
          </button>
          {submitted && (
            <span className="text-[#00BFFF] text-sm mt-2">Message sent! (Form is a demo only.)</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
