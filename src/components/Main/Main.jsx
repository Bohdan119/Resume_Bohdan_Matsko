import Title from "../Title/Title"
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience"
import Education from "../Education/Education";

import css from '../../components/Main/Main.module.css'

const Main = () => {
  return (
    <div className={css.main}>
          <Title />
          <hr/>
          <Projects />
          <hr />
      <Experience />
      <hr />
      <Education/>
    </div>
  );
}

export default Main
