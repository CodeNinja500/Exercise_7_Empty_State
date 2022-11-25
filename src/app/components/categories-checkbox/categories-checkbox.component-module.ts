import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CategoriesCheckboxComponent } from './categories-checkbox.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
  declarations: [CategoriesCheckboxComponent],
  providers: [],
  exports: [CategoriesCheckboxComponent]
})
export class CategoriesCheckboxComponentModule {
}
