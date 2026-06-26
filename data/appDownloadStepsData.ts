import { IconType } from 'react-icons'
import { FaDownload, FaUserPlus, FaMapMarkedAlt } from 'react-icons/fa'

export type AppDownloadStep = {
  id: number
  icon: IconType
  title: string
  description: string
}

export const appDownloadStepsData: AppDownloadStep[] = [
  {
    id: 1,
    icon: FaDownload,
    title: 'Download the App',
    description:
      'Download Bato Tracker from the Google Play Store or Apple App Store in just a few taps.'
  },
  {
    id: 2,
    icon: FaUserPlus,
    title: 'Create Your Account',
    description:
      'Register using your mobile number and securely set up your parent or school account.'
  },
  {
    id: 3,
    icon: FaMapMarkedAlt,
    title: 'Start Tracking',
    description:
      'Select your school, connect with your child, and enjoy live GPS bus tracking instantly.'
  }
]
