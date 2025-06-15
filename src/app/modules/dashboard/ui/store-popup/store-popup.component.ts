import { Component, Input } from '@angular/core';
import { Store } from '../../data/map.model';
export interface StoreData {
  id: number;
  name: string;
  rating: number;
  address?: string;
  commentsCount?: number;
}
@Component({
  selector: 'app-store-popup',
  standalone: true,
  imports: [],
  templateUrl: './store-popup.component.html',
  styleUrl: './store-popup.component.css',
})
export class StorePopupComponent {
  @Input() store!: Store;
}
