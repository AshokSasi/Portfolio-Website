'use client';
import SplitText from "../../../blocks/TextAnimations/SplitText/SplitText";
import FadeContent from '../../../blocks/Animations/FadeContent/FadeContent';
import { SocialIcon } from 'react-social-icons';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Contact() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={{ display: 'flex', height: '92vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        <SplitText
          text="Let's Connect"
          className="text-5xl font-bold text-center"
          delay={60}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />

        <FadeContent blur={false} duration={800} delay={500} easing="ease-out" initialOpacity={0}>
          <p className="text-gray-400 text-lg text-center mt-4 max-w-md px-4">
            Open to full-time roles, freelance projects, and collaborations —
            I&apos;d love to hear from you.
          </p>
        </FadeContent>

        <FadeContent blur={false} duration={800} delay={900} easing="ease-out" initialOpacity={0}>
          <div className="flex flex-col items-center gap-6 mt-10">

            <a
              href="mailto:asasitharan28@gmail.com"
              className="flex items-center gap-3 text-xl font-medium hover:opacity-60 transition-opacity"
            >
              <EmailIcon fontSize="medium" />
              asasitharan28@gmail.com
            </a>

            <div className="flex items-center gap-4">
              <SocialIcon
                target="_blank"
                url="https://www.linkedin.com/in/ashok-sasitharan/"
                style={{ width: 44, height: 44 }}
              />
              <SocialIcon
                target="_blank"
                url="https://github.com/AshokSasi"
                style={{ width: 44, height: 44 }}
              />
            </div>

            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<DownloadIcon />}
              href="/Ashok_Sasitharan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>

          </div>
        </FadeContent>

      </div>
    </ThemeProvider>
  );
}
