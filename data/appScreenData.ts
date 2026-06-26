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
    image: '/screens/home.png'
  },
  {
    id: 2,
    title: 'Live GPS Tracking',
    description:
      'Track the school bus in real time with accurate location updates throughout the journey.',
    image: '/screens/tracking.png'
  },
  {
    id: 3,
    title: 'Notifications',
    description:
      'Receive instant pickup, drop-off and delay notifications directly on your mobile.',
    image: '/screens/notification.png'
  },
  {
    id: 4,
    title: 'Student Profile',
    description:
      'Access student details, assigned bus information and transportation history.',
    image: '/screens/profile.png'
  },
  {
    id: 5,
    title: 'Route Details',
    description:
      'View complete route information including stops, estimated arrival time and driver details.',
    image: '/screens/route.png'
  }
]
