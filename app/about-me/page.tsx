"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function AboutMe() {
  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ivyn_Yak_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          <header className="text-center">
            <h1 className="mt-4 text-3xl font-bold">Ivyn Yak</h1>
            <p className="mt-2 text-xl text-muted-foreground">
              Looking for 2025 Summer Internship
            </p>
            <p className="mt-4 text-muted-foreground">
              Passionate about creating elegant solutions to complex problems.
              With 5 years of experience in web development, I specialize in
              React, Node.js, and cloud technologies.
            </p>
            <Button onClick={handleDownloadResume} className="mt-8">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "Python",
                "AWS",
                "Docker",
              ].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">
                  Software Engineer Intern - Singapore University of Social
                  Sciences (SUSS)
                </h3>
                <p className="text-sm text-muted-foreground">
                  August - December 2024
                </p>
                <p className="mt-2 text-muted-foreground">
                  Virtual Lab Infrastructure and AI & Automation
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  AI/Machine Learning Intern - Singapore Examinations and
                  Assessment Board (SEAB)
                </h3>
                <p className="text-sm text-muted-foreground">
                  June - August 2024
                </p>
                <p className="mt-2 text-muted-foreground">
                  Research and Development Division
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">
                  <Link
                    href="https://github.com/ivyn-yak/florist-mern"
                    className="flex items-center hover:underline"
                  >
                    Ecommerce Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </h3>
                <p className="mt-2 text-muted-foreground">
                  A full-stack and fully responsive web application. Built with
                  React, Node.js, MongoDB and TailwindCSS.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">
                  <Link
                    href="https://github.com/ivyn-yak/scdf-dell-2024"
                    className="flex items-center hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SCDF X Dell Hackathon 2024
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Trained a CNN model with U-Net architecture, using TensorFlow
                  and Keras, to outline a fire in images. Deployed model and
                  frontend using Docker, Harbour, Kubernetes and Red Hat Open
                  Shift.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  (window.location.href =
                    "mailto:ivyn.yak.2022@scis.smu.edu.sg")
                }
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/ivyn-yak", "_blank")
                }
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://linkedin.com/in/ivynyak", "_blank")
                }
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
