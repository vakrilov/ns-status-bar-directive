import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    @ViewChild("bottomNavigation", { static: false }) bn: ElementRef;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onButtonTap(args): void {
        console.log("Button id: ", args.object.id);

        switch (args.object.id) {
            case "home":
                this.bn.nativeElement.selectedIndex = 0;
                break;
            case "browse":
                this.bn.nativeElement.selectedIndex = 1;
                break;
            case "search":
                this.bn.nativeElement.selectedIndex = 2;
                break;
            default:
                break;
        }
    }
}
