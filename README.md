# react-pinch-zoom-element

![NPM version](https://img.shields.io/npm/v/react-pinch-zoom-element)
![License](http://img.shields.io/npm/l/react-pinch-zoom-element.svg?style=flat-square)

## Preview

![화면 기록 2022-10-28 오후 12 41 46](https://user-images.githubusercontent.com/31176502/198498587-79955b22-67b8-461b-98de-e25def0def5d.gif)

## Installation

```
$ yarn add react-pinch-zoom-element
```

## How to run example code

```
$ git clone https://github.com/jinsunee/react-pinch-zoom-element.git
$ cd react-pinch-zoom-element
$ yarn
$ yarn storybook
```

## Full code of example

```
import React from "react";
import { PinchZoom } from "react-pinch-zoom-element";

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
```
