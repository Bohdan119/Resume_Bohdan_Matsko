import css from "../../components/Experience/Experience.module.css";

const Experience = () => {
  return (
    <div className={`${css.experience}${css.container}`}>
      <ul>
        <li>Courier DPD Group</li>
        <li>Refining apparatus Delta Wilmar</li>
        <li>Vulcanizer Odesa Aviation Plant</li>
      </ul>
    </div>
  );
}

export default Experience
