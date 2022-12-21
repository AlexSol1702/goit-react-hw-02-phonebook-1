import PropTypes from 'prop-types';

import styles from "../Contact/Contact.module.css";

export const Contact = ({contact: {name, number, id}, removeContact}) => {
  return (
    <li key={id} className={styles.item}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button className={styles.btnDelete} onClick={()=> removeContact(id)}>Delete</button>
    </li>
  )
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })
}

