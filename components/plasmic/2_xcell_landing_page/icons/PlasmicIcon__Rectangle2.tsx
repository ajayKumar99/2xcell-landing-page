// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle2Icon(props: Rectangle2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 99 34"}
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
          "M82 0H17C7.611 0 0 7.611 0 17s7.611 17 17 17h65c9.389 0 17-7.611 17-17S91.389 0 82 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle2Icon;
/* prettier-ignore-end */
