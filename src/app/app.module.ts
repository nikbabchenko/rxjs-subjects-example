import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import "rxjs/add/observable/interval";
import "rxjs/add/observable/of";
import "rxjs/add/operator/take";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/share";
import "rxjs/add/operator/startWith";
import "rxjs/add/operator/scan";
import {TakeUntilModule} from "./take-until/take-until.module";
import {ShareModule} from "./share/share.module";
import {CachingModule} from "./caching/caching.module";
import {UnitsModule} from "./units/units.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TakeUntilModule,
    ShareModule,
    CachingModule,
    UnitsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
