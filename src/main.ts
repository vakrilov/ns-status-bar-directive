// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import { android as androidApp, AndroidActivityEventData } from "tns-core-modules/application"
declare const android;
if (androidApp) {
  androidApp.on("activityCreated", (args: AndroidActivityEventData) => {
    console.log("created");
    const window = args.activity.getWindow();
    window.clearFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
    window.addFlags(android.view.WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
  });
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
