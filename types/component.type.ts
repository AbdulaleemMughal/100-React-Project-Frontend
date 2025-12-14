import { ComponentType as ReactComponentType } from "react";

export type ComponentType = {
  id: number;
  name: string;
  path: string;
  title: string;
  desc: string;
  component: ReactComponentType;
  howToUse: string;
};
