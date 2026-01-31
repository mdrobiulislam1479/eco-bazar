"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
});

export default function Map() {
  return <LeafletMapInner />;
}
