"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaEnvelope, FaGraduationCap, FaTools, FaBuilding, FaFolder, FaGithub, FaLaptopCode, FaLinkedin, FaFacebook, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVuedotjs, SiNuxtdotjs } from "react-icons/si";
import { motion } from 'framer-motion';
import Notification from './Notification';
import MockFileManager from './MockFileManager';

interface DesktopIcon {
  title: string;
  icon: React.ReactNode;
  position: {
    top: number;
    left: number;
  };
}

interface Position {
  top: number;
  left: number;
}

const desktopIcons: DesktopIcon[] = [
  {
    title: "featuredProjects",
    icon: <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-2 shadow-lg">
      <FaFolder size={32} className="text-white/90" />
    </div>,
    position: { top: 32, left: 32 }
  },
  {
    title: "zaneCoderInternship",
    icon: <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl p-2 shadow-lg">
      <FaBuilding size={32} className="text-white/90" />
    </div>,
    position: { top: 128, left: 32 }
  },
  {
    title: "downloadMyResume.bat",
    icon: <div className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-2xl p-2 shadow-lg">
      <FaFolder size={32} className="text-white/90" />
    </div>,
    position: { top: 224, left: 32 }
  }
];

const fileManagerContent = {
  "Major Platforms": [
    {
      name: "E-Learning Platform",
      type: "folder",
      items: [
        { name: "frontend", type: "folder" },
        { name: "backend", type: "folder" },
        { name: "README.md", type: "file" }
      ]
    },
    {
      name: "Open Morty",
      type: "folder",
      items: [
        { name: "api", type: "folder" },
        { name: "client", type: "folder" },
        { name: "docs", type: "folder" }
      ]
    }
  ],
  "Client Portals": [
    {
      name: "MortDash",
      type: "folder",
      items: [
        { name: "ameritrust-capital", type: "folder" },
        { name: "whitesands-capital", type: "folder" },
        { name: "shared-components", type: "folder" }
      ]
    },
    {
      name: "TPO Portal",
      type: "folder",
      items: [
        { name: "frontend", type: "folder" },
        { name: "backend", type: "folder" },
        { name: "deployment", type: "folder" }
      ]
    }
  ],
  "Specialized Tools": [
    {
      name: "MortZilla",
      type: "folder",
      items: [
        { name: "core", type: "folder" },
        { name: "plugins", type: "folder" }
      ]
    },
    {
      name: "EdTracts",
      type: "folder",
      items: [
        { name: "content-manager", type: "folder" },
        { name: "delivery-system", type: "folder" }
      ]
    },
    {
      name: "Allure IMA",
      type: "folder",
      items: [
        { name: "analysis-engine", type: "folder" },
        { name: "dashboard", type: "folder" }
      ]
    },
    {
      name: "EdStack",
      type: "folder",
      items: [
        { name: "platform", type: "folder" },
        { name: "integrations", type: "folder" }
      ]
    }
  ],
  "Deployments": [
    {
      name: "Cloud Run",
      type: "folder",
      items: [
        { name: "configurations", type: "folder" },
        { name: "cloudbuild.yaml", type: "file" }
      ]
    },
    {
      name: "Cloud SQL",
      type: "folder",
      items: [
        { name: "migrations", type: "folder" },
        { name: "backups", type: "folder" }
      ]
    },
    {
      name: "CI-CD",
      type: "folder",
      items: [
        { name: "workflows", type: "folder" },
        { name: "scripts", type: "folder" }
      ]
    }
  ]
};

type SectionKey = 'about' | 'experience' | 'technologies' | 'education' | 'contact';

interface Section {
  icon: React.ReactElement;
  title: string;
  content: React.ReactElement;
}

const sections: Record<SectionKey, Section> = {
  about: { 
    icon: <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl p-2 shadow-lg">
      <FaUser size={32} className="text-white/90" />
    </div>,
    title: "About Me",
    content: (
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/me.jpeg"
              width={256}
              height={256}
              alt="Profile"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 flex-1 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold">Neil Gualiza</h2>
              <p className="text-gray-300">Frontend-Focused Software Developer Intern at zaneCoder</p>
            </div>
            <p className="text-gray-200 leading-relaxed">
              I am a frontend-focused Software Developer Intern who enjoys building clean and user-friendly interfaces. I am strong at troubleshooting bugs, finding root causes quickly, and fixing issues across frontend and backend workflows.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-medium text-gray-300 text-lg border-b border-white/10 pb-2">Awards & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 p-4 rounded-xl border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <FaGraduationCap className="text-yellow-400 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-yellow-400">Academic Excellence</h3>
                    <p className="text-sm text-gray-400">2021 - Present</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-yellow-500 mt-2" />
                    <span>Dean's Lister - 1st Year - 2nd Year</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FaLaptopCode className="text-blue-400 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-400">Technical Achievements</h3>
                    <p className="text-sm text-gray-400">Notable Projects</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-2" />
                    <span>Lead Capstone Research</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-blue-500 mt-2" />
                    <span>Side hustles creating capstone programs for other students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  experience: { 
    icon: <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl p-2 shadow-lg">
      <FaBuilding size={32} className="text-white/90" />
    </div>,
    title: "Experience",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white/90">Professional Experience</h2>
        <div className="grid gap-4">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-4 rounded-xl border border-orange-500/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <FaBuilding className="text-orange-400 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-orange-400">Software Developer Intern</h3>
                <p className="text-sm text-gray-400">zaneCoder LLC • January 2026 - Present</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                North Bristol, Santa Ana, California 92706
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-medium text-orange-400">Experience Highlights</h4>
                <div className="bg-gradient-to-br from-orange-500/5 to-orange-600/5 p-3 rounded-lg border border-orange-500/10">
                  <ul className="text-xs text-gray-400 list-disc list-inside mt-1 space-y-1">
                    <li>Rendered 900 hours of on-the-job training</li>
                    <li>Contributed to a production-ready SaaS multi-tenant system while ensuring proper data isolation across tenants</li>
                    <li>Worked on a mortgage broker CRM system, building client-management features and improving workflow efficiency</li>
                    <li>Assisted in building and maintaining a web-based e-signing application, including document workflows, debugging issues, and collaborating with senior developers</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">JavaScript</span>
                <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">React</span>
                <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">Node.js</span>
                <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">Express</span>
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-300">MongoDB</span>
                <span className="px-2 py-1 text-xs rounded-full bg-orange-500/20 text-orange-300">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  technologies: { 
    icon: <div className="bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-2xl p-2 shadow-lg">
      <FaTools size={32} className="text-white/90" />
    </div>,
    title: "Technologies",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white/90">Tech Stack & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-300 text-lg border-b border-white/10 pb-2">Frontend</h3>
            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaReact className="text-blue-400 w-6 h-6" />
                  <h4 className="font-medium text-blue-400">React.js</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">EDSTACK</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">E-Signing Web Application</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-2">
                    <SiVuedotjs className="text-green-400 w-6 h-6" />
                    <SiNuxtdotjs className="text-green-500 w-6 h-6" />
                  </div>
                  <h4 className="font-medium text-green-400">Vue.js & Nuxt.js</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">Admin Dashboard</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">Client Portal</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 p-4 rounded-xl border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <SiTailwindcss className="text-cyan-400 w-6 h-6" />
                  <h4 className="font-medium text-cyan-400">Tailwind CSS</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">Portfolio</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300">Dashboard UI</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <SiTypescript className="text-blue-500 w-6 h-6" />
                  <h4 className="font-medium text-blue-400">TypeScript</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">All Frontend Projects</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">Type Safety</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-gray-300 text-lg border-b border-white/10 pb-2">Backend, Database & Tools</h3>
            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaLaptopCode className="text-green-400 w-6 h-6" />
                  <h4 className="font-medium text-green-400">Node.js & Express</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">REST API Development</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">Authentication</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">RBAC</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-xl border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaFolder className="text-purple-400 w-6 h-6" />
                  <h4 className="font-medium text-purple-400">MongoDB, MySQL & Prisma</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">Database Modeling</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">Query Optimization</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">Prisma ORM</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300">Supabase</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-4 rounded-xl border border-gray-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaGithub className="text-white w-6 h-6" />
                  <h4 className="font-medium text-gray-300">Tools & Services</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Firebase Auth</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Supabase</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Git</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Docker</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">DBeaver</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Postman</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Google Cloud Run</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-4 rounded-xl border border-gray-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaGithub className="text-white w-6 h-6" />
                  <h4 className="font-medium text-gray-300">Git & CI/CD</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Version Control</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Automated Deployment</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-4 rounded-xl border border-gray-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaTools className="text-gray-300 w-6 h-6" />
                  <h4 className="font-medium text-gray-300">YAML Configuration</h4>
                </div>
                <p className="text-sm text-gray-400 mb-2">Used in:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">Infrastructure as Code</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-300">CI/CD Pipelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  education: { 
    icon: <div className="bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-2xl p-2 shadow-lg">
      <FaGraduationCap size={32} className="text-white/90" />
    </div>,
    title: "Education",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white/90">Education Journey</h2>
        <div className="space-y-6">
          {/* College */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-6 rounded-xl border border-green-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <FaGraduationCap className="text-green-400 w-8 h-8" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-green-400">Bachelor of Science in Industrial Technology</h3>
                  <p className="text-gray-400">Talisay City College - Poblacion, Talisay City, Cebu</p>
                  <p className="text-sm text-gray-500">2021 - Present</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Achievements</h4>
                  <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                    <li>Dean's Lister</li>
                    <li>Lead Developer and Capstone Leader for TCC OnTrack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Senior High School */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6 rounded-xl border border-blue-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <FaGraduationCap className="text-blue-400 w-8 h-8" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-blue-400">Senior High School -  CSS Strand</h3>
                  <p className="text-gray-400">Jaclupan Senior High School</p>
                  <p className="text-sm text-gray-500">2019 - 2021</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Activities</h4>
                  <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                    <li>Started side hustles building IT-related projects</li>
                    <li>Worked on student-focused web and system projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-6 rounded-xl border border-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <FaGraduationCap className="text-purple-400 w-8 h-8" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-purple-400">High School</h3>
                  <p className="text-gray-400">Jaclupan National High School</p>
                  <p className="text-sm text-gray-500">2014 - 2019</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Activities</h4>
                  <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
                    <li>Active participation in academic competitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  contact: { 
    icon: <div className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 rounded-2xl p-2 shadow-lg">
      <FaEnvelope size={32} className="text-white/90" />
    </div>,
    title: "Contact",
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white/90">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 p-4 rounded-xl border border-red-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <FaEnvelope className="text-red-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-red-400">Email</h3>
                  <a href="mailto:Neil.traya78@gmail.com" 
                     className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                    Neil.traya78@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <FaPhone className="text-blue-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-400">Phone</h3>
                  <a href="tel:+639453918053"
                     className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                    +639453918053
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-4 rounded-xl border border-gray-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gray-500/20 rounded-lg">
                  <FaMapMarkerAlt className="text-gray-400 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-400">Location</h3>
                  <p className="text-sm text-gray-400">Talisay, Philippines, Jaclupan, 6045</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-4 rounded-xl border border-gray-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gray-500/20 rounded-lg">
                  <FaGithub className="text-gray-300 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-300">GitHub</h3>
                  <a href="https://github.com/NELSNEAKO" target="_blank" rel="noopener noreferrer"
                     className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                    /NELSNEAKO
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-blue-700/10 p-4 rounded-xl border border-blue-600/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <FaFacebook className="text-blue-500 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-500">Facebook</h3>
                  <a href="https://www.facebook.com/neil.traya.1" target="_blank" rel="noopener noreferrer" 
                     className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                    /neil.traya.1
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/5 to-purple-600/5 p-6 rounded-xl border border-purple-500/20 flex flex-col items-center justify-center text-center">
            <div className="p-3 bg-purple-500/20 rounded-full mb-4">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-purple-400 mb-2">Contact Form Coming Soon!</h3>
            <p className="text-gray-400 mb-4">The contact form is currently under development.</p>
            <a href="mailto:Neil.traya78@gmail.com" 
               className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 py-2 px-6 rounded-lg transition-colors inline-flex items-center gap-2">
              <FaEnvelope className="w-4 h-4" />
              Send me an email instead
            </a>
          </div>
        </div>
      </div>
    )
  }
};

export default function DesktopUI() {
  const [selectedSection, setSelectedSection] = useState<SectionKey | null>(null);
  const [time, setTime] = useState<string>("");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [iconPositions, setIconPositions] = useState<{ [key: string]: Position }>({});
  const [isDragging, setIsDragging] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [showNotification, setShowNotification] = useState(false);
  const [showFileManager, setShowFileManager] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<'internship' | 'featured' | null>(null);
  const isMobile = windowDimensions.width < 768;
  const mobileIconPositions = [
    { top: 120, left: 70 },
    { top: 120, left: 185 },
    { top: 230, left: 70 },
  ];

  const iconLabelMap: Record<string, string> = {
    featuredProjects: "Projects",
    zaneCoderInternship: "Internship",
    "downloadMyResume.bat": "Resume",
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize icon positions from desktopIcons
    const initialPositions: { [key: string]: Position } = {};
    desktopIcons.forEach((icon, index) => {
      initialPositions[index] = {
        top: icon.position.top,
        left: icon.position.left,
      };
    });
    setIconPositions(initialPositions);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Initialize on client-side
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDragEnd = (index: number, info: any) => {
    setIsDragging(false);
    setIconPositions(prev => {
      const iconHeight = 100;
      const iconWidth = 100;
      const dockHeight = isMobile ? 120 : 150;
      const viewportHeight = windowDimensions.height - dockHeight - iconHeight;
      const viewportWidth = windowDimensions.width - iconWidth;
      const minTop = 40;

      const newTop = prev[index]?.top || desktopIcons[index].position.top;
      const newLeft = prev[index]?.left || desktopIcons[index].position.left;

      if (newTop < minTop || newTop > viewportHeight || newLeft < 0 || newLeft > viewportWidth) {
        return {
          ...prev,
          [index]: {
            top: desktopIcons[index].position.top,
            left: desktopIcons[index].position.left
          }
        };
      }

      return {
        ...prev,
        [index]: {
          top: Math.min(newTop, viewportHeight),
          left: newLeft,
        }
      };
    });
  };

  const handleDownloadClick = () => {
    setShowNotification(true);
  };

  const handleConfirmDownload = () => {
    setShowNotification(false);
    window.open('/Neil%20Gualiza.docx', '_blank'); 
  };

  const handleCancelDownload = () => {
    setShowNotification(false);
  };

  const MenuBar = () => (
    <div className="absolute top-0 left-0 w-full h-8 bg-gray-900/80 backdrop-blur-xl flex items-center px-3 md:px-4 justify-between border-b border-white/10">
      <div className="flex items-center space-x-3 md:space-x-6">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16.5c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z" fill="#007AFF"/>
            <path d="M12 6.75c-2.9 0-5.25 2.35-5.25 5.25s2.35 5.25 5.25 5.25 5.25-2.35 5.25-5.25S14.9 6.75 12 6.75z" fill="#007AFF"/>
          </svg>
          <span className="font-medium text-white text-xs md:text-sm">Neil Gualiza</span>
        </div>
        <div className="hidden md:flex space-x-4 text-sm text-gray-300/80">
          <span className="hover:text-white transition-colors">File</span>
          <span className="hover:text-white transition-colors">Go</span>
          <span className="hover:text-white transition-colors">Help</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm text-gray-300/80">
          <span className="hidden md:flex items-center space-x-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4zm-6 4h-4v-4h4v4z" fill="currentColor"/>
            </svg>
            <span>100%</span>
          </span>
          <span className="hidden md:flex items-center space-x-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
              <path d="M12 6.75c-2.9 0-5.25 2.35-5.25 5.25s2.35 5.25 5.25 5.25 5.25-2.35 5.25-5.25S14.9 6.75 12 6.75z" fill="currentColor"/>
            </svg>
          </span>
          <span>{time}</span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M17 6H3a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2zm0 10H3V8h14v8zm3-6h1a1 1 0 011 1v2a1 1 0 01-1 1h-1V10z" 
                fill="currentColor"/>
            </svg>
            <span>100%</span>
          </span>
        </div>
      </div>
    </div>
  )

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const handleIconClick = (title: string) => {
    if (title === "zaneCoderInternship") {
      setShowFileManager(true);
      setCurrentFolder('internship');
    } else if (title === "downloadMyResume.bat") {
      handleDownloadClick();
    } else if (title === "featuredProjects") {
      setShowFileManager(true);
      setCurrentFolder('featured');
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-900">
      <Image
        src="/wallpaper.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="opacity-90"
        alt="Desktop Wallpaper"
      />
      <div className="absolute inset-0 bg-black/10" />
      
      {desktopIcons.map((item, index) => (
        <motion.div
          key={index}
          drag={!isMobile}
          dragMomentum={false}
          dragElastic={0}
          dragConstraints={{
            top: 40,
            left: 0,
            right: windowDimensions.width - 100,
            bottom: windowDimensions.height - (isMobile ? 190 : 250)
          }}
          dragTransition={{ 
            bounceStiffness: 800,
            bounceDamping: 35,
            power: 0.1
          }}
          whileDrag={{ scale: 1.05 }}
          animate={{
            top: isMobile
              ? mobileIconPositions[index]?.top ?? item.position.top
              : (iconPositions[index]?.top || item.position.top),
            left: isMobile
              ? mobileIconPositions[index]?.left ?? item.position.left
              : (iconPositions[index]?.left || item.position.left),
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={(_, info) => handleDragEnd(index, info)}
          className={`flex flex-col items-center touch-none select-none absolute ${isMobile ? 'cursor-pointer' : 'cursor-move'}`}
          onClick={(e) => {
            if (!isDragging) {
              handleIconClick(item.title);
            }
          }}
        >
          <div className="p-2 rounded-lg dock-hover">
            {item.icon}
          </div>
          <span className="mt-1 text-[11px] md:text-sm text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 whitespace-nowrap max-w-[110px] overflow-hidden text-ellipsis text-center">
            {isMobile ? (iconLabelMap[item.title] || item.title) : item.title}
          </span>
        </motion.div>
      ))}

      {/* Menu Bar */}
      <MenuBar />

      {/* Dock Bar */}
      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center w-[96%] md:w-auto z-20">
        <div className="flex items-center justify-evenly md:justify-center md:gap-4 h-16 md:h-20 bg-white/10 backdrop-blur-3xl px-3 md:px-6 py-2 rounded-2xl border border-white/20 w-full md:w-auto">
          {Object.entries(sections).map(([key, { icon, title }]) => (
            <div
              key={key}
              className="relative flex-shrink-0 flex flex-col items-center group"
            >
              <div 
                className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center cursor-pointer dock-hover"
                onClick={() => setSelectedSection(key as SectionKey)}
              >
                {icon}
              </div>
              {/* Tooltip */}
              <div className="absolute -top-8 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800/90 text-xs px-2 py-1 rounded-lg whitespace-nowrap backdrop-blur-sm text-white/90 border border-white/10 hidden md:block">
                {title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mock Browser Window */}
      {selectedSection && (
        <div className="fixed top-[48%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96vw] md:w-[900px] h-[78dvh] md:h-[500px] bg-gray-900/95 rounded-xl border border-white/10 shadow-2xl window-transition backdrop-blur-xl z-30">
          {/* Window Header */}
          <div className="flex items-center justify-between p-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button 
                  onClick={() => setSelectedSection(null)}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-gray-400 ml-2">{sections[selectedSection].title}</span>
            </div>
          </div>
          
          {/* Window Content */}
          <div className="flex flex-col md:flex-row h-[calc(100%-44px)] overflow-hidden">
            {/* Sidebar */}
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 p-3 md:p-4">
              <div className="text-sm font-medium text-gray-400 mb-2">Quick Links</div>
              <div className="flex md:block overflow-x-auto md:overflow-x-hidden md:h-[calc(100%-2rem)] overflow-y-hidden md:overflow-y-auto custom-scrollbar pr-2 space-x-2 md:space-x-0 md:space-y-1">
                {Object.entries(sections).map(([key, { title, icon }]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedSection(key as SectionKey)}
                    className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors whitespace-nowrap ${
                      selectedSection === key ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    {icon}
                    <span className="text-sm">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-3 md:p-6 overflow-y-auto custom-scrollbar pb-24 md:pb-6">
              {sections[selectedSection].content}
            </div>
          </div>
        </div>
      )}

      {/* Show notification if needed */}
      {showNotification && (
        <Notification
          onConfirm={handleConfirmDownload}
          onCancel={handleCancelDownload}
        />
      )}

      {showFileManager && <MockFileManager onClose={() => {
        setShowFileManager(false);
        setCurrentFolder(null);
      }} folderType={currentFolder!} />}
    </div>
  );
}
