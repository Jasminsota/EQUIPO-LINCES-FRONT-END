import { Injectable, signal } from '@angular/core';
import * as L from 'leaflet';
import { Store } from './map.model';

@Injectable({ providedIn: 'root' })
export class MapService {
  private map?: L.Map;
  private markersLayer = L.layerGroup();

  stores = signal<Store[]>([
    {
      id: 1,
      name: 'Tienda Oxxo Reforma',
      address: 'Av. Reforma 123, CDMX',
      lat: 19.4333,
      lng: -99.1334,
      lastVisit: '2025-06-10',
    },
    {
      id: 2,
      name: '7-Eleven Condesa',
      address: 'Calle Amsterdam 45, CDMX',
      lat: 19.4146,
      lng: -99.1713,
      lastVisit: '2025-06-11',
    },
    {
      id: 3,
      name: 'Extra Roma Norte',
      address: 'Av. Insurgentes Sur 321, CDMX',
      lat: 19.4061,
      lng: -99.1621,
      lastVisit: '2025-06-13',
    },
    {
      id: 4,
      name: 'Supercito Centro',
      address: 'Calle 5 de Mayo 250, CDMX',
      lat: 19.4325,
      lng: -99.132,
      lastVisit: '2025-06-14',
    },
    {
      id: 5,
      name: 'Tienda La Rápida',
      address: 'Calle Bucareli 89, CDMX',
      lat: 19.429,
      lng: -99.15,
      lastVisit: '2025-06-12',
    },
  ]);

  public initMap(containerId: string) {
    if (this.map) return;

    this.map = L.map(containerId).setView([19.4326, -99.1332], 13);

    // Puedes cambiar el tile provider aquí
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      }
    ).addTo(this.map);

    this.markersLayer.addTo(this.map);
    this.addMarkersWithPopups();
  }

  private renderMarkers() {
    this.markersLayer.clearLayers();
    const customHtmlIcon = L.divIcon({
      html: `<div class="bg-red-600 text-white px-2 py-1 rounded shadow text-sm">🛒</div>`,
      className: '', // eliminar estilos por defecto
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    this.stores().forEach((store) => {
      const marker = L.marker([store.lat, store.lng], {
        icon: customHtmlIcon,
        opacity: 1,
      });

      marker.addTo(this.markersLayer);
    });
  }

  updateStores(newStores: Store[]) {
    this.stores.set(newStores);
    this.renderMarkers();
  }

  addMarkersWithPopups() {
    this.markersLayer.clearLayers();

    this.stores().forEach((store) => {
      const marker = L.circleMarker([store.lat, store.lng], {
        radius: 6,
        fillColor: 'red',
        color: 'red',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.9,
      });

      const popupContent = `
        <div class="p-2 max-w-xs">
          <h3 class="font-bold text-lg">${store.name}</h3>
          <p class="text-sm">${store.address}</p>
          <p class="text-xs text-gray-500">Última visita: ${store.lastVisit}</p>
        </div>
      `;

      marker.bindPopup(popupContent);
      marker.addTo(this.markersLayer);
    });
  }
}
