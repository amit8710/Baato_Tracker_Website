export type AppScreenItem = {
  id: number
  title: string
  description: string
  image: string
}

export const appScreenData: AppScreenItem[] = [
  {
    id: 1,
    title: 'Home Dashboard',
    description:
      'View your child’s transportation status and access all important features from one place.',
    image: '/screen.jpeg'
  },
  {
    id: 2,
    title: 'Live GPS Tracking',
    description:
      'Track the school bus in real time with accurate location updates throughout the journey.',
    image: '/screen.jpeg'
  },
  {
    id: 3,
    title: 'Notifications',
    description:
      'Receive instant pickup, drop-off and delay notifications directly on your mobile.',
    image: '/screen.jpeg'
  },
  {
    id: 4,
    title: 'Student Profile',
    description:
      'Access student details, assigned bus information and transportation history.',
    image: '/screen.jpeg'
  },
  {
    id: 5,
    title: 'Route Details',
    description:
      'View complete route information including stops, estimated arrival time and driver details.',
    image: '/screen.jpeg'
  }
]
