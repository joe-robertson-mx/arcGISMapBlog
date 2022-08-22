import { ReactElement, createElement, useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";

export interface MapProps {
    basemap: string;
}

export function MapComponent({ basemap }: MapProps): ReactElement {
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            MountMap(basemap);
        }
    }, [basemap]);

    const MountMap = (basemap: string): MapView => {
        const legend = new Legend();
        const map = new Map({ basemap });
        const view = new MapView({
            map,
            center: [0.029, 51.256], // Longitude, latitude
            zoom: 10, // Zoom level
            container: mapDiv.current as unknown as HTMLDivElement // Div element
        });

        legend.view = view;
        view.ui.add(legend, "bottom-right");
        return view;
    };

    return <div id="viewDiv" ref={mapDiv} style={{ height: "500px" }} />;
}
