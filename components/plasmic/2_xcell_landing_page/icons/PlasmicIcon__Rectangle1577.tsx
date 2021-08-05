// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1577IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1577Icon(props: Rectangle1577IconProps) {
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
          "M188 0H6a6 6 0 00-6 6v38a6 6 0 006 6h182a6 6 0 006-6V6a6 6 0 00-6-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1577Icon;
/* prettier-ignore-end */
