import css from '../Contacts/Contacts.module.css'

const Contacts = () => {
  return (
    <div className={css.contacts}>
      <h2>CONTACT INFORMATION</h2>
      <ul className={css.contactsList}>
        <li className={css.contactsItem}>
          <p>
            <a href="mailto:bohdanmatsko96@gmail.com">
              <svg className={css.contactsIcon}>
                <use xlinkHref="/icons/sprite.svg#icon-mail" />
              </svg>
              bohdanmatsko96@gmail.com{" "}
            </a>
          </p>
        </li>

        <li className={css.contactsItem}>
          <p>
            <a href="tel: +48883406977">
              <svg className={css.contactsIcon}>
                <use xlinkHref="/icons/sprite.svg#icon-phone" />
              </svg>
              +48 883 406 977
            </a>
          </p>
        </li>
      </ul>
      <ul></ul>

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
      <p className={css.contactAddress}>Krakow, Poland</p>
    </div>
  );
}

export default Contacts
