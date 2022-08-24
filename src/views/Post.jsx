import { NavLink, Outlet } from 'react-router-dom';

export const Post = () => {
  const datas = [
    {
      postId: 'aaa',
    },
    {
      postId: 'bbb',
    },
    {
      postId: 'ccc',
    },
  ];
  return (
    <>
      <p>這是 Post 頁面</p>
      <ul>
        {datas.map((data) => {
          return (
            <li key={data.postId}>
              <NavLink to={`/post/${data.postId}`}>{data.postId}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
