import {HeaderComponent} from "./components/layout/header/header.component";
import {SidebarComponent} from "./components/layout/sidebar/sidebar.component";
import {ColumnComponent} from "./components/layout/column/column.component";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {NebularModule} from "../nebular/nebular.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

const COMPONENTS = [
  HeaderComponent,
  ColumnComponent,
  SidebarComponent
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
