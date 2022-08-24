import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { Post } from './views/Post';
import { PostDetail } from './views/PostDetail';
import { Register } from './views/Register';
import { Todo } from './views/Todo';

function App() {
  return (
    <div className="App">
      <div className="nav-link">
        <NavLink to="/">
          <p>回到首頁</p>
        </NavLink>
        <NavLink to="/register">
          <p>註冊頁面</p>
        </NavLink>
        <NavLink to="/login">
          <p>登入頁面</p>
        </NavLink>
        <NavLink to="/todo">
          <p>Todo 頁面</p>
        </NavLink>
        <NavLink to="/post">
          <p>Post 頁面</p>
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/post" element={<Post />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
