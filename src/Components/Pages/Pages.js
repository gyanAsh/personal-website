import React,{useEffect,useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Home/Home';
import About from './About/About';
import '../../App.css';
import Work from './Work/Work';

gsap.registerPlugin(ScrollTrigger);

const Pages = () => {
    const panels = useRef([]);
    const panelsContainer = useRef();

    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    }

    useEffect(() => {
        const totalPanels = panels.current.length;

        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
        console.log(panels.current);
    }, []);

  return (
    <div className="pagesContainer" ref={panelsContainer}>
          <Home createPanelsRefs={createPanelsRefs} />
          <About createPanelsRefs={createPanelsRefs} />
          <Work createPanelsRefs={createPanelsRefs} />
      </div>
  )
}

export default Pages;