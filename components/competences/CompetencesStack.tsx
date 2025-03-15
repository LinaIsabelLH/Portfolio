import React, { useMemo, JSX }  from 'react';
import Image from 'next/image';
import { type CompetenceType } from "@/types/types";


type Props = {
  competences: CompetenceType[];
};

const CompetencesStack = (props: Props): JSX.Element => {
  const { competences } = props;

  const competencesList = useMemo(() => {
    return competences.map((competence) => {
      if (competence.svg) {
        return (
          <div key={competence.name} className='flex flex-col justify-center items-center gap-4 max-[768px]:gap-2  max-[768px]:px-2.5 max-[768px]:py-2.5'>
            <div role="img" aria-label={competence.name} className="z-10 bg-[radial-gradient(#1e293b,#52525b)] w-[85px] h-[85px] flex items-center justify-center rounded-full border-2 border-gray-800 drop-shadow-xl box-border max-[800px]:w-[50px] max-[800px]:h-[50px]">
              {competence.svg}
            </div>
            <h4 className='text-zinc-100 font-semibold text-xl max-[800px]:text-lg'>{competence.name}</h4>
          </div>
        );
      }

      return (
        <div key={competence.name} className='flex flex-col justify-center items-center gap-4 max-[768px]:gap-2 max-[768px]:px-2.5 max-[768px]:py-2.5'>
          <div className="z-10 bg-[radial-gradient(#1e293b,#52525b)] w-[85px] h-[85px] flex items-center justify-center rounded-full border-2 border-gray-800 drop-shadow-xl box-border max-[768px]:w-20 max-[768px]:h-20 max-[800px]:w-[50px] max-[800px]:h-[50px]">
            <Image
              width={100}
              height={100}
              src={competence.img ?? ''}
              alt={`Logo de ${competence.name}`}
              title={competence.name}
              className='h-2/3 w-2/3 object-contain'
            />
          </div>
          <h4 className='text-zinc-100 font-semibold text-xl max-[800px]:text-lg'>{competence.name}</h4>
        </div>
      );
    });
  }, [competences]);

  return (
    <div className='flex justify-center flex-wrap gap-y-8 gap-x-16 pt-[20px] pr-[30px] pl-[30px] pb-[30px] max-[970px]:gap-y-2 max-[970px]:gap-x-8 max-[800px]:p-3'>
      {competencesList}
    </div>
  );
};

export default CompetencesStack;