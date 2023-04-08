import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InputBindingComponent } from "./courses/input-binding/input-binding.component";
import { AuthorListComponent } from "./courses/authors/author-list/author-list.component";
import { AuthorDetailComponent } from "./courses/authors/author-detail/author-detail.component";
import { FormsModule } from "@angular/forms";
import { ToggleComponent } from "./courses/toggle/toggle.component";

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
