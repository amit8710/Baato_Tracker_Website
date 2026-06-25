import Link from 'next/link'

type ButtonProps = {
  text: string
  href?: string
  onClick?: () => void
}

export default function Button ({ text, href, onClick }: ButtonProps) {
  const buttonStyles =
    'bg-teal-primary hover:bg-teal-light text-white text-sm font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300'

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {text}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {text}
    </button>
  )
}
