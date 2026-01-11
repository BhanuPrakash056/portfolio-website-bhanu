"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      // Simulate API call - replace with actual form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would integrate with a service like:
      // - Formspree: https://formspree.io/
      // - EmailJS: https://www.emailjs.com/
      // - Netlify Forms
      // - Or your own backend API

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-0" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-foreground/70 mb-8">
              I'm always interested in hearing about new opportunities and
              projects. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:bp71712@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all"
                whileHover={{ x: 5 }}
              >
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-foreground/60">bp71712@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+91"
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all"
                whileHover={{ x: 5 }}
              >
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-foreground/60">Available upon request</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border"
                whileHover={{ x: 5 }}
              >
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-foreground/60">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-card border transition-colors text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.name
                    ? "border-red-500"
                    : "border-border focus:border-primary"
                }`}
                placeholder="Your full name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-card border transition-colors text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  errors.email
                    ? "border-red-500"
                    : "border-border focus:border-primary"
                }`}
                placeholder="your.email@example.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-card border transition-colors text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[120px] resize-none ${
                  errors.message
                    ? "border-red-500"
                    : "border-border focus:border-primary"
                }`}
                placeholder="Tell me about your project or just say hello..."
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
              whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                className="p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-400 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={20} />
                <div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm">
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 flex items-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <AlertCircle size={20} />
                <div>
                  <p className="font-medium">Failed to send message</p>
                  <p className="text-sm">
                    Please try again or contact me directly at bp71712@gmail.com
                  </p>
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
