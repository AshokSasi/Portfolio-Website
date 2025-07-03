'use client';
import Dock from '../../blocks/Components/Dock/Dock';
import { VscHome, VscTable, VscAccount    } from "react-icons/vsc";


const iqtems = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => window.location.href='/' },
  { icon: <VscTable size={18} />, label: 'Photo Gallery', onClick: () => window.location.href='/gallery' },
  { icon: <VscAccount size={18} />, label: 'About Me', onClick: () => alert('Profile!') },
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
            />
        </div>
    )
}






