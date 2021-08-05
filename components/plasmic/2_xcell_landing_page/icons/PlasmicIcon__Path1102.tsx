// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path1102IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path1102Icon(props: Path1102IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1920 345"}
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
          "M0 306.723V119.682s355.154-269.284 891.813 0c536.657 269.283 1028.187 0 1028.187 0V345H0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path1102Icon;
/* prettier-ignore-end */
