'use client';
import SplitText from "../../../blocks/TextAnimations/SplitText/SplitText";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { SocialIcon } from 'react-social-icons';

export default function Contact() {
  return (
    <div >
      <div className="" style={{justifyContent: 'center' ,display: 'flex', height: '92vh', flexDirection:'column'}}>
        <div className="text-6xl font-bold" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <SplitText
            text="Contact Me"
            className="text-4xl font-semibold "
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

        <div style={{ justifyContent: "center", alignItems: 'center', display: 'flex' }}>
          <a href="mailto:asasitharan28@gmail.com" className="hover:opacity-70 transition-opacity">
            <SplitText
              text="asasitharan28@gmail.com"
              className="text-2xl font-semibold "
              delay={40}
              duration={0.3}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            />
          </a>
        </div>
        <br />
        <div style={{ justifyContent: "center", alignItems: 'center', display: 'flex' }}>
          <Stack spacing={2} direction="row" sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
            <IconButton aria-label="LinkedIn">
              <SocialIcon target="_blank" url="https://www.linkedin.com/in/ashok-sasitharan/" />
            </IconButton>
            <IconButton aria-label="GitHub">
              <SocialIcon target="_blank" url="https://github.com/AshokSasi" />
            </IconButton>
          </Stack>
        </div>
      </div>
    </div>
  );
}
