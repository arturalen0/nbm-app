'use client'

import { ScheduleSection } from '@/payload-types' // Assuming this type includes the 'details' field after generation
import { FaClock } from 'react-icons/fa'

// --- Type Definitions ---
// It's best if these types come directly from your generated Payload types.
// If ScheduleSection['days'][0]['events'][0] includes 'details', you might not need these interfaces explicitly.
// However, defining them ensures clarity and type safety within the component.

// Define the structure for a single detail point
interface DetailPoint {
  point: string
  id?: string | null // Payload arrays usually have an 'id'
}

// Update EventType to include optional details
interface EventType {
  time: string
  title: string
  details?: DetailPoint[] | null // Make details optional and potentially null
  id?: string | null // Payload arrays usually have an 'id'
}

// Update TimelineItemProps to include optional details
interface TimelineItemProps {
  time: string
  title: string
  details?: DetailPoint[] | null // Pass details down
}

// --- Components ---

const TimelineItem = ({ time, title, details }: TimelineItemProps) => (
  <li>
    <time>{time}</time>
    {/* Wrap title and details in a div to keep them in the second grid column */}
    <div>
      {title}
      {/* --- Start: Conditional Rendering for Details --- */}
      {details && details.length > 0 && (
        <ul className="event-details">
          {details.map((detail) => (
            // Use detail.id as key if available, otherwise fallback to point (ensure points are unique enough or use index)
            <li key={detail.id || detail.point}>{detail.point}</li>
          ))}
        </ul>
      )}
      {/* --- End: Conditional Rendering for Details --- */}
    </div>
  </li>
)

// Update DayCardProps to use the enhanced EventType
interface DayCardProps {
  date: string
  events: EventType[] // Use the updated EventType
}

const DayCard = ({ date, events }: DayCardProps) => (
  <div className="day-card">
    <h3>{date}</h3>
    <ul className="timeline">
      {events.map((event, index) => (
        // Pass the whole event object using spread syntax
        // Use event.id from Payload if available for a stable key
        <TimelineItem key={event.id || index} {...event} />
      ))}
    </ul>
  </div>
)

export function Schedule({ data }: { data: ScheduleSection }) {
  // Ensure data.days and data.days[n].events exist before mapping
  const days = data.days || []

  return (
    <section id="schedule" className="section schedule">
      <div className="container">
        <h2>
          <FaClock /> {data.title || 'Schedule'} {/* Add fallback for title */}
        </h2>
        <div className="schedule-grid">
          {days.map((day, index) => {
            // Ensure day object and its properties exist
            const date = day.date || `Day ${index + 1}`
            const events = (day.events as EventType[]) || [] // Cast to ensure type safety if needed
            return <DayCard key={day.id || index} date={date} events={events} /> // Use day.id if available
          })}
        </div>
      </div>
    </section>
  )
}
