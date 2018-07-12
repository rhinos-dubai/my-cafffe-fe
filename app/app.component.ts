import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `<Label text='Hello coffee world'></Label> 
  <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [`
    @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360); }
    }
    Image {
      animation-name: spin; animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `]
})
export class AppComponent {}