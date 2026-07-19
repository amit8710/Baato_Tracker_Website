import { NextRequest, NextResponse } from 'next/server'

const BAATO_API = 'https://tracker.baato.io/wrapper/api/auth/me'

export async function GET (request: NextRequest) {
  try {
    const authorization = request.headers.get('authorization')

    console.log('Authorization Header:', authorization)

    if (!authorization) {
      return NextResponse.json(
        {
          message: 'Missing Authorization header'
        },
        {
          status: 401
        }
      )
    }

    const response = await fetch(BAATO_API, {
      method: 'GET',
      headers: {
        Authorization: authorization,
        Accept: 'application/json'
      },
      cache: 'no-store'
    })

    const text = await response.text()

    console.log('Baato Status:', response.status)
    console.log('Baato Response:', text)

    try {
      const data = JSON.parse(text)

      return NextResponse.json(data, {
        status: response.status
      })
    } catch {
      return NextResponse.json(
        {
          message: text
        },
        {
          status: response.status
        }
      )
    }
  } catch (error) {
    console.error('ME Proxy Error:', error)

    return NextResponse.json(
      {
        message: 'Failed to fetch user profile',
        error: error instanceof Error ? error.message : String(error)
      },
      {
        status: 500
      }
    )
  }
}
