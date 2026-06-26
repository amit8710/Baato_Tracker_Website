import {
  FaMapMarkedAlt,
  FaBell,
  FaRoute,
  FaUsers,
  FaMobileAlt,
  FaSchool
} from 'react-icons/fa'

import { IconType } from 'react-icons'

export type FeatureActionItem = {
  id: number
  icon: IconType
  title: string
  description: string
}

export const featureActionData: FeatureActionItem[] = [
  {
    id: 1,
    icon: FaMapMarkedAlt,
    title: 'Live GPS Tracking',
    description:
      'Parents can monitor the exact location of the school bus in real time throughout the journey.'
  },
  {
    id: 2,
    icon: FaBell,
    title: 'Smart Notifications',
    description:
      'Receive instant pickup, drop-off, arrival, and delay alerts directly on your mobile device.'
  },
  {
    id: 3,
    icon: FaRoute,
    title: 'Route Monitoring',
    description:
      'Schools can monitor every bus route, helping ensure safe and efficient transportation.'
  },
  {
    id: 4,
    icon: FaUsers,
    title: 'Parent Dashboard',
    description:
      'Parents can easily view student information, assigned buses, routes, and daily travel updates.'
  },
  {
    id: 5,
    icon: FaMobileAlt,
    title: 'Mobile Friendly',
    description:
      'Access Bato Tracker seamlessly from smartphones, tablets, and desktop devices anytime.'
  },
  {
    id: 6,
    icon: FaSchool,
    title: 'School Dashboard',
    description:
      'Manage buses, drivers, students, routes, and transportation reports from one centralized dashboard.'
  }
]
