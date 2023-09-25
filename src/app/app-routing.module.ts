import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { AnswersComponent } from './answers/answers.component';

const routes: Routes = [

  {path: "form/builder", component: QuestionComponent},
  {path: "form/answers", component: AnswersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
