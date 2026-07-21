import React from 'react'
import './Services.css'
import { BiCheck } from "react-icons/bi";
import { motion } from 'framer-motion'

const servicesData = [
  {
    title: 'Frontend Development',
    items: [
      'React & Next.js application development',
      'TypeScript & Tailwind CSS',
      'Reusable, maintainable UI components',
      'Frontend accessibility (ARIA, keyboard nav, screen readers)',
      'Responsive UI design',
    ],
  },
  {
    title: 'Backend & Cloud',
    items: [
      'Node.js & REST API integration',
      'AWS (API Gateway, Cognito, CDK)',
      'MySQL database design',
      'Frontend-backend data fetching & debugging',
      'Cloud development workflows',
    ],
  },
  {
    title: 'Software Development',
    items: [
      'Git/GitHub version control workflows',
      'Cross-language development (Java, Python, C++, C#, PHP)',
      'AI/ML model integration (e.g. MobileNetV2 image classification)',
      'Dataset preparation & model training',
      'Full-stack application development',
    ],
  },
]

const ServiceCard = ({ title, items }) => (
  <article className="service">
    <div className="service__head">
      <h3>{title}</h3>
    </div>
    <ul className='service__list'>
      {items.map((item, i) => (
        <li key={i}>
          <BiCheck className='service__list-icon' />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </article>
)

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <motion.div
        className="container services__marquee"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="services__track">
          {[...servicesData, ...servicesData].map((service, i) => (
            <ServiceCard key={i} title={service.title} items={service.items} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services