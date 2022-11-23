import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, last, map, Observable, take} from 'rxjs';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  styleUrls: ['./categories.component.scss'],
  templateUrl: './categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll().pipe(
    delay(2000),
    map(()=>[])
  );

  constructor(private _categoriesService: CategoriesService) {
  }
}
