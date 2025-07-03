'use client';
import SplitText from "../../../blocks/TextAnimations/SplitText/SplitText";
import BlurText from "../../../blocks/TextAnimations/BlurText/BlurText";
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Home() {
  return (
    <div >
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh'}}>
        <SplitText
          text="About Me"
          className="text-6xl font-semibold text-center"
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
        
      </div>

      <div className="m-20 text-m/5 font-bold" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <BlurText
          text="Hi, I'm Ashok — a passionate Full Stack Software Developer with a focus on building clean, efficient, and user-friendly applications. I specialize in full-stack development, front-end design and backend systems, and I love turning ideas into reality through code.
          With a background in computer science, Ive worked on a variety of projects ranging from small personal tools to large-scale applications/web apps. I enjoy tackling new challenges, learning emerging technologies, and continuously improving both my code and my problem-solving approach.
          My toolkit includes technologies like Ruby on Rails, PostgreSQL JavaScript, Docker, React, Node.js, Python and SQL, and Im always open to experimenting with new tools that help bring better solutions to life.
          Outside of coding, you'll usually find me with my camera looking for awesome photo spots.
          Whether you're here to explore my work or looking for a collaborator, Id love to connect!"
          delay={30}
          stepDuration={0.15}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
      </div>


    </div>
  );
}
