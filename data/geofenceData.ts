export type GeofenceItem = {
  id: number
  name: string
  location: string
  radius: number
}

export const geofenceData: GeofenceItem[] = [
  {
    id: 1,
    name: 'Home',
    location: 'Koteshwor, Kathmandu',
    radius: 200
  },
  {
    id: 2,
    name: 'School',
    location: 'Baneshwor, Kathmandu',
    radius: 500
  },
  {
    id: 3,
    name: 'Grandparents House',
    location: 'Bhaktapur',
    radius: 1000
  }
]
