import { View, isIOS, isAndroid } from "tns-core-modules/ui/core/view";
const ArcGISMapView = com.esri.arcgisruntime.mapping.view.MapView;
const ArcGISMap = com.esri.arcgisruntime.mapping.ArcGISMap;
const Basemap = com.esri.arcgisruntime.mapping.Basemap;

export class MapView extends View {
    private mapView; // ArcGISMapView

    createNativeView() {
        this.mapView = new ArcGISMapView(this._context);
        return this.mapView;
    }
    initNativeView() {
        this.setupMap();
    }
    disposeNativeView() {
        // optional
    }

    private setupMap() {
        if (this.mapView != null) {
            const basemapType = Basemap.Type.IMAGERY_WITH_LABELS_VECTOR;
            const latitude = 13;
            const longitude = 100;
            const levelOfDetail = 17;
            const map = new ArcGISMap(
                basemapType,
                latitude,
                longitude,
                levelOfDetail
            );
            this.mapView.setMap(map);
        }
    }
}
