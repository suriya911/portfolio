import { PropsWithChildren } from "react";

interface ISkill {
  logo: any;
  name: string;
  url: string;
  id: string;
}

export default interface ISkillsSubSectionProps extends PropsWithChildren {
  skills: ISkill[];
  headerTxt: string;
}
