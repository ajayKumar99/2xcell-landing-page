// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle4Icon(props: Rectangle4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 426 64"}
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
          "M415.454 0H10C4.477 0 0 4.477 0 10v43.21c0 5.523 4.477 10 10 10h405.454c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle4Icon;
/* prettier-ignore-end */
