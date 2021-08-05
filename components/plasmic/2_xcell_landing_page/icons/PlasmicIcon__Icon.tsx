// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconIcon(props: IconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 71 63"}
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
          "M27.896 45.322c-.277 0-.544-.099-.755-.278l-7.543-6.425a1.168 1.168 0 010-1.776l7.543-6.423a1.166 1.166 0 011.511 1.774l-6.5 5.537 6.5 5.536a1.165 1.165 0 01-.756 2.053v.002zm14.892 0a1.166 1.166 0 01-.756-2.053l6.5-5.536-6.5-5.537a1.164 1.164 0 111.511-1.774l7.543 6.423a1.165 1.165 0 010 1.776l-7.543 6.425a1.16 1.16 0 01-.755.278v-.002zM32.672 50.14a1.164 1.164 0 01-1.142-1.407l4.7-22.323a1.166 1.166 0 112.281.481l-4.7 22.323a1.167 1.167 0 01-1.139.926z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M62.822 62.3H7.862a7.837 7.837 0 01-7.828-7.828V7.828A7.837 7.837 0 017.862 0h54.96a7.837 7.837 0 017.828 7.828v46.646a7.836 7.836 0 01-7.828 7.828V62.3zM7.862 2.33a5.5 5.5 0 00-5.5 5.5v46.646a5.5 5.5 0 005.5 5.5h54.96a5.5 5.5 0 005.5-5.5V7.828a5.5 5.5 0 00-5.5-5.5l-54.96.002z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M69.483 18.668H1.2a1.166 1.166 0 110-2.331h68.283a1.166 1.166 0 110 2.331zm-49.53-5.578a3.69 3.69 0 110-7.38 3.69 3.69 0 010 7.38zm0-5.048a1.358 1.358 0 100 2.717 1.358 1.358 0 000-2.717zM8.617 13.053a3.69 3.69 0 110-7.38 3.69 3.69 0 010 7.38zm0-5.046a1.358 1.358 0 100 2.716 1.358 1.358 0 000-2.716zm22.671 5.118a3.69 3.69 0 110-7.38 3.69 3.69 0 010 7.38zm0-5.048a1.358 1.358 0 100 2.717 1.358 1.358 0 000-2.717z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconIcon;
/* prettier-ignore-end */
