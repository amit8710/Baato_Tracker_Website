export type FAQItem = {
  id: number
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How does Bato Tracker work?',
    answer:
      'Bato Tracker uses real-time GPS technology to track school buses and provides live location updates to parents and schools.'
  },
  {
    id: 2,
    question: 'Can parents track the school bus live?',
    answer:
      'Yes. Parents can monitor the live location of their child’s school bus through the Bato Tracker application.'
  },
  {
    id: 3,
    question: 'Will I receive pickup and drop notifications?',
    answer:
      'Yes. Bato Tracker instantly sends notifications when the bus is approaching, when your child is picked up, and when they are safely dropped off.'
  },
  {
    id: 4,
    question: 'Is Bato Tracker safe and secure?',
    answer:
      'Absolutely. We prioritize data privacy and security while ensuring accurate real-time tracking for schools, parents, and drivers.'
  },
  {
    id: 5,
    question: 'Which schools can use Bato Tracker?',
    answer:
      'Bato Tracker is designed for schools of all sizes looking to improve student transportation safety and communication.'
  }
]
