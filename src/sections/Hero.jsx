import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';



const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
            <div className="wfull mx-auto flex flex-col sm:mt-36 mr-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Oi, eu sou o Caique <span className='waving-hand'>👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Construindo produtos e marcas</p>
            </div>

<div className="w-full h-full absolute inset-0">
   
</div>
        </section>
    )
}

export default Hero;