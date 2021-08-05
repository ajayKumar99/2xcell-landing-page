// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 63"}
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
          "M54.584 18.712a9.223 9.223 0 00-5.9-2.64c.129-.383.195-.784.194-1.189a3.655 3.655 0 00-3.621-3.678 8.907 8.907 0 00-3.146.927V8.416a1.654 1.654 0 00-1.652-1.652h-3.1a8.897 8.897 0 00.927-3.146 3.68 3.68 0 00-7.357 0 8.9 8.9 0 00.927 3.146h-3.1a1.654 1.654 0 00-1.652 1.652v3.286a1.656 1.656 0 002.171 1.573c.329-.13.674-.213 1.026-.249a1.858 1.858 0 010 3.714 3.795 3.795 0 01-1.026-.248 1.656 1.656 0 00-2.171 1.572v3.286a1.654 1.654 0 001.652 1.652h3.1a8.9 8.9 0 00-.927 3.146 3.68 3.68 0 007.357 0 8.898 8.898 0 00-.927-3.146h3.1a1.654 1.654 0 001.652-1.652v-3.716a8.898 8.898 0 003.146.927c.803 0 1.583-.271 2.213-.77 4.389.263 8.252 1.53 8.252 11.771a50.57 50.57 0 01-3.642 18.506.908.908 0 00.482 1.194.9.9 0 00.858-.077.91.91 0 00.336-.405 52.492 52.492 0 003.788-19.218c0-5.167-.967-8.717-2.957-10.85h-.003zm-13.014-3.3a.908.908 0 00-1.283.83v4.934h-4.324a.912.912 0 00-.83 1.285c1.26 2.795 1.323 3.56 1.323 3.683a1.856 1.856 0 01-3.713 0c0-.125.063-.888 1.323-3.683a.91.91 0 00-.83-1.285h-4.324v-2.879c.443.156.907.247 1.376.27a3.679 3.679 0 000-7.358 4.82 4.82 0 00-1.376.27V8.59h4.324a.91.91 0 00.83-1.285c-1.26-2.795-1.323-3.559-1.323-3.683a1.857 1.857 0 013.713 0c0 .125-.063.888-1.323 3.683a.91.91 0 00.83 1.285h4.324v4.934a.909.909 0 001.283.83c2.795-1.26 3.559-1.325 3.683-1.325a1.858 1.858 0 010 3.714c-.125 0-.888-.064-3.683-1.323v-.008z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M51.439 51.466a.911.911 0 00-1.257.28c-1.12 1.76-2.885 3.86-4.929 3.86-3.706 0-7.734-7.126-9.577-16.943a.912.912 0 00-.895-.743H22.767a.912.912 0 00-.895.743 51.225 51.225 0 01-1.194 4.993l-4.107-1.715a1.653 1.653 0 00-2.161 2.162l3.038 7.277c-1.216 2.012-3.037 4.225-5.155 4.225-2.47 0-5.093-3.08-7.2-8.452a50.832 50.832 0 01-3.27-17.59c0-5.135.983-8.443 3-10.114 1.727-1.428 4.137-1.715 7.465-1.715 4.938 0 8.814.5 10.049 6.795a.91.91 0 00.893.734h4.11a.91.91 0 000-1.82h-3.378c-.736-3.049-2.159-5.1-4.336-6.255-1.994-1.057-4.375-1.273-7.339-1.273C5.813 15.915 0 16.96 0 29.565a52.753 52.753 0 003.4 18.253c2.426 6.2 5.585 9.608 8.892 9.608 2.1 0 4.157-1.38 6-4.013l3.286 7.871a1.636 1.636 0 001.468 1.014h.06a1.632 1.632 0 001.473-.912l1.6-3.192 2.817 2.816a1.631 1.631 0 002.305 0l2.183-2.17a1.63 1.63 0 000-2.306l-2.817-2.816 3.194-1.6a1.65 1.65 0 00-.1-3l-11.382-4.752a52.76 52.76 0 001.147-4.62H34.04a42.443 42.443 0 004.076 11.834c2.125 3.827 4.6 5.85 7.146 5.85 2.273 0 4.508-1.626 6.466-4.7a.91.91 0 00-.279-1.257l-.01-.007zm-19.381 6.218l-1.905 1.905-3.11-3.11.635-1.268 1.27-.635 3.11 3.108zm-3.353-5.024l-2.11 1.057a.91.91 0 00-.406.406l-3.065 6.118-6.872-16.46 16.46 6.871-4.007 2.008zm16.548-27.993a3.115 3.115 0 10.002 6.23 3.115 3.115 0 00-.002-6.23zm0 4.41a1.295 1.295 0 110-2.59 1.295 1.295 0 010 2.59zm0 5.713a3.116 3.116 0 100 6.232 3.116 3.116 0 000-6.232zm0 4.411a1.295 1.295 0 110-2.59 1.295 1.295 0 010 2.59zm8.18-6.359a3.117 3.117 0 10-6.233-.001 3.117 3.117 0 006.233.001zm-4.411 0a1.295 1.295 0 112.59 0 1.295 1.295 0 01-2.59 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M37.074 32.842a3.116 3.116 0 106.232 0 3.116 3.116 0 00-6.232 0zm4.41 0a1.294 1.294 0 11-2.588-.002 1.294 1.294 0 012.588.002zm-23.459.891a.91.91 0 00.709 1.677 2.811 2.811 0 00-1.1-5.4h-2.531v-2.532a2.813 2.813 0 10-5.626 0v2.532H6.95a2.813 2.813 0 100 5.625h2.532v2.532a2.813 2.813 0 105.626 0v-3.443a.91.91 0 10-1.822 0v3.443a.99.99 0 11-1.982 0v-3.443a.91.91 0 00-.911-.91H6.95a.992.992 0 110-1.984h3.443a.911.911 0 00.911-.91v-3.443a.99.99 0 011.982 0v3.442a.911.911 0 00.911.911h3.442a.991.991 0 01.386 1.905v-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */