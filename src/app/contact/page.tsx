'use client';
import SplitText from "../../../blocks/TextAnimations/SplitText/SplitText";
export default function Home() {
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
        </div>
      </div>
    </div>
  );
}
