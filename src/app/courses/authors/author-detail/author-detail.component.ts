import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Author } from "../../../models/authors.model";

@Component({
  selector: "app-author-detail",
  templateUrl: "./author-detail.component.html",
  styleUrls: ["./author-detail.component.scss"],
})
export class AuthorDetailComponent {
  @Input() author!: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit() {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
