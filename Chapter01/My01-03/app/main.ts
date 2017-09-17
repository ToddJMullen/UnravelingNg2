import {platformBrowserDynamic}    from "@angular/platform-browser-dynamic";
import {AppModule}        from "./app.module";

console.log("main.ts, platformBrowserDynamic().bootstrapModule(AppModule)...");
platformBrowserDynamic().bootstrapModule(AppModule);