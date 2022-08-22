import { ReactElement, createElement } from "react";
import { MapComponent } from "./components/Map";
import { ArcGISMapBlogContainerProps } from "../typings/ArcGISMapBlogProps";
import "./ui/ArcGISMapBlog.css";
import esriConfig from "@arcgis/core/config.js";

export function ArcGISMapBlog(props: ArcGISMapBlogContainerProps): ReactElement {
    esriConfig.assetsPath = "./widgets/mendix/arcgismapblog/assets";
    return <MapComponent basemap={props.basemap} />;
}
