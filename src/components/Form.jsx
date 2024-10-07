import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter Todo Item"
        ></input>
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
