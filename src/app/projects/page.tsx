'use client';
import SplitText from "../../../blocks/TextAnimations/SplitText/SplitText";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FadeContent from '../../../blocks/Animations/FadeContent/FadeContent'
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Chip from '@mui/material/Chip';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Home() {
  return (
    <div>
      <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
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
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <br />
        <Stack direction="column" spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 3 }}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <FadeContent blur={true} duration={1000} delay={10} easing="ease-out" initialOpacity={0}>
              <Card sx={{ maxWidth: 400, minHeight: 200 }}>
                <CardContent>
                  <h2 className="font-bold text-xl mb-2">YOLO AI + OCR Microservice</h2>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Flask" size="small" color="secondary" />
                    <Chip label="Docker" size="small" color="secondary" />
                    <Chip label="Tesseract OCR" size="small" color="secondary" />
                    <Chip label="YOLOv5" size="small" color="secondary" />
                  </Stack>
                  <br />
                  <p className="text-white-700 text-base break-normal">Dockerized Flask AI microservice that does image detection and character recognition with YOLOAI and Tesserct OCR when given an image</p>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent blur={true} duration={1000} delay={400} easing="ease-out" initialOpacity={0}>
              <Card sx={{ maxWidth: 400, minHeight: 200 }}>
                <CardContent>
                  <h2 className="font-bold text-xl mb-2">Portfolio</h2>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Next.js" size="small" color="secondary" />
                    <Chip label="Typescript" size="small" color="secondary" />
                    <Chip label="Tailwind CSS" size="small" color="secondary" />
                    <Chip label="NPM" size="small" color="secondary" />
                    <Chip label="Git" size="small" color="secondary" />
                  </Stack>
                  <br />
                  <p className="text-white-700 text-base break-normal">My portfolio website written in Typescript using the Next.js framework.</p>
                </CardContent>
              </Card>
            </FadeContent>
            <FadeContent blur={true} duration={1000} delay={600} easing="ease-out" initialOpacity={0}>
              <Card sx={{ maxWidth: 400, minHeight: 200 }}>
                <CardContent>
                  <h2 className="font-bold text-xl mb-2">Portfolio</h2>
                  <Stack direction="row" spacing={1}>
                    <Chip label="Next.js" size="small" color="secondary" />
                    <Chip label="Typescript" size="small" color="secondary" />
                    <Chip label="Tailwind CSS" size="small" color="secondary" />
                    <Chip label="NPM" size="small" color="secondary" />
                    <Chip label="Git" size="small" color="secondary" />
                  </Stack>
                  <br />
                  <p className="text-white-700 text-base break-normal">My portfolio website written in Typescript using the Next.js framework.</p>
                </CardContent>
              </Card>
            </FadeContent>
          </ThemeProvider>
        </Stack>
      </div>
    </div>
  );
}
