import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { TodoList } from "../TodoList";
import { Schedule } from "../Schedule";
import { Chat } from "../Chat";
import { Group } from "../Group";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todolist" element={<TodoList />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/group" element={<Group />} />
    </Routes>
  );
};
