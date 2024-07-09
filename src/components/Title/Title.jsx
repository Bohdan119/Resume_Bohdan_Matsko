import css from '../../components/Title/Title.module.css'

const Title = () => {
  return (
    <div className={css.title}>
      <h1 className={css.mainTitle}>BOHDAN MATSKO</h1>
      <h2 className={css.mainDirection}>
        Frontend Developer (junior) with great ambitions!
        <br />
        <span className={css.mainParagraph}>
          Able to understand technologies from complex distillation column to
          complex code!I aspire to develop in the field of IT, at the same time 
           I am studying English, and I am also continuing my studies at the GoIT
          school
        </span>
      </h2>
    </div>
  );
}

export default Title
