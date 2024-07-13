import css from '../../components/Title/Title.module.css'


const Title = () => {
  return (
    <div className={`${css.title} container`}>
      <h1 className={css.mainTitle}>BOHDAN MATSKO</h1>
      <h2 className={css.mainDirection}>
        Frontend Developer (junior) with great ambitions!
      </h2>
        <hr className={ css.line} />
        <p className={css.mainParagraph}>
          Able to understand technologies from complex distillation column to
          complex code! I aspire to develop in the field of IT, at the same time
          I am studying English, and I am also continuing my studies at the GoIT
          school
        </p>
    </div>
  );
}

export default Title
