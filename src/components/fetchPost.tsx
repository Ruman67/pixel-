import { useState, useEffect } from 'react';
type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const FetchPost = () => {
const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => setData(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FetchPost;
