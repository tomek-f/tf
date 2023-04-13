import type { Todo2 } from '../../types/data';

interface Props {
  onDelete: () => void;
  onToggle: () => void;
  todo: Todo2;
}

const Todo = ({ onDelete, onToggle, todo }: Props) => {
  return (
    <div>
      <div>{todo.id}</div>
      <div>{todo.task}</div>
      <div>{todo.is_complete}</div>
      <div>
        {todo.inserted_at} - {new Date(todo.inserted_at).toISOString()}
      </div>
      <div>
        <input
          checked={todo.is_complete}
          className="cursor-pointer"
          onChange={onToggle}
          type="checkbox"
        />
      </div>
      <button onClick={onDelete} type="button">
        Delete
      </button>
    </div>
  );
};

export default Todo;
