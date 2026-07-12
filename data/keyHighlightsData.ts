export interface HighlightItem {
  id: 'childStatus' | 'busStatus' | 'estimatedArrival' | 'attendance'

  title: string
  value: string
  subtitle: string
  color: string
}

export const keyHighlightsData: HighlightItem[] = [
  {
    id: 'childStatus',
    title: 'Child Status',
    value: 'Waiting',
    subtitle: 'Waiting at pickup point',
    color: 'var(--status-warning)'
  },
  {
    id: 'busStatus',
    title: 'Bus Status',
    value: 'Not Started',
    subtitle: 'Bus has not departed',
    color: 'var(--teal-primary)'
  },
  {
    id: 'estimatedArrival',
    title: 'Estimated Arrival',
    value: '--',
    subtitle: 'Waiting for live GPS',
    color: 'var(--status-warning)'
  },
  {
    id: 'attendance',
    title: 'Attendance',
    value: 'Pending',
    subtitle: 'Waiting for school confirmation',
    color: 'var(--status-danger)'
  }
]
