import React from 'react'
import CV from '../../assets/YousefCui_Resume.pdf'
import { FaGraduationCap } from 'react-icons/fa'

const CTA = ({ onDiplomaClick }) => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn cv-btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        <button className='btn diploma__trigger' onClick={onDiplomaClick}>
          <FaGraduationCap className="diploma__trigger-icon" />
          View Diploma
        </button>
    </div>
  )
}

export default CTA