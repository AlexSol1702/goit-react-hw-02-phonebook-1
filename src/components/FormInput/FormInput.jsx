import { Component } from "react";

import styles from "./FormInput.module.css";

export class FormInput extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => this.setState({ name: "", number: "" });

  render() {
    const { name, number } = this.state;
    return (
      <>
        <h2 className={styles.title}>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <h3 className={styles.title}>Name</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={this.handleChange}
            required
          />
          <h3 className={styles.title}>Phone</h3>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            required
          />
          <button type="submit" className={styles.btnSubmit}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
