import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiHackerone, SiTryhackme, SiBugcrowd } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import StarBackground from './StarBackground';
import SanskritShloka from './SanskritShloka';
import '@/styles/sanskrit-font.css';

const roles = [
  'A Cybersecurity Enthusiast',
  'A VAPT Specialist',
  'A Bug Bounty Hunter',
  'A CTF Player',
  'An AI-Powered Developer',
  'A Future Cybersecurity Researcher',
  'A Wrestling & Powerlifting Nerd 💪'
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <StarBackground />
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center relative z-20"
      >
        <h1 className="mb-4">
          <span className="text-accent text-2xl md:text-3xl block">Hi, I'm</span>
          <span className="text-white text-5xl md:text-7xl font-extrabold block min-h-[1.2em]">
            <Typewriter
              options={{
                strings: ['Yash Gaikwad', 'Yaxploit'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 130,
                cursor: '_',
                wrapperClassName: 'typewriter-wrapper'
              }}
            />
          </span>
        </h1>

        <div className="text-2xl md:text-3xl font-semibold text-accent mb-8 min-h-[2.5em] flex items-center justify-center">
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              cursor: '|',
              wrapperClassName: 'typewriter-wrapper'
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-400 max-w-2xl mx-auto mb-8"
        >
          I break barriers in offensive cybersecurity — hunting vulnerabilities, exploiting misconfigurations, and weaponizing code.
          Specializing in red teaming, bug bounty hunting, and pushing systems beyond their limits.
          I don't just secure; I exploit to understand, dismantle, and reinforce from the attacker's lens.
        </motion.p>

        <SanskritShloka />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center gap-2 mt-6"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/yash-5gaikwad/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/yaxploit" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://hackerone.com/yaxploit" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
              <SiHackerone className="w-6 h-6" />
            </a>
            <a href="https://tryhackme.com/p/yaxploit" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
              <SiTryhackme className="w-6 h-6" />
            </a>
            <a href="https://bugcrowd.com/yaxploit" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
              <SiBugcrowd className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
