import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { ToggleComponent } from "./courses/toggle/toggle.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  // @ViewChild("toggle") _toggle!: ToggleComponent;
  // @ViewChild(ToggleComponent, { static: true }) _toggle!: ToggleComponent;
  @ViewChildren(ToggleComponent) _toggle!: QueryList<ToggleComponent>;

  @ViewChild("toggleBtn", { static: true })
  _toggleBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild("nameInput", { static: true })
  _nameInput!: ElementRef<HTMLInputElement>;

  title = "angular-100-days";
  name = "Angular 15";
  checked = true;
  showLast = true;

  ngOnInit(): void {
    setTimeout(() => {
      this._nameInput.nativeElement.focus();
    }, 3000);
  }

  ngAfterViewInit(): void {
    // console.log(this._toggle);
    this._toggle.changes.subscribe(() => console.log(this._toggle));
  }
}
