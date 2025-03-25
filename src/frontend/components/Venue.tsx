'use client'

import { VenueSection } from '@/payload-types'
import { FaMapMarkerAlt } from 'react-icons/fa'

export function Venue({ data }: { data: VenueSection }) {
  return (
    <section id="venue" className="section venue">
      <div className="container">
        <h2>
          <FaMapMarkerAlt /> {data.title}
        </h2>
        <div className="venue-card">
          <p className="venue-description">
            {data.venue.name}
            <br />
            {data.venue.location}
          </p>
          <div className="map-container">
            <iframe
              title={data.venue.name}
              src={data.venue.mapUrl}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
