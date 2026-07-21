import React from 'react'
import {FiYoutube} from "react-icons/fi";
import {FaGithubAlt} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa6";
import { motion } from 'framer-motion'

const HeaderSocials = () => {
  return (
    <motion.div
      className='header__socials'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
       <a href="https://youtube.com" target="blank"><FiYoutube /></a>
       <a href="https://github.com" target="blank"><FaGithubAlt/></a>
       <a href="https://facebook.com" target="blank"><FaFacebook/></a>
    </motion.div>
  )
}

export default HeaderSocials