import { Routes } from "@angular/router";
import { ModalForm } from "./modalforms/modal.component";
import { TemplateForm } from "./templateforms/template.component";

export const appRoutes: Routes = [
  { path: "template", component: TemplateForm },
  { path: "modal", component: ModalForm },
  { path: ' ' ,redirectTo: "template", pathMatch: "full" },
];
