import React from "react";
import classNames from "classnames";
import IAppTextProps from "./types";

function AppText(props: IAppTextProps): JSX.Element {
  const TextTag = props.textTag;
  return (
    <TextTag
      className={classNames(
        props.defaultColor &&
          `text-textColor-primary-day dark:text-textColor-primary-night`,
        props.primary &&
          "text-textColor-appPrimaryColor dark:text-textColor-appPrimaryColor",
        props.secondary &&
          "text-textColor-secondary-day dark:text-textColor-secondary-night",
        props.tertiary &&
          "text-textColor-tertiary-day dark:text-textColor-tertiary-day",
        props.small && "sm:text-xs text-[8px]",
        props.default && `sm:text-base text-xs`,
        props.medium && "sm:text-xl text-lg",
        props.extraMedium && "sm:text-2xl text-xl",
        props.large && "sm:text-3xl text-2xl",
        props.extraLarge && "sm:text-5xl text-4xl",
        props.bold && "font-bold",
        props.semiBold && "font-medium",
        props.light && "font-light",
        props.hoverEffect &&
          props.defaultColor &&
          "hover:text-textColor-secondary-day dark:hover:text-textColor-secondary-night",
        props.hoverEffect &&
          props.primary &&
          "hover:text-textColor-appPrimaryColor-light",
        props.hoverEffect &&
          (props.secondary || props.tertiary) &&
          "hover:text-textColor-primary-day dark:hover:text-textColor-primary-night",
        props.customClass && props.customClass
      )}
    >
      {props.children}
    </TextTag>
  );
}

export default AppText;
