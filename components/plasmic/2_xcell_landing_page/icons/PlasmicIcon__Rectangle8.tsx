// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle8Icon(props: Rectangle8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 482 660"}
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
        opacity={".2"}
        d={
          "M467 .5H15C6.992.5.5 6.992.5 15v630c0 8.008 6.492 14.5 14.5 14.5h452c8.008 0 14.5-6.492 14.5-14.5V15c0-8.008-6.492-14.5-14.5-14.5z"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle8Icon;
/* prettier-ignore-end */
