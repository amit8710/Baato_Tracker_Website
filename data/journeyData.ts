import {
  FaUsers,
  FaBus,
  FaMapMarkerAlt,
  FaBell,
  FaSchool
} from 'react-icons/fa'

import { IconType } from 'react-icons'

export type JourneyItem = {
  id: number
  icon: IconType
  title: string
  description: string
}

export const journeyData: JourneyItem[] = [
  {
    id: 1,
    icon: FaUsers,
    title: 'Parents Track the Bus',
    description:
      'Parents can monitor the live location of their child’s school bus and stay informed throughout the journey.'
  },
  {
    id: 2,
    icon: FaBus,
    title: 'Driver Starts the Journey',
    description:
      'Once the driver begins the trip, GPS tracking automatically starts and route information is shared in real time.'
  },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    title: 'Live Location Updates',
    description:
      'The system continuously updates the bus location, allowing parents and schools to track every movement accurately.'
  },
  {
    id: 4,
    icon: FaBell,
    title: 'Instant Notifications',
    description:
      'Automatic alerts are sent for pickup, arrival, delays, and drop-off, keeping everyone informed instantly.'
  },
  {
    id: 5,
    icon: FaSchool,
    title: 'School Dashboard',
    description:
      'Schools manage buses, drivers, routes, and students from a centralized dashboard with complete visibility.'
  }
]
