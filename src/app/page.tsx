import Waves from "../../blocks/Backgrounds/Waves/Waves";
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';


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
        <div className="text-6xl font-bold" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '92vh'}}>
          <DecryptedText
            speed={100}
            text="ASHOK SASITHARAN"
            sequential={true}
            animateOn="view"
            revealDirection="start"
          />
        </div>
      </div>
    </div>
  );
}
