export type AnnouncementItem = {
  id: number
  title: string
  description: string
  category: string
  priority: 'High' | 'Medium' | 'Low'
  postedBy: string
  date: string
}

export const announcementData: AnnouncementItem[] = [
  {
    id: 1,
    title: 'Bus Route Delayed Due to Heavy Traffic',
    description:
      'Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.Bus BA 2 KHA 1234 is experiencing approximately a 20-minute delay due to heavy traffic near Koteshwor. Parents are requested to expect a slightly later pickup and arrival time.',
    category: 'Bus Update',
    priority: 'High',
    postedBy: 'Transport Department',
    date: 'Today • 7:15 AM'
  },
  {
    id: 2,
    title: 'Pickup Location Updated',
    description:
      'The pickup point for students in the Baneshwor area has been temporarily moved 100 meters east because of ongoing road maintenance.',
    category: 'Route Update',
    priority: 'Medium',
    postedBy: 'Transport Coordinator',
    date: 'Yesterday • 4:30 PM'
  },
  {
    id: 3,
    title: 'School Holiday Notice',
    description:
      'The school will remain closed this Friday due to a public holiday. School bus services will also remain unavailable on that day.',
    category: 'School Notice',
    priority: 'Low',
    postedBy: 'School Administration',
    date: 'Jul 9 • 2:00 PM'
  },
  {
    id: 4,
    title: 'Heavy Rain Advisory',
    description:
      'Due to continuous rainfall, minor delays are expected across all morning routes. Please allow additional travel time.',
    category: 'Weather Alert',
    priority: 'High',
    postedBy: 'Transport Department',
    date: 'Jul 8 • 6:45 AM'
  },
  {
    id: 5,
    title: 'New Bus Added to Route 5',
    description:
      'An additional school bus has been assigned to Route 5 to reduce travel time and improve pickup efficiency.',
    category: 'Service Update',
    priority: 'Low',
    postedBy: 'Transport Management',
    date: 'Jul 7 • 10:30 AM'
  }
]
