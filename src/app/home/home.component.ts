import { Component, OnInit } from "@angular/core";
import { Color } from "@nativescript/core/color";

import { DataService, DataItem } from "../shared/data.service";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) {
        
    }


    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
