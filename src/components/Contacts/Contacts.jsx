import css from '../Contacts/Contacts.module.css'

const Contacts = () => {
  return (
    <div className={css.contacts}>
      <h2 className={css.contactsTitle}>CONTACT INFORMATION</h2>
      <ul className={css.contactsList}>
        <li className={css.contactsItem}>
          <a
            href="mailto:bohdanmatsko96@gmail.com"
            className={css.contactsLink}
          >
            <svg className={css.contactsIconPost}>
              <use xlinkHref="/icons/sprite.svg#icon-mail" />
            </svg>
            bohdanmatsko96@gmail.com{" "}
          </a>
        </li>

        <li className={css.contactsItem}>
          <a href="tel: +48883406977" className={css.contactsLink}>
            <svg className={css.contactsIconTel}>
              <use xlinkHref="/icons/sprite.svg#icon-phone" />
            </svg>
            +48 883 406 977
          </a>
        </li>
      </ul>

      <ul className={css.contactsSocial}>
        <li>
          <a href="https://www.linkedin.com/feed/">
            <svg className={css.contactsIcon}>
              <use xlinkHref="/icons/sprite.svg#icon-linkedin" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/Bohdan119">
            <svg className={css.contactsIcon}>
              <use xlinkHref="/icons/sprite.svg#icon-github" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <svg className={css.contactsIcon}>
              <use xlinkHref="/icons/sprite.svg#icon-facebook" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://t.me/bohdan_matsko">
            <svg className={css.contactsIcon}>
              <use xlinkHref="/icons/sprite.svg#icon-telegram" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/bohdan_matsko?igsh=MWx6dHYzbm04dGhuZg==">
            <svg className={css.contactsIcon}>
              <use xlinkHref="/icons/sprite.svg#icon-instagram" />
            </svg>
          </a>
        </li>
      </ul>
      <p className={css.contactAddress}>Crakow, Poland</p>
    </div>
  );
}

export default Contacts
