'use client'

import { ScheduleSection } from '@/payload-types'
import { FaClock } from 'react-icons/fa'

interface EventType {
  time: string
  title: string
}

interface TimelineItemProps {
  time: string
  title: string
}

const TimelineItem = ({ time, title }: TimelineItemProps) => (
  <li>
    <time>{time}</time>
    {title}
  </li>
)

interface DayCardProps {
  date: string
  events: EventType[]
}

const DayCard = ({ date, events }: DayCardProps) => (
  <div className="day-card">
    <h3>{date}</h3>
    <ul className="timeline">
      {events.map((event, index) => (
        <TimelineItem key={index} {...event} />
      ))}
    </ul>
  </div>
)

export function Schedule({ data }: { data: ScheduleSection }) {
  return (
    <section id="schedule" className="section schedule">
      <div className="container">
        <h2>
          <FaClock /> {data.title}
        </h2>
        <div className="schedule-grid">
          {data.days &&
            data.days.map((day, index) => (
              <DayCard key={index} date={day.date} events={day.events} />
            ))}
        </div>
      </div>
    </section>
  )
}
