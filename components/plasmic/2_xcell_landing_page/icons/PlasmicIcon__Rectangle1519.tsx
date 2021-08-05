// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1519IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1519Icon(props: Rectangle1519IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1924 490"}
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
        opacity={".23"}
        d={"M1924 0H0v490h1924V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1519Icon;
/* prettier-ignore-end */
