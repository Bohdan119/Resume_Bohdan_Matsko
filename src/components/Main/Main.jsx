import Title from "../Title/Title"
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience"

import css from '../../components/Main/Main.module.css'

const Main = () => {
  return (
    <div className={css.main}>
          <Title />
          <hr/>
          <Projects />
          <hr />
          <Experience/>
    </div>
  );
}

export default Main
