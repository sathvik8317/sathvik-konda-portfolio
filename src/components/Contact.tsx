
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
    <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl px-6 py-8 flex flex-col gap-8 border border-[#32324d]">
      <h2 className="text-2xl font-bold text-[#22223b] mb-2">Contact</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex-1 space-y-3">
          <div>
            <span className="font-medium text-[#22223b]">📧 Email: </span>
            <a href="mailto:sathvik8317@gmail.com" className="text-blue-600 underline hover:text-blue-800">
              sathvik8317@gmail.com
            </a>
          </div>
          <div>
            <span className="font-medium text-[#22223b]">📱 Phone: </span>
            <a href="tel:9392529828" className="text-blue-600 underline hover:text-blue-800">
              9392529828
            </a>
          </div>
          <div className="flex gap-3 mt-3">
            <a href="https://linkedin.com/in/sathvik-konda" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={28} className="text-[#22223b] hover:text-[#4ea8de] transition" />
            </a>
            <a href="https://github.com/sathvik8317" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={28} className="text-[#22223b] hover:text-[#4ea8de] transition" />
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
            className="border border-slate-200 rounded-lg px-4 py-2 bg-slate-50 focus:outline-none focus:border-[#4ea8de]"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-slate-200 rounded-lg px-4 py-2 bg-slate-50 focus:outline-none focus:border-[#4ea8de]"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="border border-slate-200 rounded-lg px-4 py-2 bg-slate-50 focus:outline-none focus:border-[#4ea8de]"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-[#4ea8de] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#009ddc] transition"
          >
            Send Message
          </button>
          {submitted && (
            <span className="text-green-600 text-sm mt-2">Message sent! (Form is a demo only.)</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
