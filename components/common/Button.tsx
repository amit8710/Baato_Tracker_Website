import Link from 'next/link'

type ButtonProps = {
  text: string
  href?: string
  onClick?: () => void
}

export default function Button ({ text, href, onClick }: ButtonProps) {
  const buttonStyles =
    'button-text inline-flex items-center justify-center rounded-full bg-teal-primary px-6 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light hover:shadow-xl'

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {text}
      </Link>
    )
  }

  return (
    <button type='button' onClick={onClick} className={buttonStyles}>
      {text}
    </button>
  )
}
