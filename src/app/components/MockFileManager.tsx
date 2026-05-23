import React, { useState } from 'react';
import { FaFolder, FaCloud, FaGithub, FaDocker, FaFolderOpen, FaPython, FaPhp, FaJs, FaReact } from 'react-icons/fa';
import { SiGooglecloud, SiYaml, SiTypescript, SiFirebase, SiAmazon } from 'react-icons/si';

interface MockFileManagerProps {
  onClose: () => void;
  folderType: 'internship' | 'featured';
}

interface Project {
  name: string;
  description: string;
  deployment: {
    platform: string;
    details: string[];
    technologies: string[];
  };
}

interface FeaturedProject {
  name: string;
  description: string;
  technologies: string[];
  details: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    name: "EDSTACK – Multi-Tenant SaaS Platform",
    description: "A multi-tenant SaaS platform for colleges and student management workflows.",
    deployment: {
      platform: "Google Cloud Run",
      details: [
        "Built tenant-isolated architecture for colleges",
        "Implemented role-based access control and authentication",
        "Added document generation, audit logs, and notifications",
        "Delivered analytics dashboards and e-signing workflows"
      ],
      technologies: ["Vue.js", "Node.js", "Prisma", "MongoDB", "Firebase", "Supabase"]
    }
  },
  {
    name: "SmartCanteen Management System",
    description: "Reservation and inventory management for students and food vendors.",
    deployment: {
      platform: "Web App Deployment",
      details: [
        "Enabled student food reservation flow",
        "Built vendor dashboard for order handling",
        "Implemented inventory and stock management",
        "Added real-time order tracking and analytics"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    }
  },
  {
    name: "TCC OnTrack – OJT Tracking System",
    description: "Web-based trainee monitoring platform for OJT hours, progress, and achievements.",
    deployment: {
      platform: "Render",
      details: [
        "Tracked attendance and total rendered hours",
        "Implemented progress journals and student updates",
        "Built monitoring views for supervisors",
        "Generated reports and analytics"
      ],
      technologies: ["React", "TypeScript", "Supabase", "Node.js"]
    }
  },
  {
    name: "E-Signing Platform",
    description: "DocuSign-inspired platform for sending, signing, and managing digital documents.",
    deployment: {
      platform: "Vercel",
      details: [
        "Implemented PDF signing and signature placement",
        "Built secure document workflow and audit trails",
        "Added dynamic form generation for signers",
        "Enabled online document sending and tracking"
      ],
      technologies: ["Vue.js", "Node.js", "Supabase", "PDF.js"]
    }
  },
  {
    name: "CRM & Analytics Dashboard",
    description: "CRM-focused system with customer tracking, workflow automation, and reporting.",
    deployment: {
      platform: "Web App Deployment",
      details: [
        "Built customer management workflow",
        "Implemented dashboard analytics views",
        "Automated repetitive CRM operations",
        "Added export-ready reporting modules"
      ],
      technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js"]
    }
  }
];

const featuredProjects: FeaturedProject[] = [
  {
    name: "SmartCanteen Management System",
    description: "Reservation and inventory system for student meal ordering and vendor operations.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    details: [
      "Food reservation workflow",
      "Vendor order dashboard",
      "Inventory management",
      "Admin analytics dashboard"
    ],
    githubUrl: "#"
  },
  {
    name: "TCC OnTrack – OJT Tracking System",
    description: "Trainee monitoring system for attendance, progress, and achievement reporting.",
    technologies: ["React", "TypeScript", "Supabase", "Node.js"],
    details: [
      "Attendance and rendered hours tracking",
      "Progress journals",
      "Supervisor monitoring panels",
      "Reports and analytics"
    ],
    githubUrl: "https://tcc-ontrack.onrender.com/signin"
  },
  {
    name: "Screen Time among College Students: A Program-Based Approach to Digital Health Awareness",
    description: "A program-focused digital health awareness project analyzing and presenting student screen-time behavior.",
    technologies: ["React", "TypeScript", "Node.js", "Chart.js"],
    details: [
      "Screen-time tracking and behavior insights",
      "Program-based comparative reporting",
      "Awareness-focused dashboard views",
      "Data visualization for trend analysis"
    ],
    githubUrl: "#"
  },
  {
    name: "Interactive Web for Students: A Design for Collaboration",
    description: "An interactive student-focused web platform designed to improve collaboration and engagement.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    details: [
      "Interactive collaboration spaces",
      "Student engagement tools",
      "Group communication workflows",
      "Responsive collaborative interface design"
    ],
    githubUrl: "#"
  },
  {
    name: "Inventory System",
    description: "A web-based inventory tracking system for stock control, item movement, and reporting.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    details: [
      "Stock-in and stock-out management",
      "Low-stock monitoring and alerts",
      "Inventory activity logs",
      "Summary and export reports"
    ],
    githubUrl: "#"
  },
  {
    name: "Car Rental System",
    description: "A rental management platform for vehicle bookings, customer records, and rental operations.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    details: [
      "Vehicle availability and reservation flow",
      "Customer and booking management",
      "Rental status and return tracking",
      "Rate calculation and reporting"
    ],
    githubUrl: "#"
  }
];

const getTechIcon = (tech: string) => {
  switch (tech) {
    case 'Python':
      return <FaPython className="text-blue-500" />;
    case 'TypeScript':
      return <SiTypescript className="text-blue-400" />;
    case 'Firebase':
      return <SiFirebase className="text-orange-500" />;
    case 'AWS Cognito':
      return <SiAmazon className="text-orange-400" />;
    case 'PHP':
      return <FaPhp className="text-purple-400" />;
    case 'JavaScript':
      return <FaJs className="text-yellow-400" />;
    case 'VS Code API':
      return <FaCloud className="text-blue-500" />;
    case 'React':
      return <FaReact className="text-blue-400" />;
    default:
      return <FaCloud className="text-gray-400" />;
  }
};

const ProjectCard: React.FC<{ project: Project; isSelected: boolean; onClick: () => void }> = ({ project, isSelected, onClick }) => {
  return (
    <div 
      className={`transition-all duration-200 ${isSelected ? 'col-span-2' : ''}`}
      onClick={onClick}
    >
      {!isSelected ? (
        <div className="flex flex-col items-center gap-2 p-4 cursor-pointer hover:bg-white/5 rounded-lg transition-colors group">
          <div className="relative">
            <FaFolder className="w-16 h-16 text-yellow-400 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaFolderOpen className="w-16 h-16 text-yellow-400" />
            </div>
          </div>
          <span className="text-sm text-gray-300 text-center">{project.name}</span>
        </div>
      ) : (
        <div className="bg-gray-800/50 rounded-lg p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <FaFolderOpen className="w-8 h-8 text-yellow-400" />
            <div>
              <h3 className="text-lg font-medium text-white/90">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-400">
              <SiGooglecloud className="w-5 h-5" />
              <span className="text-sm font-medium">{project.deployment.platform}</span>
            </div>
            
            <div className="space-y-2">
              {project.deployment.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-gray-500 mt-2" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {project.deployment.technologies.map((tech, index) => {
                let Icon;
                switch (tech) {
                  case 'Cloud Run':
                    Icon = SiGooglecloud;
                    break;
                  case 'YAML':
                    Icon = SiYaml;
                    break;
                  case 'Docker':
                    Icon = FaDocker;
                    break;
                  case 'GitHub Actions':
                    Icon = FaGithub;
                    break;
                  default:
                    Icon = FaCloud;
                }
                
                return (
                  <div key={index} className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full text-xs">
                    <Icon className="w-3 h-3" />
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FeaturedProjectCard: React.FC<{ project: FeaturedProject; isSelected: boolean; onClick: () => void }> = ({ project, isSelected, onClick }) => {
  return (
    <div 
      className={`transition-all duration-200 ${isSelected ? 'col-span-2' : ''}`}
      onClick={onClick}
    >
      {!isSelected ? (
        <div className="flex flex-col items-center gap-2 p-4 cursor-pointer hover:bg-white/5 rounded-lg transition-colors group">
          <div className="relative">
            <FaFolder className="w-16 h-16 text-blue-400 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <FaFolderOpen className="w-16 h-16 text-blue-400" />
            </div>
          </div>
          <span className="text-sm text-gray-300 text-center">{project.name}</span>
        </div>
      ) : (
        <div className="bg-gray-800/50 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <FaFolderOpen className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-medium text-white/90">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
            </div>
            {project.githubUrl ? (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group relative"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="w-5 h-5 text-white/70 group-hover:text-white/90" />
                <div className="absolute -top-8 right-0 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800/90 text-xs px-2 py-1 rounded-lg whitespace-nowrap backdrop-blur-sm text-white/90 border border-white/10">
                  View on GitHub
                </div>
              </a>
            ) : (
              <div 
                className="p-2 bg-white/5 rounded-lg cursor-not-allowed group relative opacity-50"
                title="Repository is private or coming soon"
              >
                <FaGithub className="w-5 h-5 text-white/70" />
                <div className="absolute -top-8 right-0 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-800/90 text-xs px-2 py-1 rounded-lg whitespace-nowrap backdrop-blur-sm text-white/90 border border-white/10">
                  Repository Coming Soon
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              {project.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-gray-500 mt-2" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full text-xs">
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MockFileManager: React.FC<MockFileManagerProps> = ({ onClose, folderType }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedFeaturedProject, setSelectedFeaturedProject] = useState<string | null>(null);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[800px] h-[80vh] bg-gray-900/95 rounded-xl border border-white/10 shadow-2xl backdrop-blur-xl">
      {/* Window Header */}
      <div className="flex items-center justify-between p-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <button 
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-gray-400 ml-2">
            {folderType === 'internship' ? 'ZaneCoder Internship Projects' : 'Featured Projects'}
          </span>
        </div>
      </div>

      {/* Project Grid */}
      <div className="h-[calc(100%-44px)] overflow-y-auto custom-scrollbar p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {folderType === 'internship' ? (
            projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                isSelected={selectedProject === project.name}
                onClick={() => setSelectedProject(selectedProject === project.name ? null : project.name)}
              />
            ))
          ) : (
            featuredProjects.map((project, index) => (
              <FeaturedProjectCard 
                key={index} 
                project={project} 
                isSelected={selectedFeaturedProject === project.name}
                onClick={() => setSelectedFeaturedProject(selectedFeaturedProject === project.name ? null : project.name)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MockFileManager;
