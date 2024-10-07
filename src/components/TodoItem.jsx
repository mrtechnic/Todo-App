import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    console.log("deleted item", item);
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleClick = (name) => {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  };
  const taskDone = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={taskDone} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
};

export default TodoItem;
