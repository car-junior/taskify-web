import {NgModule} from "@angular/core";
import {CreateTaskComponent} from "./create-task/create-task.component";
import {NebularModule} from "../nebular/nebular.module";
import {CommonModule} from "@angular/common";
import {TaskRoutingModule} from "./task-routing.module";

@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    NebularModule,
    TaskRoutingModule
  ]
})

export class TaskModule {
}
