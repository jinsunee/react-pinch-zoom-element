import React from "react";
import { PinchZoom } from "../src";

export default function PinchZoomExample({
  backgroundColor = "purple",
}: {
  backgroundColor: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid green",
          overflow: "hidden",
          width: 400,
          height: 400,
        }}
      >
        <PinchZoom>
          <div
            style={{
              backgroundColor,
              height: 300,
              width: 300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Zoom in it!
          </div>
        </PinchZoom>
      </div>
    </div>
  );
}
