import Image from 'next/image'

export type NewsItem = {
  id: number
  title: string
  slug: string
  date: string
  author: string
  image: string
  metaDescription: string
  category: string
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'New Live Tracking Experience for Safer & Smarter School Commutes',
    slug: 'live-tracking-experience',
    date: 'May 11, 2026',
    author: 'Admin',
    image: '/Transportation-02.png',
    category: 'Feature Update',
    metaDescription:
      'Our upgraded live tracking feature now offers real-time bus location, smart ETA, and instant notifications for parents and schools.'
  },
  {
    id: 2,
    title: 'Delay Notifications Now Smarter Than Ever',
    slug: 'delay-notifications',
    date: 'May 02, 2026',
    author: 'Admin',
    image: '/Transportation-02.png',
    category: 'Feature Update',
    metaDescription:
      'Parents can now receive more accurate delay notifications with real-time traffic analysis.'
  },
  {
    id: 3,
    title: 'Automatic Attendance for Hassle-Free Tracking',
    slug: 'automatic-attendance',
    date: 'Apr 18, 2026',
    author: 'Admin',
    image: '/Transportation-02.png',
    category: 'Update',
    metaDescription:
      'Attendance is automatically recorded when students board and leave the school bus.'
  },
  {
    id: 4,
    title: 'New Route Added for Greenfield Area',
    slug: 'greenfield-route',
    date: 'Apr 11, 2026',
    author: 'Admin',
    image: '/Transportation-02.png',
    category: 'Route Update',
    metaDescription:
      'A new route has been added to provide better transportation coverage in the Greenfield area.'
  }
]
