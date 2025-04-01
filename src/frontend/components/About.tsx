'use client'
import React from 'react'
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
            <p className="subtitle">{data.subtitle}</p>
            <br />

            {data.content &&
              data.content.length > 0 &&
              data.content.map((paragraph, index) => (
                // Use React.Fragment to group elements without adding a div
                <React.Fragment key={index}>
                  {/* Render the paragraph text */}
                  {paragraph.item}
                  {/* Add two <br> tags if it's NOT the last item */}
                  {data.content && index < data.content.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
          </header>
        </div>
      </div>
    </section>
  )
}
