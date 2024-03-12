import {RouterModule, Routes} from "@angular/router";
import {CreateTaskComponent} from "./create-task/create-task.component";
import {NgModule} from "@angular/core";

const ROUTES: Routes = [
  {path: '', component: CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})

export class TaskRoutingModule {}
