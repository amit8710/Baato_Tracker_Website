'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>
    Tawk_LoadStart?: Date
  }
}

export default function TawkChat () {
  useEffect(() => {
    // Prevent loading the script multiple times
    if (document.getElementById('tawk-script')) return

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')

    script.id = 'tawk-script'
    script.async = true
    script.src = 'https://embed.tawk.to/6a44f2492e54ca1d4ba90a75/1jsel4ruj'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    document.body.appendChild(script)

    return () => {
      const existingScript = document.getElementById('tawk-script')

      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}
