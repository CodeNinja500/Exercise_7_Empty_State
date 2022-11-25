import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, map, Observable} from 'rxjs';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-categories-checkbox',
  styleUrls: ['./categories-checkbox.component.scss'],
  templateUrl: './categories-checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll().pipe(
    delay(2000),
    //map(()=>[])
  );

  constructor(private _categoriesService: CategoriesService) {
  }
}
