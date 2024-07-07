import css from '../../components/Projects/Projects.module.css'

const Projects = () => {
  return (
    <div className={css.project}>
      <h2>Projects</h2>
      <ul className={css.projectsList}>
        <li className={css.projectsItem}>
          <a href="https://bohdan119.github.io/goit-markup-hw-08/ ">
            My project HTML......................[ HTML5, CSS3 ]
          </a>
        </li>
        <li className={css.projectsItem}>
          <a href="https://host9rror.github.io/projectJSBenders12/">
            My project JavaScript............ [ JavaScript ]
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Projects
