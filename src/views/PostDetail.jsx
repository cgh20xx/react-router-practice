import { useParams } from 'react-router-dom';

export const PostDetail = () => {
  const params = useParams();
  return (
    <>
      <p>這是 PostDetail 頁面</p>
      <p>postId: {params.postId}</p>
    </>
  );
};
