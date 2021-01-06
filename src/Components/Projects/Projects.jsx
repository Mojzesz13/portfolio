import React, { useEffect, useRef } from 'react';
import './Projects.scss';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';


const Projects = () => {
  const blockRef = useRef(null);
  const wrapRef = useRef(null);
  const nRef = useRef(null);
  const n1Ref = useRef(null);
  const n2Ref = useRef(null);
  const n3Ref = useRef(null);
  const n4Ref = useRef(null);

  useEffect(() => {
    let block = blockRef.current;
    let wrap = wrapRef.current;
    let n = nRef.current;
    let n1 = n1Ref.current;
    let n2 = n2Ref.current;
    let n3 = n3Ref.current;
    let n4 = n4Ref.current;
    let speed = 0;
    let position = 0;
    let rounded = 0;

    // const elemen = testRef.current.querySelectorAll('tr');

    let elements = [n, n1, n2, n3, n4];

    window.addEventListener('wheel', (e) => {
      speed += e.deltaY * 0.03;
    });

    let objs = Array(5).fill({ dist: 0 });

    function raf() {
      position += speed;
      speed *= 0.8;

      objs.forEach((o, i) => {
        o.dist = Math.min(Math.abs(position - i), 1);
        o.dist = 1 - o.dist ** 2;
        elements[i].style.transform = `scale(${1 + 0.4 * o.dist})`;
      });

      rounded = Math.round(position);

      let diff = rounded - position;
      position += Math.sign(diff) * Math.pow(Math.abs(diff), 0.7) * 0.015;
      // block.style.transform = `translate(0,${position * 10 + 5}rem)`;
      wrap.style.transform = `translate(0,${-position * 10 + 5}rem)`;
      window.requestAnimationFrame(raf);
    }

    raf();
  }, []);
  return (
    <section id='projects' className='project-container'>
      <div ref={wrapRef}>
        <div ref={nRef} className='n'>
          <img src={img1} alt='test' />
        </div>
        <div ref={n1Ref} className='n n1'>
          <img src={img2} alt='test' />
        </div>
        <div ref={n2Ref} className='n n2'>
          <img src={img3} alt='test' />
        </div>
        <div ref={n3Ref} className='n n3'>
          <img src={img4} alt='test' />
        </div>
        <div ref={n4Ref} className='n n4'>
          <img src={img5} alt='test' />
        </div>
      </div>
      <div ref={blockRef} className='block'></div>
      <div className='main-container'>
      </div>
    </section>
  );
};

export default Projects;
