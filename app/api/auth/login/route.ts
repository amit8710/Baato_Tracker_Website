import { NextRequest, NextResponse } from 'next/server'

import { i } from 'framer-motion/m'

const BAATO_API = 'https://tracker.baato.io/wrapper/api/auth/login'

export async function POST (request: NextRequest) {
  try {
    const body = await request.json()

    console.log('Login Request Body:', body)

    const response = await fetch(BAATO_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    console.log('Baato Status:', response.status)

    const text = await response.text()

    console.log('Baato Response:', text)

    return new NextResponse(text, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Login Proxy Error:', error)

    return NextResponse.json(
      {
        message: 'Proxy Error',
        error: error instanceof Error ? error.message : String(error)
      },
      {
        status: 500
      }
    )
  }
}
