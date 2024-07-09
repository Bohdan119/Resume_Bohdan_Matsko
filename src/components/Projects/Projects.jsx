import css from "../Projects/Projects.module.css";

const Projects = () => {
  return (
    <div className={css.project}>
      <h2>PROJECT EXPERIENCE</h2>
      <ul className={css.projectsList}>
        <li className={css.projectsItem}>
          
          <a href="https://goit-markup-hw-08-one.vercel.app/">
            My project HTML......................[ HTML5, CSS3 ]
          </a>

          <a href="https://github.com/Bohdan119/goit-markup-hw-08">
            <svg className={css.projectIcon}>
              <use xlinkHref="/src/icons/sprite.svg#icon-github" />
            </svg>
          </a>

          <p>
            A team project in which I performed the Project section. I used
            JavaScript and the Swiper library to implement the project. The
            project was completed on time and accepted without amendments.
          </p>
        </li>

        <li className={css.projectsItem}>
          <a href="https://host9rror.github.io/projectJSBenders12/">
            My project JavaScript[ JavaScript ]
          </a>

          <a href="https://github.com/host9rror/projectJSBenders12.git">
            <svg className={css.projectIcon}>
              <use xlinkHref="/src/icons/sprite.svg#icon-github" />
            </svg>
          </a>

          <p>
            A team project in which I performed the Project section. I used
            JavaScript and the Swiper library to implement the project. The
            project was completed on time and accepted without amendments.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Projects
