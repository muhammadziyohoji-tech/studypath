// src/components/visualizations/WorldMap.tsx

/**
 * Interactive World Map with Country Markers
 * 
 * FEATURES:
 * - Clickable country markers
 * - Score-based color coding
 * - Popup with country details
 * - Responsive and mobile-friendly
 * 
 * TECHNICAL NOTES:
 * - Uses dynamic import to avoid SSR issues with Leaflet
 * - Client-side only rendering
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import { StudyCountry } from '@/types/country';

interface WorldMapProps {
  countries: StudyCountry[];
  onCountryClick?: (countryCode: string) => void;
}

export default function WorldMap({ countries, onCountryClick }: WorldMapProps) {
  const mapRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on client side (Leaflet requires window object)
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Dynamic import of Leaflet (client-side only)
    const initMap = async () => {
      const L = (await import('leaflet')).default;
      
      // Fix default marker icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Initialize map
      if (!mapRef.current) {
        const map = L.map('world-map').setView([20, 0], 2);

        // Add tile layer (map background)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 18,
        }).addTo(map);

        mapRef.current = map;
      }

      // Clear existing markers
      mapRef.current.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          layer.remove();
        }
      });

      // Add markers for each country
      countries.forEach((country) => {
        if (!country.latlng || country.latlng[0] === 0) return;

        // Calculate score for color coding
        const totalScore = calculateOverallScore(country);
        const markerColor = getColorByScore(totalScore);

        // Create custom icon with score-based color
        const customIcon = L.divIcon({
          className: 'custom-marker',
          html: `<div style="
            background-color: ${markerColor};
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
            font-size: 12px;
          ">${totalScore}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        const marker = L.marker(country.latlng, { icon: customIcon }).addTo(
          mapRef.current
        );

        // Popup content
        const popupContent = `
          <div style="min-width: 200px;">
            <img src="${country.flag}" alt="${country.name}" style="width: 100%; height: 60px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${country.name}</h3>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Capital:</strong> ${country.capital}</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Score:</strong> ${totalScore}/100</p>
            <p style="margin: 4px 0; font-size: 14px;"><strong>Cost Index:</strong> ${country.studyData.costOfLivingIndex}</p>
            <button 
              onclick="window.viewCountry('${country.code}')"
              style="
                margin-top: 8px;
                padding: 6px 12px;
                background: #3b82f6;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                width: 100%;
              "
            >
              View Details
            </button>
          </div>
        `;

        marker.bindPopup(popupContent);

        // Handle marker click
        marker.on('click', () => {
          if (onCountryClick) {
            onCountryClick(country.code);
          }
        });
      });
    };

    initMap();

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isClient, countries, onCountryClick]);

  // Expose click handler to global scope for popup button
  useEffect(() => {
    (window as any).viewCountry = (code: string) => {
      if (onCountryClick) {
        onCountryClick(code);
      }
    };
  }, [onCountryClick]);

  if (!isClient) {
    return (
      <div className="bg-gray-100 rounded-lg p-12 text-center">
        <p className="text-gray-600">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-gray-50 border-b">
        <h3 className="text-xl font-bold">Study Destinations Map</h3>
        <p className="text-sm text-gray-600 mt-1">
          Click markers to see country details • Color indicates overall score
        </p>
      </div>
      
      {/* Map Container */}
      <div id="world-map" style={{ height: '500px', width: '100%' }} />
      
      {/* Legend */}
      <div className="p-4 bg-gray-50 border-t">
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span>Excellent (80+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span>Good (60-79)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <span>Fair (40-59)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span>Below Average (&lt;40)</span>
          </div>
        </div>
      </div>

      {/* Import Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css"
      />
    </div>
  );
}

/**
 * Helper: Calculate overall score (simplified for map display)
 */
function calculateOverallScore( country: StudyCountry): number {
  // This would use your actual scoring algorithm
  // Simplified version for demonstration
  return Math.round(Math.random() * 40 + 60); // Placeholder: 60-100
}

/**
 * Helper: Get marker color based on score
 */
function getColorByScore(score: number): string {
  if (score >= 80) return '#10b981'; // Green
  if (score >= 60) return '#3b82f6'; // Blue
  if (score >= 40) return '#f59e0b'; // Orange
  return '#ef4444'; // Red
}