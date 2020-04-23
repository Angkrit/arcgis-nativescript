import { View, isIOS, isAndroid } from "tns-core-modules/ui/core/view";

export class MyCustomView extends View {
    createNativeView() {
        if (isIOS) {
            const view = UIView.alloc().initWithFrame(
                CGRectMake(10, 10, 200, 200)
            );
            view.backgroundColor = UIColor.redColor;
            return view;
        } else if (isAndroid) {
            return new this.android.widget.LinearLayout(this._context);
            // return this.android.view.View;
        }
    }
    initNativeView() {
        // optional
    }
    disposeNativeView() {
        // optional
    }
}
