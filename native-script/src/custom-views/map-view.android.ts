import { View, isIOS, isAndroid } from "tns-core-modules/ui/core/view";

export class MapView extends View {
    private mapView: com.esri.arcgisruntime.mapping.view.MapView;

    createNativeView() {
        this.mapView = new com.esri.arcgisruntime.mapping.view.MapView(
            this._context
        );
        return this.mapView;
    }
    initNativeView() {
        // optional
    }
    disposeNativeView() {
        // optional
    }
}
