import {NgModule, Optional, SkipSelf} from "@angular/core";
import {NebularModule} from "../nebular/nebular.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { LayoutComponent } from './components/layout/layout.component';

const COMPONENTS = [
  LayoutComponent
];

const MODULES = [
  RouterModule,
  NebularModule
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule)
      throw new Error("Cannot loading CoreModule why it's already loaded in AppModule")
  }
}
