// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle9Icon(props: Rectangle9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 159 43"}
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
        opacity={".1"}
        d={
          "M142 0H17C7.611 0 0 7.611 0 17v9c0 9.389 7.611 17 17 17h125c9.389 0 17-7.611 17-17v-9c0-9.389-7.611-17-17-17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle9Icon;
/* prettier-ignore-end */
