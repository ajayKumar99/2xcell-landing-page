// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path1101IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path1101Icon(props: Path1101IconProps) {
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
          "M0 306.723V119.682s355.154-269.284 891.813 0c536.657 269.283 1028.187 0 1028.187 0v187.042l-260.85 5.205L0 345"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path1101Icon;
/* prettier-ignore-end */
