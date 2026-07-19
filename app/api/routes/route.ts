import { NextRequest, NextResponse } from 'next/server'

export async function GET (request: NextRequest) {
  try {
    const authorization = request.headers.get('authorization')

    console.log('Authorization:', authorization)

    const url = new URL(request.url)

    const cursor = url.searchParams.get('cursor')
    const limit = url.searchParams.get('limit') ?? '20'

    const params = new URLSearchParams()

    if (cursor) params.append('cursor', cursor)

    params.append('limit', limit)

    const targetUrl = `https://tracker.baato.io/wrapper/api/routes?${params.toString()}`

    console.log('Calling:', targetUrl)

    const response = await fetch(targetUrl, {
      headers: {
        Authorization: authorization ?? '',
        Accept: 'application/json'
      },
      cache: 'no-store'
    })

    console.log('Status:', response.status)

    const text = await response.text()

    console.log('Response:', text)

    return new NextResponse(text, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: 'Failed to fetch routes' },
      { status: 500 }
    )
  }
}
