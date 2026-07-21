import React from 'react'
import './Portfolio.css'
import { motion } from 'framer-motion'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Realtime Finance Dashboard',
    github: 'https://github.com/elementalspeedster-afk/northline-finance-dashboard.git',
    demo: 'https://northline-finance-dashboard.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Habit Tracker',
    github: 'https://github.com/elementalspeedster-afk/habit-tracker.git',
    demo: 'https://habit-tracker-one-virid.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Login/Register Design',
    github: 'https://github.com/elementalspeedster-afk/amu-app.git',
    demo: 'https://amu-app.vercel.app'
  },
  {
    id: 4,
    image: IMG6,
    title: 'Website Design',
    github: 'https://github.com/elementalspeedster-afk/Website-Sample.git', 
    demo: 'https://website-sample-ashy.vercel.app/'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Fine Dining',
    github: 'https://github.com/elementalspeedster-afk/fine-dining-website.git', 
    demo: 'https://my-website-delta-coral-81.vercel.app/'
  },
  {
    id: 6,
    image: IMG5,
    title: 'Blender Model',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1RtUfOaUpkSGUnMUwjVQKE6xm3bD1PWL-/view?usp=drive_link'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}, index) => {
            return (
              <motion.article
                key={id}
                className='portfolio__item'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {/* <a href={github} className='btn' target='_blank'>Github</a> */}
                  <a href={demo} className='btn btn-primary' target='_blank'>Live
                  Demo</a>
                </div>
             </motion.article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio