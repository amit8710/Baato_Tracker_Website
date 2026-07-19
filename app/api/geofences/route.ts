import { NextRequest, NextResponse } from 'next/server'

const BASE_URL = 'https://tracker.baato.io/wrapper/api/geofences'

export async function GET (request: NextRequest) {
  try {
    const authorization = request.headers.get('authorization')

    const { searchParams } = new URL(request.url)

    const email = searchParams.get('email')
    const groupId = searchParams.get('group_id')

    const params = new URLSearchParams()

    if (email) {
      params.append('email', email)
    }

    if (groupId) {
      params.append('group_id', groupId)
    }

    const targetUrl = `${BASE_URL}?${params.toString()}`

    console.log('GET Geofences:', targetUrl)

    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        Authorization: authorization ?? '',
        Accept: 'application/json'
      },
      cache: 'no-store'
    })

    const text = await response.text()

    console.log('Status:', response.status)
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
      {
        message: 'Failed to fetch geofences'
      },
      {
        status: 500
      }
    )
  }
}

export async function POST (request: NextRequest) {
  try {
    const authorization = request.headers.get('authorization')

    const body = await request.json()

    console.log('Create Geofence:', body)

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Authorization: authorization ?? '',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(body)
    })

    const text = await response.text()

    console.log('Status:', response.status)
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
      {
        message: 'Failed to create geofence'
      },
      {
        status: 500
      }
    )
  }
}
