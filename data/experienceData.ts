import { IconType } from 'react-icons'
import {
  FaMapMarkedAlt,
  FaBell,
  FaRoute,
  FaBus,
  FaMobileAlt
} from 'react-icons/fa'

export type ExperienceItem = {
  id: number
  icon: IconType
  title: string
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    icon: FaMapMarkedAlt,
    title: 'Live GPS Bus Tracking'
  },
  {
    id: 2,
    icon: FaBell,
    title: 'Instant Pickup & Drop Alerts'
  },
  {
    id: 3,
    icon: FaRoute,
    title: 'Student Journey Updates'
  },
  {
    id: 4,
    icon: FaBus,
    title: 'Driver & Bus Information'
  },
  {
    id: 5,
    icon: FaMobileAlt,
    title: 'Easy-to-use Mobile Dashboard'
  }
]
