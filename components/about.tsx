"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Bachelor Of Computer Science</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
              5+ years experience in Front-End Development and Full Stack Development with a strong background in
      delivering cutting-edge features. Proficient in Vue, React, Angular, Node, and AWS technologies. Skilled in
      designing and building frontend core features, optimizing code for non-blocking performance, and modernizing
      legacy codebases into modern frameworks.
      </p>
      <SectionHeading>Achievements</SectionHeading>
      <ul style={{listStyle: 'unset'}}>
        <li style={{textAlign: 'start',fontSize: '14px'}}> Reduce 60% of the loading time of apps by converting legacy code into a modern framework.</li>
        <li style={{textAlign: 'start',fontSize: '14px'}}>Attract 100% more agents from the past by giving one of my project (Real Estate app) a new UI look and adding new features.</li>
        <li style={{textAlign: 'start',fontSize: '14px'}}>Help one of my client organization to become the #2 real estate app in New York by continuous efforts in the tech area.</li>
        <li style={{textAlign: 'start',fontSize: '14px'}}>10 million New York residents using my newly developed feature comparative market analysis (CMA), which
      helps them to find rental and sale buildings by comparing pricing for similar buildings in neighborhoods.</li>
        <li style={{textAlign: 'start',fontSize: '14px'}}> Automate 90% of one of my organization's day-to-day office tasks by developing an in-house SaaS system.</li>
        <li style={{textAlign: 'start',fontSize: '14px'}}>Cut the one of my previous organization's 100% monthly expenses allocated for Slack. We developed an inhouse chat application for inter-communications between teams and employees.</li>
      </ul>
      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
