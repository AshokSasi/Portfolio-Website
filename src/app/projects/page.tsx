'use client';
import SplitText from "../../../blocks/TextAnimations/SplitText/SplitText";
import Button from '@mui/material/Button';
import FadeContent from '../../../blocks/Animations/FadeContent/FadeContent';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  delay: number;
}

const projects: Project[] = [
  {
    title: "Shuttle Stats",
    description: "Progressive Web App for organizing badminton sessions with real-time stat tracking, player rankings, and session management.",
    highlights: [
      "Real-time leaderboard updates",
      "Session scheduling and management",
      "Offline-capable PWA functionality",
      "Self-hosted with CI/CD pipeline for automated deployments"
    ],
    technologies: ["React", "Express", "Docker", "PWA"],
    liveUrl: "https://shuttle-stats.com",
    delay: 10
  },
  {
    title: "Itinify",
    description: "Full-stack collaborative travel planning app built and deployed as a solo developer — bringing groups together to brainstorm, plan, and split costs all in one place.",
    highlights: [
      "Real-time multiplayer whiteboard powered by WebSockets with live cursor tracking",
      "AI-generated itineraries via Anthropic's Claude API based on destination, budget and interests",
      "Day-by-day itinerary builder with calendar view and Booking.com integration",
      "Splitwise-style expense splitter with automatic debt simplification",
      "Public template marketplace — publish, discover and duplicate community trips",
      "Self-hosted on a home server via Cloudflare Tunnel with Docker and GitHub Actions CI/CD",

    ],
    technologies: ["React", "Ruby On Rails", "Tailwind CSS", "TypeScript", "PostgreSQL", "Docker"],
    liveUrl: "https://www.itinify.net/",
    delay: 200
  },
  {
    title: "YOLO AI + OCR Microservice",
    description: "Dockerized Flask AI microservice that performs real-time image detection and character recognition using YOLOv5 and Tesseract OCR.",
    highlights: [
      "RESTful API endpoints for image processing",
      "Automated text extraction from images",
      "Containerized deployment for easy scaling"
    ],
    technologies: ["Flask", "Docker", "Tesseract OCR", "YOLOv5"],
    delay: 400
  },
];

export default function Projects() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <section className="min-h-screen flex flex-col items-center pt-16 pb-20 px-6">

          <SplitText
            text="Projects"
            className="text-5xl font-bold text-center"
            delay={80}
            duration={0.4}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <FadeContent blur={false} duration={800} delay={500} easing="ease-out" initialOpacity={0}>
            <p className="text-gray-400 text-lg text-center mt-4 mb-12 max-w-xl">
              A selection of things I&apos;ve built — from full-stack web apps to AI microservices.
            </p>
          </FadeContent>

          <div className="flex flex-col gap-6 w-full max-w-4xl">
            {projects.map((project, index) => (
              <FadeContent
                key={index}
                blur={true}
                duration={1000}
                delay={project.delay}
                easing="ease-out"
                initialOpacity={0}
              >
                <div style={{ borderLeft: '3px solid rgb(222, 23, 83)', backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '8px' }}
                  className="flex flex-col md:flex-row gap-6 p-6 md:p-8"
                >
                  {/* Left column */}
                  <div className="flex flex-col gap-4 md:w-56 shrink-0">
                    <span className="text-xs font-mono text-gray-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-bold text-2xl leading-tight">{project.title}</h2>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.technologies.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" color="secondary" />
                      ))}
                    </Stack>
                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex gap-2 mt-auto pt-2">
                        {project.githubUrl && (
                          <Button
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            size="small"
                            variant="outlined"
                            startIcon={<LaunchIcon />}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </Button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px bg-gray-700 shrink-0" />

                  {/* Right column */}
                  <div className="flex flex-col gap-3 flex-1">
                    <p className="text-base text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    {project.highlights && (
                      <ul className="text-sm text-gray-400 space-y-2 mt-1">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: 'rgb(222, 23, 83)' }} className="mt-1 shrink-0">▹</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                </div>
              </FadeContent>
            ))}
          </div>

        </section>
      </main>
    </ThemeProvider>
  );
}
