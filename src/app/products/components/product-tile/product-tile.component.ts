import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ImageLoaderComponent } from '../../../shared/components/image-loader/image-loader.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [ImageLoaderComponent, CommonModule, RouterModule],
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.scss'
})
export class ProductTileComponent {

  @Input() product!: Product;
  @Input() quantity!: number | undefined;

}
