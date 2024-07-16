import css from '../../components/Title/Title.module.css'


const Title = () => {
  return (
    <div className={`${css.title} container`}>
      <h1 className={css.mainTitle}>BOHDAN MATSKO</h1>
      <h2 className={css.mainDirection}>
        Frontend Developer (junior) with great ambitions!
      </h2>
      <hr className={css.line} />
      <span className={css.mainParagraph}>
        As a passionate and driven Junior Front-End Developer, I thrive on
        solving complex challenges and pushing the boundaries of web
        development. With a keen eye for detail and a strong commitment to
        delivering high-quality, user-friendly applications, I excel in
        fast-paced environments. My excellent communication skills and
        collaborative spirit make me a valuable team player, ready to contribute
        fresh ideas and innovative solutions. Let's build the future of the web
        together!
      </span>
    </div>
  );
}

export default Title
