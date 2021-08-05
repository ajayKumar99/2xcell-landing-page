// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle10Icon(props: Rectangle10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 50"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".5"}
        d={
          "M175 .5H25C11.469.5.5 11.469.5 25S11.469 49.5 25 49.5h150c13.531 0 24.5-10.969 24.5-24.5S188.531.5 175 .5z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle10Icon;
/* prettier-ignore-end */
