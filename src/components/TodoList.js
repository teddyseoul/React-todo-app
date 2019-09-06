import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// App.js에서 todos배열 값 받아옴
const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem toto={todo} key={todo.id} />
      ))}
    </div>
    // todos 배열을 map()을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링
  );
};

export default TodoList;
