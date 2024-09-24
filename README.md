# 📝 [Todo App with API](https://fetrw.github.io/todo-app-with-api/)

Welcome to the **Todo App with API**! This project is a simple yet powerful todo list application that interacts with an API to manage tasks. 🌟

## 🚀 Features

- **Add Tasks**: Easily add new tasks to your todo list.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Update Tasks**: Modify existing tasks to keep your list up-to-date.
- **Toggle Task Completion**: Mark tasks as completed or uncompleted.
- **Filter Tasks**: View all, active, or completed tasks with easy filtering.
- **Error Handling**: Proper error messages are shown to the user for actions like loading, adding, deleting, or updating tasks.
- **Animations**: Smooth animations for adding and removing tasks using `react-transition-group`.

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript for type safety.
- **API Integration**: Connects with a REST API for task management.
- **SCSS**: CSS with superpowers for styling.
- **React Transition Group**: Utilized for handling smooth transitions and animations when tasks are added or removed from the list.
- **React Hooks**: Used for managing component states and side effects, including `useEffect`, `useMemo`, `useState`, `useRef`, and `useCallback`.

## 🎯 Key Implementation Details

- **Error Handling**: The app includes robust error handling, displaying error messages if an API request fails (e.g., unable to load, add, delete, or update a todo). These errors are shown to the user and then automatically cleared after a short delay.
- **Animations**: The use of `CSSTransition` and `TransitionGroup` from `react-transition-group` ensures that adding or removing todos is accompanied by smooth and visually appealing animations.
- **Use of React Hooks**: Hooks like `useEffect` manage side effects, such as fetching todos from the API on component mount. `useCallback` is used to memoize functions and prevent unnecessary re-renders.

## 🧪Features

### 📋 Page with No Todos
- Sends a request to fetch todos.
- Includes `NewTodoField` for adding new todos.
- Displays appropriate UI elements, hiding unnecessary components like the footer.
- Properly handles loading errors, showing and automatically hiding error messages.

### 📋 Page with Mixed Todos
- Displays all loaded todos with correct titles, statuses, and delete buttons.
- Supports filtering todos and maintaining the state of active and completed tasks.
- Manages todos' counters and clear completed buttons accurately.

### 🛠️ Adding a Todo
- Handles input validation, including empty titles and whitespace-only titles, without sending unnecessary requests.
- Manages API requests, displaying temporary todos with loaders and updating the UI based on success or failure.
- Ensures smooth transitions and state updates, such as focusing the input field after adding a todo.

### ✏️ Individual Todo Deletion
- Handles deletion requests, displaying loaders, and managing todos based on API response.
- Adjusts the active todo count correctly and maintains UI consistency even after a failed deletion.

### ✏️ Group Todo Deletion
- Manages bulk deletion of completed todos, showing appropriate UI states and handling API errors gracefully.
- Ensures that the UI remains consistent, even after clearing all completed todos.

### 🔄 Todo Toggling
- Sends update requests when toggling todo status, handling loading states and UI updates on success or failure.
- Supports filtering, correctly updating the UI based on the current filter and toggled todo status.

### 🔘 Toggle All Button
- Manages the toggle all functionality, ensuring the button's visibility and state are consistent with the todos' statuses.
- Handles API requests for all todos, updating the UI based on the success or failure of the toggling action.

### 📝 Renaming Todos
- Supports editing todo titles with proper UI updates, including loading states, error handling, and preserving the current title if an update fails.
- Manages special cases like empty titles, sending delete requests, and ensuring the UI reflects the correct state.

#### This detailed test coverage ensures that the Todo App with API provides a seamless and reliable user experience.

### 🎥 Demo
- Check out the live demo: [Todo App with API Demo](https://fetrw.github.io/todo-app-with-api/)
