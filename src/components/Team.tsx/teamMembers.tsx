"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TeamMemberX } from "../TeamMemberX/TeamMemberX";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Team Member Data
const teamMembers = [
  {
    name: "John Doe",
    role: "Organizer",
    imgSrc: "/core/IMG_7900.png",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    role: "Co-organizer",
    imgSrc: "/core/IMG_7863.png",
    linkedin: "https://linkedin.com/in/janesmith",
  },
  {
    name: "Alice Johnson",
    role: "Speaker Liaison",
    imgSrc: "/core/IMG_7874.png",
    linkedin: "https://linkedin.com/in/alicejohnson",
  },
  {
    name: "Bob Lee",
    role: "Marketing Lead",
    imgSrc: "/core/IMG_7931.png",
    linkedin: "https://linkedin.com/in/boblee",
  },
  {
    name: "Charlie Brown",
    role: "Technical Director",
    imgSrc: "/core/IMG_7902.png",
    linkedin: "https://linkedin.com/in/charliebrown",
  },
  {
    name: "David White",
    role: "Volunteer Coordinator",
    imgSrc: "/core/IMG_7868.png",
    linkedin: "https://linkedin.com/in/davidwhite",
  },
  {
    name: "Eva Green",
    role: "Sponsorship Manager",
    imgSrc: "/core/IMG_7765.png",
    linkedin: "https://linkedin.com/in/evagreen",
  },
  {
    name: "Frank Harris",
    role: "Event Planner",
    imgSrc: "/core/IMG_7847.png",
    linkedin: "https://linkedin.com/in/frankharris",
  },
  {
    name: "Eva Green",
    role: "Sponsorship Manager",
    imgSrc: "/core/IMG_8772.png",
    linkedin: "https://linkedin.com/in/evagreen",
  },
  {
    name: "Frank Harris",
    role: "Event Planner",
    imgSrc: "/core/IMG_3158.png",
    linkedin: "https://linkedin.com/in/frankharris",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-99">
          <video autoPlay loop muted className="object-cover w-full h-full">
            <source src="/videos/team.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="w-full max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                TEDx<span className="text-[#FF3A3A]">Team</span>
              </motion.h1>
              <motion.p
                className="text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Meet the passionate individuals behind our TEDx event.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white text-lg px-8 py-3">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TED and TEDx Explanation Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#1A0000] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF3A3A]">
            About TED and TEDx
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-black/50 border border-[#FF3A3A]/20 overflow-hidden rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#FF3A3A]">TED</h3>
                <p className="text-white">
                  TED is a nonprofit devoted to spreading ideas, usually in the
                  form of short, powerful talks (18 minutes or less). TED began
                  in 1984 as a conference where Technology, Entertainment and
                  Design converged, and today covers almost all topics — from
                  science to business to global issues.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border border-[#FF3A3A]/20 overflow-hidden rounded-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#FF3A3A]">TEDx</h3>
                <p className="text-white">
                  TEDx are independent TED-like events, which can be organized
                  by anyone who obtains a free license from TED, agreeing to
                  follow certain principles. TEDx events are non-profit but may
                  use an admission fee or commercial sponsorship to cover costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gradient-to-b from-[#1A0000] to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#FF3A3A]">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-transparent mb-4">
                  {/* Custom X Background */}
                  <div className="absolute inset-0 text-[#FF3A3A]/20 group-hover:text-[#FF3A3A]/30 transition-colors">
                    <TeamMemberX />
                  </div>
                  {/* Member Image */}
                  <div className="absolute inset-0 z-10">
                    <Image
                      src={member.imgSrc}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF3A3A] hover:text-[#FF3A3A]/90 inline-block"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient Background with z-index set to be below content */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1A0000] to-[#FF3A3A] opacity-50 z-0" />

        <div className="relative container mx-auto px-4 z-10">
          {" "}
          {/* Set z-index for FAQ content */}
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Frequently Asked <span className="text-[#FF3A3A]">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#FF3A3A]/20 z-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white text-left">
                  What is TEDx and how is it different from TED?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  TEDx events are independently organized TED-style events that
                  bring people together to share ideas worth spreading at the
                  local level. While TED is the parent organization, TEDx events
                  are organized by local communities under a free license from
                  TED.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-white text-left">
                  How can I join the TEDx organizing team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We welcome passionate individuals who want to contribute to
                  spreading ideas in our community. You can apply to join our
                  team by sending your resume and a letter of interest
                  explaining why you'd like to be part of TEDx. We have various
                  roles available throughout the year.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-white text-left">
                  What roles are available on the team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We have diverse roles including event planning, speaker
                  curation, marketing, technical production, volunteer
                  coordination, and sponsorship management. Each role is crucial
                  to creating an impactful TEDx event.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-white text-left">
                  How much time commitment is required?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Time commitment varies by role and event phase. Generally,
                  team members commit 5-10 hours per week, with increased
                  involvement closer to the event date. We value flexibility and
                  work with each team member's schedule.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-white text-left">
                  Do I need previous experience with TEDx?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  While previous TEDx experience is valuable, it's not required.
                  We look for individuals who are passionate about ideas, have
                  relevant skills for their role, and are committed to our
                  mission of spreading innovative ideas in the community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-white text-left">
                  How can I get involved without joining the core team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  There are many ways to get involved! You can volunteer during
                  the event, become a sponsor, nominate speakers, or help
                  promote the event in your network. Each contribution helps
                  make our TEDx event more impactful.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="text-center mt-12 z-10">
            <Button className="bg-[#FF3A3A] hover:bg-[#FF3A3A]/90 text-white text-lg px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
        {/* Image Background with z-index set to the bottom */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay z-0" />
      </section>
    </main>
  );
}
