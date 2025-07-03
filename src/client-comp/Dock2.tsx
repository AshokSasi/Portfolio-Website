'use client';
import Dock from '../../blocks/Components/Dock/Dock';
import { VscHome, VscTable, VscAccount, VscFeedback} from "react-icons/vsc";


const iqtems = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => window.location.href='/' },
  { icon: <VscAccount size={18} />, label: 'About Me', onClick: () => window.location.href='/about-me'},
  { icon: <VscTable size={18} />, label: 'Photo Gallery', onClick: () => window.location.href='/gallery' },
  { icon: <VscFeedback size={18} />, label: 'Contact Me', onClick: () => window.location.href='/contact' },
];



export default function Dock2() {
    return (
        <div>
            <Dock
                className='z-140 fixed'
                items={iqtems}
                panelHeight={68}
                baseItemSize={50}
                magnification={80}
                spring={{mass:1222222220,stiffness:100,damping:10}}
            />
        </div>
    )
}






