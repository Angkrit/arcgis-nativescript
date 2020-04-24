import { View, isIOS, isAndroid } from "tns-core-modules/ui/core/view";
import { Switch } from "tns-core-modules/ui/switch/switch";

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
        this.setupMap();
    }
    disposeNativeView() {
        // optional
    }

    private setupMap() {
        this.mapView.map = AGSMap.alloc().initWithBasemapTypeLatitudeLongitudeLevelOfDetail(
            AGSBasemapType.ImageryWithLabelsVector,
            13.0,
            100,
            17
        );
    }
}
