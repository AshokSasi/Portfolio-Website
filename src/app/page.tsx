'use client';
import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import { SocialIcon } from 'react-social-icons'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default function Home() {
  return (
    <div>
      <div className="z-0">
        <Waves
          lineColor="rgb(222, 23, 83)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '92vh', flexDirection: 'column' }}>

          <div className="text-6xl font-bold" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', zIndex:11 }}>
            <DecryptedText
              speed={100}
              text="ASHOK SASITHARAN"
              sequential={true}
              animateOn="view"
              revealDirection="start"
            />
          </div>

          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', zIndex:10}}>
            <SplitText
              text="Full Stack Software Developer"
              className="text-2xl font-semibold"
              delay={70}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </div>

          <div className="flex items-center gap-4 mt-6">
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
            <Button
              target="_blank"
              variant="contained"
              href="/Ashok_Sasitharan_Resume.pdf"
              size="medium"
              color="success"
              startIcon={<DownloadIcon />}
            >
              Resume
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
