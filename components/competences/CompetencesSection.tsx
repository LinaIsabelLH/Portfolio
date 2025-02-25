// import React from "react";
// import { frontCompetences, backCompetences, technoCompetences, toolsCompetences } from "../data/CompetencesData";
// import CompetencesStack from './CompetencesStack';
// import styles from '../../styles/competences.module.css';

// const Competences = () => {
//   return (
//     <div className={styles.competencesArea} id="competencesArea">
//       <div className="separationEnsemble">
//         <div className="separationbar" />
//         <h2>Compétences</h2>
//         <div className="separationbar" />
//       </div>

//       <div className={styles.competencesContainer}>
//         <div
//           className={styles.apparitionContainer}
//           data-aos="fade-up"
//           data-aos-offset="100"
//           data-aos-anchor-placement="top-bottom"
//           data-aos-duration="500"
//           data-aos-easing="ease-in-out"
//         >
//           <div className={styles.individualCompetenceBlock}>
//             <h3 className={styles.ensembleCompetencesTitle}>Front End</h3>
//             <CompetencesStack competences={frontCompetences} />
//           </div>
//         </div>

//         <div
//           className={styles.apparitionContainer}
//           data-aos="fade-up"
//           data-aos-anchor-placement="top-bottom"
//           data-aos-offset="150"
//           data-aos-duration="500"
//           data-aos-easing="ease-in-out"
//         >
//           <div
//             className={animationsStyles.sectionsLineConnection}
//             data-aos="lineGrowing"
//             data-aos-offset="150"
//             data-aos-delay="500"
//             data-aos-duration="1000"
//           />
//           <div className={competencesStyles.individualCompetenceBlock}>
//             <h3 className={competencesStyles.ensembleCompetencesTitle}>Back End</h3>
//             <CompetencesStack competences={backCompetences} />
//           </div>
//         </div>

//         <div
//           className={competencesStyles.apparitionContainer}
//           data-aos="fade-up"
//           data-aos-anchor-placement="top-bottom"
//           data-aos-offset="150"
//           data-aos-duration="500"
//           data-aos-easing="ease-in-out"
//         >
//           <div
//             className={animationsStyles.sectionsLineConnection}
//             data-aos="lineGrowing"
//             data-aos-offset="150"
//             data-aos-delay="500"
//             data-aos-duration="1000"
//           />
//           <div className={competencesStyles.individualCompetenceBlock}>
//             <h3 className={competencesStyles.ensembleCompetencesTitle}>
//               Les technos que j&apos;ai travaillé
//             </h3>
//             <CompetencesStack competences={technoCompetences} />
//           </div>
//         </div>

//         <div
//           className={competencesStyles.apparitionContainer}
//           data-aos="fade-up"
//           data-aos-anchor-placement="top-bottom"
//           data-aos-offset="150"
//           data-aos-duration="500"
//           data-aos-easing="ease-in-out"
//         >
//           <div
//             className={animationsStyles.sectionsLineConnection}
//             data-aos="lineGrowing"
//             data-aos-offset="150"
//             data-aos-delay="500"
//             data-aos-duration="1000"
//           />
//           <div className={competencesStyles.individualCompetenceBlock}>
//             <h3 className={competencesStyles.ensembleCompetencesTitle}>
//               Les outils que j&apos;utilise
//             </h3>
//             <CompetencesStack competences={toolsCompetences} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Competences;