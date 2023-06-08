import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { supabase } from '../../lib/initSupabase';
import supabaseSWRWrapper from '../../lib/supabaseSWRWrapper';
import type { Todo2 } from '../../types/data';
import TodoComponent from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState<Todo2[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>('');
  const [errorText, setError] = useState<string>('');

  const {
    data: todosInit,
    error: errorInit,
    isLoading,
  } = useSWR(
    'todos2',
    supabaseSWRWrapper(async () =>
      supabase.from('todos2').select('*').order('id', { ascending: false }),
    ),
  );

  useEffect(() => {
    if (todosInit) {
      setTodos(todosInit);
      console.log({ todosInit });
    }
  }, [todosInit]);

  const addTodo = async (taskText: string) => {
    const task = taskText.trim();

    if (task.length > 3) {
      const { data: todo, error } = await supabase
        .from('todos2')
        .insert({ task })
        .select()
        .single();

      console.log('addTodo', { todo, error });

      if (error) {
        setError(error.message);

        return;
      }

      if (!todo) {
        return;
      }

      const newTodos = [todo, ...todos];

      setTodos(newTodos);
      setNewTaskText('');
    }
  };

  const onDelete = async (id: number) => {
    try {
      await supabase.from('todos2').delete().eq('id', id);
      setTodos(todos.filter((item) => item.id !== id));
    } catch (error) {
      console.log('error', error);
    }
  };

  const onToggle = async (id: number) => {
    try {
      const todo = todos.find((item) => item.id === id);
      const isCompletedNew = !todo?.is_complete;

      if (!todo) {
        return;
      }

      const { data, error } = await supabase
        .from('todos2')
        .update({ is_complete: isCompletedNew })
        .eq('id', id)
        .select()
        .single();

      console.log('onToggle', { data, error });

      if (error) {
        throw new Error(error.message);
      }
      setTodos((prev) =>
        prev.map((item) => {
          if (id !== item.id) {
            return item;
          }

          return {
            ...item,
            is_complete: isCompletedNew,
          };
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
  };

  if (errorInit) {
    return (
      <>
        <h1>Todos</h1>
        <p>failed to load</p>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <h1>Todos</h1>
        <p>loading…</p>
      </>
    );
  }

  return (
    <>
      <h1>Todos</h1>
      <div className="flex gap-2 my-2">
        <input
          className="rounded w-full p-2"
          maxLength={100}
          minLength={4}
          onChange={(event) => {
            setError('');
            setNewTaskText(event.target.value);
          }}
          required
          type="text"
          value={newTaskText}
        />
        <button onClick={() => addTodo(newTaskText)} type="button">
          Add
        </button>
      </div>
      {!!errorText && errorText}
      {todos
        .filter((item) => item?.id)
        .map((todo) => (
          <TodoComponent
            key={todo.id}
            onDelete={() => onDelete(todo.id)}
            onToggle={() => onToggle(todo.id)}
            todo={todo}
          />
        ))}
    </>
  );
};

export default Todos;
