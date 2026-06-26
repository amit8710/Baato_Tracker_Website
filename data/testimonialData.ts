export type TestimonialItem = {
  id: number
  name: string
  role: string
  image: string
  message: string
}

export const testimonialData: TestimonialItem[] = [
  {
    id: 1,
    name: 'Rajesh Thapa',
    role: 'Parent',
    image: '/profile.jpg',
    message:
      'Bato Tracker gives me peace of mind. I always know when my child reaches school safely.'
  },
  {
    id: 2,
    name: 'Anita Sharma',
    role: 'Parent',
    image: '/profile.jpg',
    message:
      'The live tracking and instant notifications are very accurate and easy to use.'
  },
  {
    id: 3,
    name: 'Sushil KC',
    role: 'School Administrator',
    image: '/profile.jpg',
    message:
      'Managing buses and informing parents has become much easier with Bato Tracker.'
  },
  {
    id: 4,
    name: 'Ram Bahadur',
    role: 'Driver',
    image: '/profile.jpg',
    message:
      'The route management system is simple and helps me stay on schedule every day.'
  },
  {
    id: 5,
    name: 'Priya Karki',
    role: 'Parent',
    image: '/profile.jpg',
    message:
      'I receive pickup and drop notifications instantly. It makes school transportation stress-free.'
  }
]
