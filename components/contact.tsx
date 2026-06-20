"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  const setRefs = (el: HTMLElement | null) => {
    (rootRef as React.MutableRefObject<HTMLElement | null>).current = el;
    inViewRef(el);
  };

  useEffect(() => {
    if (!inView || !rootRef.current) return;
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate(".contact-header", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        ease: "outExpo",
      });
      animate(".contact-col", {
        opacity: { from: 0, to: 1 },
        translateX: { from: -20, to: 0 },
        duration: 600,
        delay: 150,
        ease: "outExpo",
      });
      animate(".contact-form", {
        opacity: { from: 0, to: 1 },
        translateX: { from: 20, to: 0 },
        duration: 600,
        delay: 200,
        ease: "outExpo",
      });
    });
    return () => scopeRef.current?.revert();
  }, [inView]);
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bp71712@gmail.com",
      href: "mailto:bp71712@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "Available upon request",
      href: "tel:+91",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
      href: null,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/BhanuPrakash056", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/bhanu-prakash-r", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
      <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden" ref={setRefs}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'm always interested in hearing about new opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info & Social */}
          <div className="contact-col space-y-6" style={{ opacity: 0 }}>
            {/* Intro Card */}
            <Card className="bg-card/50 backdrop-blur-xl border-border">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Let's Create Something Amazing
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">24h</div>
                    <div className="text-sm text-foreground/60">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">15+</div>
                    <div className="text-sm text-foreground/60">Projects Delivered</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Tag = info.href ? "a" : "div";
                return (
                  <Tag
                    key={i}
                    {...(info.href ? { href: info.href } : {})}
                    className="group hover:translate-x-2 hover:scale-[1.02] transition-all duration-300 block"
                  >
                    <Card className="bg-card/50 backdrop-blur-xl border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} opacity-10 group-hover:opacity-20 transition-opacity`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className={`text-sm bg-gradient-to-r ${info.color} bg-clip-text text-transparent font-medium`}>
                            {info.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Tag>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-xl border-border">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form" style={{ opacity: 0 }}>
            <Card className="bg-card/50 backdrop-blur-xl border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-background/50 border transition-all text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.name
                          ? "border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-background/50 border transition-all text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.email
                          ? "border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-background/50 border transition-all text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[150px] resize-none ${
                        errors.message
                          ? "border-red-500"
                          : "border-border focus:border-primary"
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <p className="text-green-400 text-sm font-medium">
                        Thanks for reaching out! I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <p className="text-red-400 text-sm font-medium">
                        Oops! Something went wrong. Please try again.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold flex items-center justify-center gap-2 shadow-2xl shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
