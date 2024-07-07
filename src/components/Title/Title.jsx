import css from '../../components/Title/Title.module.css'

const Title = () => {
  return (
      <div className={css.title}>
      <h1 className={css.mainTitle}>BOHDAN MATSKO</h1>
      <h2 className={css.mainDirection}>
        Frontend Developer (junior) with great ambitions!
      </h2>
      <p className={css.mainAddress}>Poland, Krakow</p>
    </div>
  );
}

export default Title
