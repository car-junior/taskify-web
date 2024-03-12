import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {NgModule} from "@angular/core";

const MODULES = [
  NbThemeModule.forRoot(),
  NbLayoutModule,
  NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
  NbButtonModule,
  NbActionsModule,
  NbCardModule,
  NbEvaIconsModule,
  NbIconModule
]

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})

export class NebularModule {
}
