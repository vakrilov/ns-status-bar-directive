import { Component, OnInit, Input } from "@angular/core";
import { Page, isAndroid, NavigatedData, isIOS } from "@nativescript/core/ui/page";
import { Color } from "@nativescript/core/color";
import { registerElement } from "nativescript-angular";

const SYSTEM_UI_FLAG_LIGHT_STATUS_BAR = 0x00002000;

registerElement("status-bar", () => require("tns-core-modules/ui/proxy-view-container").ProxyViewContainer,
    { skipAddToDom: true })

@Component({
    selector: "status-bar",
    template: ""
})
export class StatusBarComponent {

    @Input() color: string;
    @Input() statusBarStyle: "light" | "dark";

    constructor(private page: Page) {
        console.log(`[StatusBarComponent] ${this.page} constructor`);

        page.on("loaded", this.update, this);

        page.on("navigatedFrom", (args: NavigatedData) => {
            if (args.isBackNavigation) {
                console.log(`[StatusBarComponent] ${this.page} isBack: ${args.isBackNavigation} -> Clean-up`);
                page.off("loaded", this.update, this);
            }
        });
    }

    update() {
        console.log(`[StatusBarComponent] ${this.page} Update`);

        if (isAndroid) {
            if (this.page._context) {
                const window = this.page._context.getWindow();
                const decorView = window.getDecorView();

                // Set the status bar content color
                if (this.statusBarStyle === "light") {
                    decorView.setSystemUiVisibility(SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
                } else if (this.statusBarStyle === "dark") {
                    decorView.setSystemUiVisibility(0);
                }

                // Set the status bar background color
                if (this.color) {
                    window.setStatusBarColor(new Color(this.color).android)
                }
            }
        } else if (isIOS) {
            // Get the topmost page. IOS gets the preferredStatusBarStyle from tht topmost ViewController
            let topPage = this.page;
            while (topPage.frame && topPage.frame.page) {
                topPage = topPage.frame.page
            }

            topPage.statusBarStyle = this.statusBarStyle;
        }
    }
}
