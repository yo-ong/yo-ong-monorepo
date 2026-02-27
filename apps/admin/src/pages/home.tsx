import { Button } from '@repo/ui';
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Admin Home</h2>
      <p className="text-gray-600">React Router DOM is wired up.</p>
      <Button onClick={handleClick}>Primary Action</Button>
      <p>Count: {count}</p>
    </section>
  );
};

export default Home;
