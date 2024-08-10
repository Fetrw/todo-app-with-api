import React from 'react';
import { Todo } from '../../types/Todo';
import cn from 'classnames';

type Props = {
  completedTask: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
  handleToggleAll: () => void;
  todoTitle: string;
  isLoading: boolean;
  todos: Todo[];
  inputRef: React.RefObject<HTMLInputElement>;
};

export const Header: React.FC<Props> = ({
  todos,
  handleChange,
  handleAddTodo,
  handleToggleAll,
  todoTitle,
  isLoading,
  inputRef,
  completedTask,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddTodo();
    }
  };

  return (
    <header className="todoapp__header">
      {!!todos.length && (
        <button
          type="button"
          className={cn('todoapp__toggle-all', { active: completedTask })}
          data-cy="ToggleAllButton"
          onClick={handleToggleAll}
        />
      )}
      <input
        data-cy="NewTodoField"
        type="text"
        name="title"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        value={todoTitle}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        ref={inputRef}
      />
    </header>
  );
};
