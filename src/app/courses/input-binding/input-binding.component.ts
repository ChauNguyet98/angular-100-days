import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-input-binding",
  templateUrl: "./input-binding.component.html",
  styleUrls: ["./input-binding.component.scss"],
})
export class InputBindingComponent implements OnInit {
  // @Input() progress = 50;
  // @Input() backgroundColor = "#ccc";
  // @Input() progressColor = "tomato";

  @Input() set progress(val: number) {
    // validation for validation
    if (typeof val !== "number") {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    }
    this._progress = val;
  }
  private _progress = 50;
  get progress() {
    return this._progress;
  }

  @Input() backgroundColor = "#ccc";
  @Input("progress-color") progressColor = "tomato";

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
