'use client';
import SplitText from "../../../blocks/TextAnimations/SplitText/SplitText";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FadeContent from '../../../blocks/Animations/FadeContent/FadeContent'
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Chip from '@mui/material/Chip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
      "Offline-capable PWA functionality"
    ],
    technologies: ["React", "Express", "Docker", "PWA"],
    liveUrl: "https://shuttle-stats.com",
    delay: 10
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
  {
    title: "Portfolio",
    description: "Modern, responsive portfolio website showcasing my projects and skills with smooth animations and interactive components.",
    highlights: [
      "Server-side rendering with Next.js 15",
      "Custom animation components using GSAP",
      "Optimized performance and SEO"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Material-UI", "GSAP"],
    delay: 600
  }
];

export default function Projects() {
  return (
    <main>
      <section style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '4rem' }}>
        <SplitText
          text="Projects"
          className="text-3xl font-semibold text-center"
          delay={100}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <br />
        <Stack direction="column" spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 3, width: '100%', maxWidth: '500px', px: 2 }}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {projects.map((project, index) => (
              <FadeContent 
                key={index}
                blur={true} 
                duration={1000} 
                delay={project.delay} 
                easing="ease-out" 
                initialOpacity={0}
              >
                <Card sx={{ maxWidth: 450, minHeight: 200, width: '100%' }}>
                  <CardContent>
                    <h2 className="font-bold text-xl mb-2">{project.title}</h2>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" color="secondary" />
                      ))}
                    </Stack>
                    <p className="text-white-700 text-base break-normal mb-2">
                      {project.description}
                    </p>
                    {project.highlights && (
                      <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mt-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  {(project.githubUrl || project.liveUrl) && (
                    <CardActions sx={{ px: 2, pb: 2 }}>
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
                          startIcon={<LaunchIcon />}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </Button>
                      )}
                    </CardActions>
                  )}
                </Card>
              </FadeContent>
            ))}
          </ThemeProvider>
        </Stack>
      </section>
    </main>
  );
}
