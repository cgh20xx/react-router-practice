import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate('/login');
  }
  return <button onClick={clickHandler}>登出</button>;
};
