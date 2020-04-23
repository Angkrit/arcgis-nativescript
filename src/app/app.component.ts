import { Component } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

// register custom views for your app
registerElement(
    "MyCustomView",
    () => require("../custom-views/my-custom-view").MyCustomView
);

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    ngOnInit() {}
}
