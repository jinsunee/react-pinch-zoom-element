import React from "react";
import { PinchZoom } from "../src";

export default function PinchZoomExample() {
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
          width: 800,
          height: 400,
        }}
      >
        <PinchZoom>
          <img
            src={require("./assets/img.jpg")}
            alt=""
            style={{ width: 400, height: 400, pointerEvents: "none" }}
          />
        </PinchZoom>
      </div>
    </div>
  );
}
