
import { useState } from "react";
import { Linkedin, Github } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendError(null);
    try {
      // 1. Save to Supabase
      const { error } = await supabase
        .from('messages')
        .insert([
          { name: form.name, email: form.email, message: form.message }
        ]);

      if (error) throw error;

      // 2. Send Email using EmailJS
      // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
      // Sign up at https://www.emailjs.com/
      const serviceID = "YOUR_SERVICE_ID";
      const templateID = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      // Only attempt to send email if keys are configured (not default placeholders)
      if (serviceID !== "YOUR_SERVICE_ID") {
        await emailjs.send(
          serviceID,
          templateID,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            to_email: "sathvik8317@gmail.com", // Your email address
          },
          publicKey
        );
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      setSendError("There was an issue sending your message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-md px-6 py-8 flex flex-col gap-8">
      <h2 className="text-2xl font-bold mb-2 text-foreground">Contact</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Info */}
        <div className="flex-1 space-y-3 text-foreground">
          <div>
            <span className="font-medium">📧 Email: </span>
            <a href="mailto:sathvik8317@gmail.com" className="text-[#00BFFF] underline hover:text-muted-foreground">
              sathvik8317@gmail.com
            </a>
          </div>
          <div>
            <span className="font-medium">📱 Phone: </span>
            <a href="tel:9392529828" className="text-[#00BFFF] underline hover:text-muted-foreground">
              9392529828
            </a>
          </div>
          <div className="flex gap-3 mt-3">
            <a href="https://www.linkedin.com/in/sathvik-konda-b890121a1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={28} className="text-[#00BFFF] hover:text-muted-foreground transition" />
            </a>
            <a href="https://github.com/sathvik8317" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={28} className="text-[#00BFFF] hover:text-muted-foreground transition" />
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <form
          className="flex-1 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-foreground font-medium">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
            className="border border-border rounded-lg px-4 py-2 bg-background text-foreground focus:outline-none focus:border-[#00BFFF] placeholder:text-muted-foreground"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="email" className="text-foreground font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-border rounded-lg px-4 py-2 bg-background text-foreground focus:outline-none focus:border-[#00BFFF] placeholder:text-muted-foreground"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="message" className="text-foreground font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            rows={4}
            className="border border-border rounded-lg px-4 py-2 bg-background text-foreground focus:outline-none focus:border-[#00BFFF] placeholder:text-muted-foreground"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-[#00BFFF] text-background px-4 py-2 rounded-lg font-semibold hover:bg-[#00BFFF]/90 transition flex items-center justify-center gap-2"
            disabled={isSending}
          >
            {isSending && (
              <svg className="animate-spin h-5 w-5 mr-1 text-background" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
              </svg>
            )}
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {submitted && (
            <span className="text-[#00BFFF] text-sm mt-2">Message sent!</span>
          )}
          {sendError && (
            <span className="text-destructive text-sm mt-2">{sendError}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
