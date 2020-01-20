import { Component, ViewChild } from "@angular/core";
import { Page } from "@nativescript/core/ui/page";
import { PageRouterOutlet } from "@nativescript/angular/router/page-router-outlet";

@Component({
    selector: "ns-wrapped-empty-outlet",
    template: "<GridLayout><page-router-outlet isEmptyOutlet='true'></page-router-outlet></GridLayout>"
})
export class WrappedEmptyOutletComponent {
    @ViewChild(PageRouterOutlet, { read: PageRouterOutlet, static: false }) pageRouterOutlet: PageRouterOutlet;
    constructor(private page: Page) {
        console.log("[WrappedEmptyOutletComponent] constructor")
        if (this.page) {
            this.page.actionBarHidden = true;

            this.page.on("loaded", () => {
                if (this.pageRouterOutlet && this.page.frame) {
                    this.pageRouterOutlet.setActionBarVisibility(this.page.frame.actionBarVisibility);
                }
            });
        }
    }
}
