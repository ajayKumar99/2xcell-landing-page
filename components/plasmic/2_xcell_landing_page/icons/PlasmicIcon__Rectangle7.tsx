// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle7Icon(props: Rectangle7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 200 50"}
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
          "M175 0H25C11.193 0 0 11.193 0 25s11.193 25 25 25h150c13.807 0 25-11.193 25-25S188.807 0 175 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle7Icon;
/* prettier-ignore-end */
