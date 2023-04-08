import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputBindingComponent } from './courses/input-binding/input-binding.component';
import { AuthorListComponent } from './courses/authors/author-list/author-list.component';
import { AuthorDetailComponent } from './courses/authors/author-detail/author-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    AuthorListComponent,
    AuthorDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
