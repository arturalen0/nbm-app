import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { Schedule } from './components/Schedule'
import { Venue } from './components/Venue'
import { Footer } from './components/Footer'

import { getPayload } from 'payload'
import config from '@payload-config'
export const dynamic = 'force-dynamic'

export async function App() {
  const payload = await getPayload({ config })

  const aboutData = await payload.findGlobal({
    slug: 'about-section',
  })
  const scheduleData = await payload.findGlobal({
    slug: 'schedule-section',
  })
  const venueData = await payload.findGlobal({
    slug: 'venue-section',
  })
  const heroData = await payload.findGlobal({
    slug: 'hero-section',
  })

  return (
    <div className="App">
      <Navbar />
      <Hero data={heroData} />
      <About data={aboutData} />
      {/* TODO: Move all data contents to props, by following an example */}
      <Schedule data={scheduleData} />
      <Venue data={venueData} />
      <Footer />
    </div>
  )
}
