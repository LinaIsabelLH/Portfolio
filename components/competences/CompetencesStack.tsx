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
          <div key={competence.name} className='flex flex-col justify-center items-center gap-4'>
            <div role="img" aria-label={competence.name} className="z-10 bg-gradient-to-r from-gray-800 to-gray-600 w-20 h-20 flex items-center justify-center rounded-full border-2 border-gray-800 drop-shadow-xl">
              {competence.svg}
            </div>
            <h4 className='text-zinc-100 font-semibold text-xl'>{competence.name}</h4>
          </div>
        );
      }

      return (
        <div key={competence.name} className='flex flex-col justify-center items-center gap-4'>
          <div className="z-10 bg-gradient-to-r from-gray-800 to-gray-600 w-20 h-20 flex items-center justify-center rounded-full border-2 border-gray-800 drop-shadow-xl">
            <Image
              width={100}
              height={100}
              src={competence.img ?? ''}
              alt={`Logo de ${competence.name}`}
              title={competence.name}
            />
          </div>
          <h4 className='text-zinc-100 font-semibold text-xl'>{competence.name}</h4>
        </div>
      );
    });
  }, [competences]);

  return (
    <div className='flex justify-center flex-wrap gap-y-8 gap-x-16 pt-[20px] pr-[30px] pl-[30px] pb-[30px]'>
      {competencesList}
    </div>
  );
};

export default CompetencesStack;