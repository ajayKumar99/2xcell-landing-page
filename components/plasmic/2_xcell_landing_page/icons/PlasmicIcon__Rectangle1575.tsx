// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1575IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1575Icon(props: Rectangle1575IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 482 365"}
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
        opacity={".51"}
        d={"M15 0h452a15.001 15.001 0 0115 15v350H0V15A15 15 0 0115 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1575Icon;
/* prettier-ignore-end */
