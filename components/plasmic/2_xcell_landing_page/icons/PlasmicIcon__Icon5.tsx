// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon5Icon(props: Icon5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 63 63"}
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
          "M18.638 6.212H5.177v2.071h13.461v-2.07zm0 4.142H5.177v2.071h13.461v-2.07zm-4.142 4.142H5.177v2.071h9.319v-2.07zm0 4.142H5.177v2.071h9.319v-2.07zm47.633 41.42H0v2.071h62.129v-2.07zM59.948 8.857L55.806.572A1.034 1.034 0 0054.418.11l-8.284 4.142a1.036 1.036 0 10.926 1.854l6-3-1.637 4.674A55.259 55.259 0 014.055 44.524l.176 2.071A57.328 57.328 0 0053.379 8.461l1.671-4.775 3.047 6.094a1.036 1.036 0 001.853-.926l-.002.003zM12.426 49.703H5.177a1.035 1.035 0 00-1.035 1.035v6.213a1.035 1.035 0 001.035 1.035h7.248a1.035 1.035 0 001.035-1.035v-6.213a1.035 1.035 0 00-1.035-1.035h.001zm-1.035 6.213H6.217v-4.142h5.177l-.003 4.142zM23.816 46.6h-7.25a1.035 1.035 0 00-1.035 1.035v9.32a1.035 1.035 0 001.035 1.034h7.248a1.035 1.035 0 001.035-1.035v-9.319a1.035 1.035 0 00-1.035-1.035h.002zm-1.035 9.32h-5.177v-7.25h5.177v7.248zm12.425-14.5h-7.248a1.035 1.035 0 00-1.035 1.034v14.5a1.035 1.035 0 001.035 1.035h7.248a1.035 1.035 0 001.035-1.035v-14.5a1.035 1.035 0 00-1.035-1.035zm-1.035 14.5h-5.177V43.49h5.177v12.43z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M46.597 34.17h-7.249a1.036 1.036 0 00-1.035 1.035v21.746a1.035 1.035 0 001.035 1.035h7.249a1.036 1.036 0 001.036-1.035V35.205a1.037 1.037 0 00-1.036-1.035zm-1.033 21.746h-5.18V36.241h5.18v19.675zm12.424-36.242H50.74a1.035 1.035 0 00-1.035 1.035v36.242a1.035 1.035 0 001.035 1.035h7.248a1.035 1.035 0 001.035-1.035V20.71a1.035 1.035 0 00-1.035-1.035zm-1.036 36.242h-5.177v-34.17h5.177v34.17z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
