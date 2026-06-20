"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";

const Experience = () => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const rootRef = useRef<HTMLElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  const setRefs = (el: HTMLElement | null) => {
    (rootRef as React.MutableRefObject<HTMLElement | null>).current = el;
    inViewRef(el);
  };

  useEffect(() => {
    if (!inView || !rootRef.current) return;
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate(".exp-header", {
        opacity: { from: 0, to: 1 },
        translateY: { from: 20, to: 0 },
        duration: 600,
        ease: "outExpo",
      });
      animate(".exp-card", {
        opacity: { from: 0, to: 1 },
        translateX: { from: -20, to: 0 },
        duration: 600,
        delay: stagger(100, { start: 150 }),
        ease: "outExpo",
      });
    });
    return () => scopeRef.current?.revert();
  }, [inView]);

  const experiences = [
    {
      title: "Software Engineer - I",
      company: "Elanco",
      period: "Oct 2024 - Present",
      description: [
        "Leading full-stack development of enterprise applications serving thousands of users globally",
        "Architecting scalable microservices using Node.js and React, achieving 40% improvement in application performance through code optimization and caching strategies",
        "Spearheading DevOps initiatives including CI/CD pipeline automation, infrastructure as code with Terraform, and cloud resource optimization on AWS, resulting in 30% reduction in deployment time",
        "Collaborating with cross-functional teams to deliver high-quality features while maintaining 99.9% uptime",
        "Mentoring junior developers and conducting code reviews to ensure best practices and coding standards"
      ],
      skills: ["React", "Node.js", "AWS", "CI/CD", "Terraform", "Microservices"],
    },
    {
      title: "Trainee Engineer",
      company: "Elanco",
      period: "Oct 2023 - Oct 2024",
      description: [
        "Completed comprehensive training program in modern web development, cloud technologies, and software engineering best practices",
        "Developed production-ready applications using Next.js and React with server-side rendering, improving page load times by 50%",
        "Designed and implemented RESTful APIs and database schemas in PostgreSQL, handling complex data relationships and optimizing query performance",
        "Gained hands-on experience with AWS services including EC2, S3, Lambda, and RDS",
        "Containerized applications using Docker and Docker Compose for consistent development and deployment environments",
        "Participated in agile ceremonies and collaborated with senior engineers on critical projects"
      ],
      skills: ["Next.js", "PostgreSQL", "AWS", "Docker", "TypeScript", "REST APIs"],
    },
    {
      title: "Software Engineer Intern",
      company: "Tiramisu New Media Solutions",
      period: "Jul 2023 - Oct 2023",
      description: [
        "Successfully led the migration of multiple legacy Vue 2/Nuxt 2 applications to Vue 3/Nuxt 3, leveraging Composition API and script setup syntax for improved code maintainability and performance",
        "Implemented automated CI/CD pipelines using GitHub Actions, reducing deployment time from hours to minutes and enabling multiple deployments per day",
        "Conducted comprehensive performance load testing using Locust framework, identifying and resolving bottlenecks that improved application response time by 35%",
        "Collaborated with design team to implement responsive UI components, ensuring seamless user experience across devices",
        "Documented migration strategies and best practices, creating knowledge base for future team reference"
      ],
      skills: ["Vue 3", "Nuxt 3", "CI/CD", "Locust", "GitHub Actions", "Performance Testing"],
    },
    {
      title: "Software Engineer Trainee",
      company: "BETSOL",
      period: "Jun 2022 - Jul 2022",
      description: [
        "Designed and developed a comprehensive employee onboarding portal from scratch using React for the frontend and Node.js/Express for the backend, streamlining the onboarding process for 100+ new employees",
        "Implemented secure authentication and authorization using JWT tokens and role-based access control",
        "Integrated AWS services including SES for automated email notifications, S3 for document storage and retrieval, and Lambda for serverless processing",
        "Built RESTful APIs with proper error handling and input validation",
        "Designed normalized database schema in PostgreSQL ensuring data integrity and optimal query performance",
        "Created responsive UI components following Material-UI design principles, ensuring accessibility and mobile-first approach"
      ],
      skills: ["React", "Node.js", "PostgreSQL", "AWS", "Express", "JWT", "Material-UI"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 md:px-8 relative overflow-hidden" ref={setRefs}>
      <div className="max-w-6xl mx-auto">
        <div className="exp-header text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Work History</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey building scalable products and impactful engineering solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-card group"
              style={{ opacity: 0 }}
            >
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-foreground/60 text-sm md:text-right mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="text-foreground/70 mb-4 leading-relaxed space-y-2">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
