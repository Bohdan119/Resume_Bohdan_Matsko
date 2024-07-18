import css from '../../components/Title/Title.module.css'
import myPhoto from "../../Img/main-photo-3.jpg";
import { useState, useEffect } from "react";

const Title = () => {

  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${css.title} container`}>
      <div className={css.titleTablet}>
        {isTablet && (
          <img src={myPhoto} alt="developer" className={css.mobilePhoto}></img>
        )}

        <div className={css.tabletTitlePresent}>
          <h1 className={css.mainTitle}>BOHDAN MATSKO</h1>
          <h2 className={css.mainDirection}>
            Frontend Developer (junior) with great ambitions!
          </h2>
        </div>
      </div>

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
