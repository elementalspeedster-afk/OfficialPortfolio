import React, { useState } from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me.png'
import DIPLOMA from '../../assets/diploma.jpg'
import HeaderSocials from './HeaderSocials.jsx'
import { motion, AnimatePresence } from 'framer-motion'

const header = () => {
  const [showDiploma, setShowDiploma] = useState(false)

  return (
    <header>
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >Hello I'm</motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >Andre Yousef Cui</motion.h1>
        <motion.h5
          className="text-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >Full Stack Developer</motion.h5>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <CTA onDiplomaClick={() => setShowDiploma(true)} />
        </motion.div>
        <HeaderSocials/>

        <motion.div
          className="me"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img src={ME} alt="me" />
        </motion.div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>

      <AnimatePresence>
        {showDiploma && (
          <motion.div
            className="diploma__modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDiploma(false)}
          >
            <motion.div
              className="diploma__modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="diploma__close" onClick={() => setShowDiploma(false)}>&times;</button>
              <img src={DIPLOMA} alt="Computer Science Diploma" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

  )
}

export default header
