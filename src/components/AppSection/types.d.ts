import { PropsWithChildren } from "react";

export default interface IAppSectionProps extends PropsWithChildren {
  headerTxt?: string;
  hideHeaderTxt?: boolean;
}
