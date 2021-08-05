// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1578IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1578Icon(props: Rectangle1578IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 50"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M187 0H7a7 7 0 00-7 7v36a7 7 0 007 7h180a7 7 0 007-7V7a7 7 0 00-7-7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1578Icon;
/* prettier-ignore-end */
