import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {delay, map, Observable} from 'rxjs';
import {HolidayModel} from '../../models/holiday.model';
import {HoliadysService} from '../../services/holiadys.service';

@Component({
  selector: 'app-public-holidays',
  styleUrls: ['./public-holidays.component.scss'],
  templateUrl: './public-holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidaysComponent {
  readonly holidays$: Observable<HolidayModel[]> = this._holiadysService.getAll().pipe(
    delay(2000),
    //map(()=>[])

  );

  constructor(private _holiadysService: HoliadysService) {
  }
}
