import css from "../Projects/Projects.module.css";

const Projects = () => {
  return (
    <div className={`${css.project} container`}>
      <h2 className={css.projectTitle}>PROJECT EXPERIENCE</h2>
      <ul className={css.projectsList}>
        <li className={css.projectsItem}>
          <a href="https://host9rror.github.io/projectJSBenders12/">
            Resume...................................
          </a>

          <a href="https://github.com/host9rror/projectJSBenders12.git">
            <svg className={css.projectIcon}>
              <use xlinkHref="/icons/sprite.svg#icon-github" />
            </svg>
          </a>
          <p>
            A team project in which I performed the Project section. I used
            JavaScript and the Swiper library to implement the project. The
            project was completed on time and accepted without amendments.
          </p>
        </li>

        <li className={css.projectsItem}>
          <a href="https://goit-markup-hw-08-one.vercel.app/">
            WebStudio..............................
          </a>

          <a href="https://github.com/Bohdan119/goit-markup-hw-08">
            <svg className={css.projectIcon}>
              <use xlinkHref="/icons/sprite.svg#icon-github" />
            </svg>
          </a>

          <p>
            The project is based on HTML and CSS, SASS. The entire scope of work
            is done by me.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Projects
