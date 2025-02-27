import React, { useMemo, JSX }  from 'react';
import Image from 'next/image';
import { type CompetenceType } from "@/types/types";
import styles from '../../styles/competences.module.css';


type Props = {
  competences: CompetenceType[];
};

const CompetencesStack = (props: Props): JSX.Element => {
  const { competences } = props;

  const competencesList = useMemo(() => {
    return competences.map((competence) => {
      if (competence.svg) {
        return (
          <div key={competence.name}>
            <div role="img" aria-label={competence.name} className=
            {styles.competenceLogoContainer}>
              {competence.svg}
            </div>
            <h4 className='text-zinc-100 font-semibold text-xl'>{competence.name}</h4>
          </div>
        );
      }

      return (
        <div key={competence.name}>
          <div className={styles.competenceLogoContainer}>
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
    <div>
      {competencesList}
    </div>
  );
};

export default CompetencesStack;