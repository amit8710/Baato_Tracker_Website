'use client'

import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import type { Route } from '@/services/routes'

interface BaatoMapProps {
  selectedRoute?: Route | null
}

export default function BaatoMap ({ selectedRoute }: BaatoMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const busMarker = useRef<maplibregl.Marker | null>(null)

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return

    const apiKey = process.env.NEXT_PUBLIC_BAATO_MAP_KEY

    if (!apiKey) {
      console.error('NEXT_PUBLIC_BAATO_MAP_KEY is missing from .env.local')
      return
    }

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.baato.io/api/v1/styles/breeze?key=${apiKey}`,
      center: [85.324, 27.7172], // Kathmandu
      zoom: 13,
      attributionControl: false
    })

    map.addControl(new maplibregl.NavigationControl(), 'top-right')

    map.on('load', () => {
      // Temporary Bus Marker
      busMarker.current = new maplibregl.Marker({
        color: '#0d9488'
      })
        .setLngLat([85.324, 27.7172])
        .addTo(map)
    })

    mapRef.current = map

    return () => {
      busMarker.current?.remove()
      map.remove()
      mapRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!selectedRoute || !mapRef.current) return

    console.log('Selected Route:', selectedRoute)

    /**
     * Next Step:
     * Fetch route geometry from API.
     * Draw polyline.
     * Fit map to route.
     */
  }, [selectedRoute])

  return <div ref={mapContainer} className='h-full w-full' />
}
