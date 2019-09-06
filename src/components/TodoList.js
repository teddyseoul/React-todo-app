import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

// todos 배열을 props로 받아 온 후,
// 이를 map()을 사용하여 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌.
const TodoList = ({ todos, onRemove, onToggle }) => {
  // App.js에서 todos배열 값 받아옴
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
    // todos 배열을 map()을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링
  );
};

export default TodoList;
