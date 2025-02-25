export type CompetenceType = {
    img?: string;
    name: string;
    svg?: React.ReactNode; 
  };
  
  export type ArrayElementType<T> = T extends (infer U)[] ? U : never;
  
  export type ProjectType = {
    title: string;
    img: string;
    imgTag: string;
    descriptions: string[];
    link: string | null;
    github?: string;
    githubs?: { title: string, link: string }[];
    gif?: string;
    stacks: string[];
  };