import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { TodoList } from "../TodoList";
import { ProjectManager } from "../ProjectManager";
import { User } from "../User";
import { Notes } from "../Notes";
import { Calendar } from "../Calendar";

export const RootPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/project-manager" element={<ProjectManager />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};
