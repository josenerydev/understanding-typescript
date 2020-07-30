import React from 'react';

interface Props {
  items: {
    id: string;
    text: string;
  }[]
}

const TodoList: React.FC<Props> = props => {
  return (
    <ul>
      {props.items.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  );
};

export default TodoList;