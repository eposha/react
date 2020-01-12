import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';

const rootElement = document.querySelector('#root');

const element = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul class="list"></ul>
    </main>
  </>
)

ReactDOM.render(element, rootElement)

// const renderSeconds = (time) => {
//   const seconds = new Date(time).getSeconds();
//   const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
//   const textColor = seconds % 2 !== 0 ? '#fff' : '#000';

//   const styles = {
//     color: textColor,
//     backgroundColor
//   };

//   const element = (
//     <div className="seconds" style={styles}>Now is {seconds}</div>
//   );

//   ReactDOM.render(element, rootElement);
// }

// setInterval(() => renderSeconds(new Date()), 1000);
