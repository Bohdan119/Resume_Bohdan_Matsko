import Title from "../Title/Title"
import Projects from "../Projects/Projects";
import css from '../../components/Main/Main.module.css'

const Main = () => {
  return (
    <div className={css.main}>
          <Title />
          <hr/>
          <Projects/>
    </div>
  );
}

export default Main
