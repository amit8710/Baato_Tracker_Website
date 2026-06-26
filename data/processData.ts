export type ProcessItem = {
  id: number
  step: string
  title: string
  description: string
  image: string
}

export const processData: ProcessItem[] = [
  {
    id: 1,
    step: '01',
    title: 'Register Your School',
    description:
      'Schools create an account and register buses, routes, drivers, and students in the Bato Tracker platform to begin managing transportation digitally.',
    image: '/process/register-school.png'
  },
  {
    id: 2,
    step: '02',
    title: 'Install GPS Device',
    description:
      'A GPS tracking device is installed in every school bus, allowing the system to transmit accurate live location throughout the journey.',
    image: '/process/install-gps.png'
  },
  {
    id: 3,
    step: '03',
    title: 'Driver Starts Journey',
    description:
      'When the driver begins the route, the GPS device automatically starts sending live location updates to the Bato Tracker platform.',
    image: '/process/driver-start.png'
  },
  {
    id: 4,
    step: '04',
    title: 'Parents Track Live',
    description:
      'Parents can monitor the school bus in real time using the mobile application and know exactly when the bus is approaching.',
    image: '/process/track-live.png'
  },
  {
    id: 5,
    step: '05',
    title: 'Receive Instant Notifications',
    description:
      'Automatic notifications are sent for pickup, arrival, delays, and drop-off, ensuring parents stay informed throughout the trip.',
    image: '/process/notifications.png'
  }
]
