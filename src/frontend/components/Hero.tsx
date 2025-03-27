'use client'

import Image from 'next/image'
import background from '../assets/background.jpg'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { HeroSection } from '@/payload-types'

export default function Hero({ data }: { data: HeroSection }) {
  return (
    <section className="hero" id="hero">
      {/* Background Image with Next.js optimization */}
      <div className="hero-background">
        <Image
          src={background}
          alt="Conference background"
          quality={100} // Maximum quality (1-100)
          priority // Ensures preload for LCP
          placeholder="blur" // Remove if you don't want blurred placeholder
          fill
          sizes="100vw" // Properly inform Next.js about image dimensions
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            // Ensure no quality-reducing transforms:
          }}
          unoptimized={false} // Keep Next.js optimization but with our quality settings
        />
      </div>

      <div className="container hero-container">
        <h1>{data.title}</h1>
        <p className="hero-date">
          <FaCalendarAlt /> {data.date} &nbsp; | &nbsp; <FaMapMarkerAlt /> {data.location}
        </p>
        <div className="hero-registration"></div>
      </div>
    </section>
  )
}
