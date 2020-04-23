import { Component } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

// register custom views for your app
registerElement("MapView", () => require("../custom-views/map-view").MapView);

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    ngOnInit() {}
}
