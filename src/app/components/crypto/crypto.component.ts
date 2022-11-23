import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {last, map, Observable, take, takeLast} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';

@Component({
  selector: 'app-crypto',
  styleUrls: ['./crypto.component.scss'],
  templateUrl: './crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoComponent {
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {
  }
}
