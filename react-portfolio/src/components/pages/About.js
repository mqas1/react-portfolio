import React from 'react';
import morganPic from '../../assets/images/morgan.jpeg'
import '../../styles/About.css';

export default function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img src={morganPic} alt='Morgan hiking' className='about-image'/>
      <section className='about-text'>
        <p>
          My academic background is in philosphy and history having completed a Bachelor of Arts at the University of Sydney.
        </p>
        <p>
          Music is one of my passions, both its reproduction and in playing it. I play the drums and guitar.
        </p>
        <p>
          I find that web development allows me to showcase these aspects of my personality. It is a great medium to channel one's creativity whether starting fresh with a blank canvas or adding to an existing codebase.
        </p>
        <p>
          Web development allows me to utilise the problem solving and critical thinking skills that I honed during my studies.
        </p>
      </section>
    </div>
  );
}