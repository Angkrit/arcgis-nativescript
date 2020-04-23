import { View, isIOS, isAndroid } from "tns-core-modules/ui/core/view";

export class MapView extends View {
    private mapView: AGSMapView;
    createNativeView() {
        const mapView = AGSMapView.alloc().initWithFrame(
            CGRectMake(0, 0, 0, 0)
        );
        this.mapView = mapView;
        return mapView;
    }
    initNativeView() {
        this.mapView.map = AGSMap.alloc().initWithBasemapTypeLatitudeLongitudeLevelOfDetail(
            AGSBasemapType.ImageryWithLabelsVector,
            13.0,
            100,
            17
        );
    }
    disposeNativeView() {
        // optional
    }
}
