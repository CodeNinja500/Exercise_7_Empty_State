import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { PublicHolidaysComponent } from './components/public-holidays/public-holidays.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysComponentModule } from './components/public-holidays/public-holidays.component-module';
import { HoliadysServiceModule } from './services/holiadys.service-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'crypto', component: CryptoComponent },
    { path: 'public-holidays', component: PublicHolidaysComponent },
    { path: 'checkbox-categories', component: CategoriesCheckboxComponent }
  ]), ProductListComponentModule, ProductsServiceModule, CategoriesComponentModule, CategoriesServiceModule, CryptoComponentModule, CryptoServiceModule, PublicHolidaysComponentModule, HoliadysServiceModule, CategoriesCheckboxComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
