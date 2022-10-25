import { css, Global } from "@emotion/react";
import React from "react";

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
      }

      html,
      body,
      #root {
        min-height: 100%;
        height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        background-color: #efefef;
      }

      li {
        list-style: none;
      }
    `}
  />
);
