export type SchoolContactItem = {
  id: number
  department: string
  phone: string
  availability: string
  description: string
}

export const schoolContactData: SchoolContactItem[] = [
  {
    id: 1,
    department: 'Transportation Office',
    phone: '+977 9841000001',
    availability: '6:00 AM – 5:00 PM',
    description:
      'Contact for bus delays, route changes, and transportation emergencies.'
  },
  {
    id: 2,
    department: 'School Administration',
    phone: '+977 9841000002',
    availability: 'Office Hours',
    description: 'General school assistance and emergency coordination.'
  },
  {
    id: 3,
    department: 'Bus Coordinator',
    phone: '+977 9841000003',
    availability: 'During Bus Operations',
    description:
      'Get real-time information about bus routes, drivers, and schedules.'
  },
  {
    id: 4,
    department: 'Principal Office',
    phone: '+977 9841000004',
    availability: 'Office Hours',
    description:
      'Contact for serious incidents requiring school management attention.'
  }
]
