/// <reference types="@types/markerclustererplus" />

import { loadMapScript } from "./mapscript";
// import { RegisterSW } from "./sw-reg";
import * as clickListeners from "./clickListeners";
import { FunWithMaps } from "./map";
import {} from "google-maps";

// RegisterSW();
clickListeners.loadAllDrawingButtons();
clickListeners.listenersForControlButtons();

let map: google.maps.Map;

if (window["google"] && window["google"]["maps"]) {
  initMap();
} else {
  loadMapScript("geometry,drawing,visualization,places", (event: Event) => {
    initMap();
  });
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    /**
     * Add your map options here
     *
     * https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/reference/map#MapOptions
     */
    backgroundColor: '#00ced1',
    keyboardShortcuts: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    scrollwheel: true,
    streetViewControl: false,
    zoom: 11,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
  });
  FunWithMaps(map);
}
