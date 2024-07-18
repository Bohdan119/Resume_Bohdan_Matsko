import css from "../Skills/Skills.module.css"

const Skills = () => {
  return (
    <div className={css.skills}>
      <div className={`${css.techSkills} ${css.tabletContainer}`}>
        <h2 className={css.skillTitle}>TECH SKILLS</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>GitHub</li>
          <li>Redux</li>
          <li>Parcel</li>
          <li>REST API</li>
        </ul>
      </div>
      <div className={`${css.softSkills} ${css.tabletContainer}`}>
        <h2 className={css.skillTitle}>SOFT SKILLS</h2>
        <ul>
          <li>Ambitious</li>
          <li>Creative</li>
          <li>Responsible</li>
          <li>Adaptability</li>
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>
      </div>
      <div className={css.tabletContainer}>
        <h2 className={css.skillTitle}>LANGUAGES</h2>
        <ul>
          <li>English - Elementary</li>
          <li>Ukrainian - Native speaker</li>
          <li>Polish - Upper-Intermediate</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills
