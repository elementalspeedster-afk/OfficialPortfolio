import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {LuFolderSearch} from "react-icons/lu";
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <motion.div
          className="about__me"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about__me-image">
            <img src={ME} alt ="About Image" />
          </div>
        </motion.div>
        <div className="about__content">
          <motion.div
            className="about__cards"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.article className='about__card' variants={cardVariants} transition={{ duration: 0.5 }}>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>480-Hour Internship</small>
            </motion.article>
            <motion.article className='about__card' variants={cardVariants} transition={{ duration: 0.5 }}>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>None</small>
            </motion.article>
            <motion.article className='about__card' variants={cardVariants} transition={{ duration: 0.5 }}>
              <LuFolderSearch className='about__icon'/>
              <h5>Project</h5>
              <small>3+ Completed</small>
            </motion.article>
          </motion.div>
          <p>
            I am a motivated Computer Science student with hands-on experience in frontend and backend
            development through a 480-hour internship at Strastan Solution Corporation. I've worked with
            React, Next.js, TypeScript, Tailwind CSS, AWS, and frontend accessibility optimization on
            real-world production components involving messaging systems, notification systems, reusable
            UI architecture, and frontend performance improvements. I'm passionate about learning modern
            web technologies, improving user experience, and building maintainable software solutions in
            collaborative development environments.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About