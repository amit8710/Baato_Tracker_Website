export type NewsCategory = 'News' | 'Updates' | 'Events'

export interface NewsItem {
  id: number
  slug: string
  title: string
  description: string
  content: string[]
  image: string
  category: NewsCategory
  date: string
  author: string
  featured?: boolean
  tags: string[]
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    slug: 'bato-tracker-official-launch',
    title: 'Bato Tracker Officially Launches Across Nepal',
    description:
      'Schools can now manage transportation digitally with live GPS tracking, attendance, and instant parent notifications.',

    content: [
      'Bato Tracker is officially available for schools throughout Nepal. The platform is designed to simplify school transportation management while improving the safety of every student.',

      'The application allows parents to track school buses in real time, receive instant notifications when students board or leave the bus, and communicate directly with schools whenever necessary.',

      'School administrators benefit from route management, attendance monitoring, driver management, and detailed transportation reports from a single dashboard.',

      'Drivers receive optimized routes, student boarding information, and emergency communication tools through the dedicated driver application.',

      'This launch marks another important milestone in creating a safer, smarter, and more transparent school transportation system for Nepal.'
    ],

    image: '/Transportation-02.png',
    category: 'News',
    date: '12 Aug 2026',
    author: 'Bato Tracker Team',
    featured: true,
    tags: ['Launch', 'GPS', 'School Bus', 'Nepal']
  },

  {
    id: 2,
    slug: '100-schools-joined',
    title: 'More Than 100 Schools Join the Platform',
    description:
      'Over one hundred schools have successfully adopted Bato Tracker to improve transportation safety.',

    content: [
      'More than one hundred schools have adopted the Bato Tracker platform.',
      'The rapid adoption reflects increasing demand for digital transportation management across Nepal.',
      'Schools reported improved communication with parents and better visibility of daily transportation activities.'
    ],

    image: '/news/news2.jpg',
    category: 'News',
    date: '10 Aug 2026',
    author: 'Admin',
    tags: ['Schools', 'Partnership']
  },

  {
    id: 3,
    slug: 'gps-accuracy-improved',
    title: 'GPS Tracking Accuracy Improved',
    description:
      'The latest tracking engine provides smoother and faster live location updates.',

    content: [
      'A new GPS engine has been deployed across the platform.',
      'Parents can now view smoother bus movements with improved location refresh rates.',
      'Battery usage has also been reduced while maintaining high tracking accuracy.'
    ],

    image: '/news/news3.jpg',
    category: 'Updates',
    date: '08 Aug 2026',
    author: 'Development Team',
    tags: ['GPS', 'Performance']
  },

  {
    id: 4,
    slug: 'driver-app-v2',
    title: 'Driver Mobile App Version 2.0 Released',
    description:
      'Drivers now enjoy a redesigned interface and improved trip management.',

    content: [
      'Version 2.0 introduces a cleaner interface.',
      'Navigation is now faster and easier for drivers.',
      'Trip history and attendance syncing have also been improved.'
    ],

    image: '/news/news4.jpg',
    category: 'Updates',
    date: '05 Aug 2026',
    author: 'Product Team',
    tags: ['Driver App', 'Mobile']
  },

  {
    id: 5,
    slug: 'transport-safety-workshop',
    title: 'Annual School Transport Safety Workshop',
    description:
      'School administrators gathered to discuss transportation safety.',

    content: [
      'The annual workshop focused on digital transportation safety.',
      'Experts shared best practices for school bus operations.',
      'Participants also experienced live demonstrations of Bato Tracker.'
    ],

    image: '/news/news5.jpg',
    category: 'Events',
    date: '03 Aug 2026',
    author: 'Events Team',
    tags: ['Workshop', 'Safety']
  },

  {
    id: 6,
    slug: 'push-notifications',
    title: 'Parents Receive Instant Push Notifications',
    description: 'Parents now receive real-time boarding and drop-off alerts.',

    content: [
      'The notification engine has been upgraded.',
      'Parents receive alerts immediately after attendance is recorded.',
      'Notifications work on both Android and iOS.'
    ],

    image: '/news/news6.jpg',
    category: 'Updates',
    date: '01 Aug 2026',
    author: 'Development Team',
    tags: ['Notifications']
  },

  {
    id: 7,
    slug: 'leading-schools-partnership',
    title: 'Partnership Signed with Leading Schools',
    description:
      'Several leading educational institutions joined the Bato Tracker network.',

    content: [
      'The partnership expands the platform across multiple cities.',
      'Thousands of additional students will benefit from safer transportation.'
    ],

    image: '/news/news7.jpg',
    category: 'News',
    date: '28 Jul 2026',
    author: 'Management',
    tags: ['Partnership']
  },

  {
    id: 8,
    slug: 'parent-awareness-program',
    title: 'Parent Awareness Program Successfully Completed',
    description: 'Parents learned how to use live tracking and safety alerts.',

    content: [
      'The awareness program introduced families to the application.',
      'Parents received practical demonstrations of every feature.'
    ],

    image: '/news/news8.jpg',
    category: 'Events',
    date: '25 Jul 2026',
    author: 'Support Team',
    tags: ['Parents', 'Training']
  },

  {
    id: 9,
    slug: 'dark-mode',
    title: 'Dark Mode Added to Mobile Application',
    description: 'A beautiful dark theme is now available across the app.',

    content: [
      'Users can now switch between light and dark themes.',
      'The new interface improves readability during nighttime usage.'
    ],

    image: '/news/news9.jpg',
    category: 'Updates',
    date: '22 Jul 2026',
    author: 'UI Team',
    tags: ['UI', 'Dark Mode']
  },

  {
    id: 10,
    slug: 'attendance-report',
    title: 'Student Attendance Reports Enhanced',
    description: 'Schools can generate detailed attendance reports.',

    content: [
      'Attendance reports now include export functionality.',
      'Schools can filter reports by student, class, and date.'
    ],

    image: '/news/news10.jpg',
    category: 'Updates',
    date: '18 Jul 2026',
    author: 'Engineering Team',
    tags: ['Reports']
  }
]
