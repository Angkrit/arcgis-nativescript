import { ios, run as applicationRun } from "tns-core-modules/application";
class AppDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];
    applicationDidFinishLaunchingWithOptions(
        application: UIApplication,
        launchOptions: NSDictionary<string, any>
    ): boolean {
        console.log(
            "applicationWillFinishLaunchingWithOptions: " + launchOptions
        );
        return true;
    }
    applicationDidBecomeActive(application: UIApplication): void {
        console.log("applicationDidBecomeActive: " + application);
    }
}

ios.delegate = AppDelegate;
// applicationRun({ moduleName: "main-page" });
