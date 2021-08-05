// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group3Icon(props: Group3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 613 332"}
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
          "M294.143 329.054c-4.591.616-213.59 28.871-271.893-112.9C-46.106 49.934 55.357 21.1 159.8 47.716c104.443 26.616 194.78.856 258.244-22.172 63.464-23.028 85.747-40.235 142.9-7.086 62.422 36.2 143.219 255.642-266.806 310.6"
        }
        fill={"currentColor"}
        fillOpacity={".1"}
      ></path>
    </svg>
  );
}

export default Group3Icon;
/* prettier-ignore-end */
