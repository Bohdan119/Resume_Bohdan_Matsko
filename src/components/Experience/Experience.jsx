import css from "../../components/Experience/Experience.module.css";

const Experience = () => {
  return (
    <div className={`${css.experience} container`}>
      <h2>WORK EXPERIENCE</h2>
      <ul className={css.experienceList}>
        <li className={css.experienceList}>
          <h3>Courier/DPD Group</h3>
          <p className={css.experienceDescription}>
            December 2019 - to our time | Poland
          </p>
          <ul className={css.experienceListDuties}>
            <li>Sorting and stacking parcels by car</li>
            <li>Delivery and collection of parcels from and to the client</li>
            <li>Unloading parcels at the warehouse</li>
          </ul>
        </li>

        <li className={css.experienceList}>
          <h3>
            The second operator for the refining of edible oil/Delta Wilmar
          </h3>
          <p className={css.experienceDescription}>
            February 2018 - November 2019 | Ukraine
          </p>
          <ul className={css.experienceListDuties}>
            <li>Control of the refining column</li>
            <li>Maintenance of two complicated refining columns</li>
            <li>
              Collecting and sending the finished product to the laboratory{" "}
            </li>
            <li>Checking the condition and replacing oil filters</li>
          </ul>
        </li>

        <li className={css.experienceList}>
          <h3>Vulcanizer/Odesa Aviation Plant</h3>
          <p className={css.experienceDescription}>
            May 2016 - February 2018 | Ukraine
          </p>
          <ul className={css.experienceListDuties}>
            <li>Production of rubber products</li>
            <li>Control and maintenance of the press</li>
            <li>Control of finished products</li>
            <li>Preparation of raw material (rubber) for work</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Experience
