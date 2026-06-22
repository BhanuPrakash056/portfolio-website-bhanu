"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger, splitText } from "animejs";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, MessageSquare, Github, Linkedin, ExternalLink, ArrowUpRight, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NOTION_FORM_URL =
  "https://tropical-nitrogen-82b.notion.site/3860cebcf1b1801eb45af28d107ba0b3";

const Contact = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const splitterRef = useRef<{ chars: Element[]; revert: () => void } | null>(null);

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

      if (h2Ref.current) {
        splitterRef.current = splitText(h2Ref.current, { chars: { wrap: "clip" } }) as {
          chars: Element[];
          revert: () => void;
        };
        animate(splitterRef.current.chars, {
          y: ["110%", "0%"],
          duration: 600,
          delay: stagger(22, { start: 120 }),
          ease: "outExpo",
        });
      }
    });
    return () => {
      scopeRef.current?.revert();
      splitterRef.current?.revert();
    };
  }, [inView]);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bp71712@gmail.com",
      href: "mailto:bp71712@gmail.com",
      color: "from-blue-500 to-cyan-500",
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
    { icon: Github,   href: "https://github.com/BhanuPrakash056",         label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/bhanu-prakash-r",    label: "LinkedIn" },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      ref={setRefs}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2
            ref={h2Ref}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'm always interested in hearing about new
            opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
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
                      I'm always excited to discuss new projects, creative ideas, or
                      opportunities to be part of your vision.
                    </p>
                  </div>
                </div>

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

            {/* Contact Info */}
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
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${info.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p
                            className={`text-sm bg-gradient-to-r ${info.color} bg-clip-text text-transparent font-medium`}
                          >
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
                      aria-label={social.label}
                      className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Column — Notion Form CTA */}
          <div className="contact-form" style={{ opacity: 0 }}>
            <Card className="bg-card/50 backdrop-blur-xl border-border h-full min-h-[480px] flex flex-col">
              <CardContent className="p-8 flex flex-col flex-1 justify-between gap-8">
                {/* Top: description */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wide mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Powered by Notion Forms
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Drop Me a Message
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Fill out the quick form on Notion — it takes under a minute. I'll
                    respond within 24 hours.
                  </p>

                  {/* What to expect */}
                  <ul className="space-y-3">
                    {[
                      "Your name & email",
                      "Your phone number",
                      "A short message about your project",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom: CTA button */}
                <div className="space-y-4">
                  <a
                    href={NOTION_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-semibold text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <Send size={18} />
                    Open Contact Form
                    <ArrowUpRight
                      size={16}
                      className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>

                  <p className="text-center text-[11px] text-muted-foreground/40 font-mono">
                    Opens in a new tab · Hosted on Notion
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
