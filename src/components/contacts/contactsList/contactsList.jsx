import { ContactsListItem } from '../contactsListItem/contactsListItem';
import css from '../contactsList/contactsList.module.css';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'components/Redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(filteredContacts);
  return (
    <ul className={css.contacts__box}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => {
          return (
            <ContactsListItem key={id} name={name} number={number} id={id} />
          );
        })
      ) : (
        <p>We don't find this contact</p>
      )}
    </ul>
  );
};