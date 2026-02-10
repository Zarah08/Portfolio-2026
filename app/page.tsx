'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Mint Education Services Website',
      description: 'Responsive corporate website developed as part of a remote team. Focused on clean UI, usability, and cross-device compatibility.',
      tags: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
      link: 'https://github.com/Zarah08/Mint-Education-Services',
      gradient: 'from-primary/30 via-primary/10 to-transparent',
    },
    {
      title: 'Webinar Management Application',
      description: 'Enterprise-level webinar platform for managing events and training staff. Built with ReactJS and TypeScript, fully responsive.',
      tags: ['ReactJS', 'TypeScript', 'State Management', 'APIs'],
      link: 'https://github.com/Zarah08/webinar-app',
      gradient: 'from-secondary/30 via-secondary/10 to-transparent',
    },
    {
      title: 'Automated Course & Supervisor Matching System',
      description: 'Web-based academic system for automating course allocation and supervisor assignment. Built with HTML, CSS, JavaScript, PHP, and MySQL.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Full-Stack'],
      link: 'https://github.com/Zarah08/fyp-system',
      gradient: 'from-accent/30 via-accent/10 to-transparent',
    },
  ];

  const skills = [
    'ReactJS',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Git',
    'Responsive Design',
    'Remote Collaboration',
    'Web Performance',
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/15 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-40 right-1/3 w-96 h-96 bg-accent/15 rounded-full mix-blend-screen blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-background/70 border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            ZAK
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              About
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              Projects
            </a>
            <a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              Skills
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 w-fit">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-medium text-primary">Front-End Developer</span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-balance">Zarah Abubakar Kari</span>
                </h1>
              </div>
              
              <p className="text-xl text-foreground/80 leading-relaxed max-w-xl font-light">
                Crafting beautiful, responsive web experiences with ReactJS and TypeScript. 2+ years of experience building scalable, user-centric applications for teams worldwide.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="mailto:karizarah46@gmail.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  Get in Touch
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="https://github.com/Zarah08"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border rounded-lg font-semibold hover:bg-card/80 hover:border-primary/50 transition-all duration-300"
                >
                  <Github size={20} />
                  GitHub
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl border border-border/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                  <div className="relative z-10 text-center">
                    <div className="text-8xl font-black text-primary/30 mb-4 select-none">{'</>'}</div>
                    <p className="text-foreground/50 text-sm font-medium">Building the Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-balance">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am passionate about creating beautiful, efficient interfaces that solve real problems. With a strong foundation in modern web technologies, I focus on writing maintainable code and delivering exceptional user experiences.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in web development has taken me through collaborative remote teams where I've honed my skills in problem-solving, communication, and delivering pixel-perfect implementations. I thrive in environments that value innovation and continuous learning.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I am not coding, I explore new technologies, contribute to open-source projects, and share knowledge with the developer community. I'm always looking for ways to grow and push the boundaries of what's possible on the web.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm open to collaborations and new opportunities. Whether you're looking to build something amazing or just want to chat about web development, I'd love to connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-balance">Featured Projects</h2>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <Link
                key={idx}
                href={project.link}
                target="_blank"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-card to-card/50 hover:border-primary/50 transition-all duration-500 transform hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 p-8 lg:p-12">
                    <div className="space-y-4 mb-6">
                      <h3 className="text-3xl lg:text-4xl font-bold text-balance group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-4 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/30 group-hover:bg-primary/25 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      View Project
                      <ExternalLink size={20} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-balance">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="font-semibold text-lg text-foreground relative z-10 text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 sm:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-balance">Let's Create Something Amazing</h2>
          <p className="text-xl text-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Reach out and let's build something great together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="mailto:karizarah46@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              karizarah46@gmail.com
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+2348094147777"
              className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-lg font-semibold hover:bg-card hover:border-primary/50 transition-all duration-300"
            >
              📞 +234 809 414 7777
            </Link>
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="https://github.com/Zarah08"
              target="_blank"
              className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} className="text-foreground" />
            </Link>
            <Link
              href="https://linkedin.com/in/zarah-kari-a51696305"
              target="_blank"
              className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} className="text-foreground" />
            </Link>
            <Link
              href="mailto:karizarah46@gmail.com"
              className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} className="text-foreground" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 border-t border-border/50 bg-card/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center text-foreground/50 text-sm">
          <p>&copy; 2026 Zarah Abubakar Kari. Crafted with passion.</p>
        </div>
      </footer>
    </div>
  );
}
