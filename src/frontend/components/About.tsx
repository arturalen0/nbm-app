'use client'

import { AboutSection } from '@/payload-types'
import { FaUsers } from 'react-icons/fa'

export default function About({ data }: { data: AboutSection }) {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>
          <FaUsers /> {data.title}
        </h2>
        <div className="nbm-2025-container">
          <header>
            <p className="subtitle">
              {data.subtitle}
              <br />
              <strong>{data.dateLocation}</strong>
            </p>
            <br />
            {data.content &&
              data.content.map((paragraph, index) => <p key={index}>{paragraph.item}</p>)}
          </header>
        </div>
      </div>
    </section>
  )
}
