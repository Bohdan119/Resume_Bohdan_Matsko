import css from "../Skills/Skills.module.css"
const Skills = () => {
  return (
    <div className={css.skills}>
      <div className={css.techSkills}>
        <h2>TECH SKILLS</h2>
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
      <div className={css.softSkills}>
        <h2>SOFT SKILLS</h2>
        <ul>
          <li>Ambitious</li>
          <li>Creative</li>
          <li>Responsible</li>
          <li>Adaptability</li>
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>
      </div>
      <div>
        <h2>LANGUAGES</h2>
        <ul>
          <li>Ukrainian - Native spiker</li>
          <li>Polish - B2</li>
          <li>English - A2</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills
