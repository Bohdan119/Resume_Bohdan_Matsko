import css from '../Education/Education.module.css'

const Education = () => {
  return (
    <div className={`${css.education} container`}>
      <h2>EDUCATION</h2>
      <ul>
        <li>
          <h3>IT School GoIT</h3>
          <h4>Fullstack Developer</h4>
          <p>October 2022 - till today | Ukraine</p>
        </li>
        <li>
          <h3>Odesa National Academy of Food Technologies (ONAFT)</h3>
          <h4>Heat energy engineer</h4>
          <p>September 2013 - June 2017| Ukraine</p>
        </li>
      </ul>
    </div>
  );
}

export default Education
