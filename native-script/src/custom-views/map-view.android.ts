import { View, isIOS, isAndroid } from "tns-core-modules/ui/core/view";

export class MapView extends View {
    private map: AGSMap;

    createNativeView() {
        return new this.android.widget.LinearLayout(this._context);
    }
    initNativeView() {
        // optional
    }
    disposeNativeView() {
        // optional
    }
}
