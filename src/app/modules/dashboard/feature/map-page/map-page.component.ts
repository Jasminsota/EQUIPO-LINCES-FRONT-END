import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from '../../data/map.service';
import { StorePopupComponent } from '../../ui/store-popup/store-popup.component';
@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css',
})
export class MapPageComponent {
  private mapService = inject(MapService);

  constructor() {
    effect(() => this.mapService.initMap('map'));
  }
}
