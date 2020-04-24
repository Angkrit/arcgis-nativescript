import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { EventData } from "tns-core-modules/ui/page/page";
import { Switch } from "tns-core-modules/ui/switch/switch";

@Component({
    moduleId: module.id,
    selector: "ns-items",
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) {}

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onCheckedChange(args: EventData) {
        let sw = args.object as Switch;
        let isChecked = sw.checked; // boolean
    }
}
