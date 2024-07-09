import myPhoto from "../../Img/main-photo.jpg";
import css from '../../components/Sidebar/Sidebar.module.css'
import Contacts from "../Contacts/Contacts";
import Skills from "../Skills/Skills";

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <img src={myPhoto} alt="developer" className={css.sidebarPhoto}></img>
      <Contacts />
      <Skills/>
    </div>
  );
};

export default Sidebar;
