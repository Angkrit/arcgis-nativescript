// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { ios, run as applicationRun } from "tns-core-modules/application";
import { AppModule } from "./app/app.module";

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.

// class AppDelegate extends UIResponder implements UIApplicationDelegate {
//     public static ObjCProtocols = [UIApplicationDelegate];
//     applicationDidFinishLaunchingWithOptions(
//         application: UIApplication,
//         launchOptions: NSDictionary<string, any>
//     ): boolean {
//         console.log(
//             "applicationWillFinishLaunchingWithOptions: " + launchOptions
//         );
//         return true;
//     }
//     applicationDidBecomeActive(application: UIApplication): void {
//         console.log("applicationDidBecomeActive: " + application);
//     }
// }
// ios.delegate = AppDelegate;

platformNativeScriptDynamic().bootstrapModule(AppModule);
