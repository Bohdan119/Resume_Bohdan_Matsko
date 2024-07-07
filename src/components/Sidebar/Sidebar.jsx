import myPhoto from "../../Img/main_photo.jpg";
import css from '../../components/Sidebar/Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <img src={myPhoto} alt="developer" className={css.sidebarPhoto}></img>
    </div>
  );
};

export default Sidebar;
