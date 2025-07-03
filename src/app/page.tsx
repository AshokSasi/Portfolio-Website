'use client';
import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';
import SplitText from "../../blocks/TextAnimations/SplitText/SplitText";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { SocialIcon } from 'react-social-icons'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div>
      <div className="z-0"><Waves
        lineColor="rgb(222, 23, 83)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        style={{zIndex:-1}}
        xGap={12}
        yGap={36}/>
        <div className="" style={{justifyContent: 'center' ,display: 'flex', height: '92vh', flexDirection:'column'}}>
          <div className="text-6xl font-bold"style={{ justifyContent: 'center', alignItems: 'center',display: 'flex' }}>
            <DecryptedText
              speed={100}
              text="ASHOK SASITHARAN"
              sequential={true}
              animateOn="view"
              revealDirection="start"
            />
          </div>

          <div style={{justifyContent:"center",  alignItems: 'center',display: 'flex'}}>
            <SplitText
              text="Full Stack Software Developer"
              className="text-2xl font-semibold "
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
          <br />
          <div style={{ justifyContent: "center", alignItems: 'center', display: 'flex' }}>
            <Stack spacing={2} direction="row">
              <IconButton aria-label="delete">
                <SocialIcon  target="_blank" url="https://www.linkedin.com/in/ashok-sasitharan/" />
              </IconButton>
              <IconButton aria-label="delete">
                <SocialIcon target="_blank" url="https://github.com/AshokSasi" />
              </IconButton>
              <Button target="_blank" variant="contained" href="/Ashok_Sasitharan_Resume.pdf" size="medium" color="success">Resume</Button>
            </Stack>
          </div>

         
          
        </div>
      </div>
    </div>
  );
}
