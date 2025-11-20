import { JSX } from "react";

export type CompetenceType = {
    img?: string;
    name: string;
    svg?: JSX.Element;
  };
  
  export type ArrayElementType<T> = T extends (infer U)[] ? U : never;
  
  export type ProjectType = {
    title: string;
    img: string;
    imgTag: string;
    descriptions: string[];
    video?: string | null;
    link: string | null;
    github?: string | null;
    githubs?: { title: string, link: string }[];
    gif?: string;
    stacks: string[];
  };