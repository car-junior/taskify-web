import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbIconModule,
  NbLayoutModule, NbListModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {NgModule} from "@angular/core";

const MODULES = [
  NbThemeModule.forRoot(),
  NbLayoutModule,
  NbButtonModule,
  NbActionsModule,
  NbCardModule,
  NbEvaIconsModule,
  NbIconModule,
  NbSidebarModule.forRoot(),
  NbListModule
]

@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})

export class NebularModule {
}
