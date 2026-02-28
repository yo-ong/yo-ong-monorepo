import { Button, Card } from '@repo/ui';
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Admin Home</h2>
      <p className="text-gray-600">React Router DOM is wired up.</p>
      <Button onClick={handleClick}>Primary Action</Button>
      <p>Count: {count}</p>
      <section className="grid grid-cols-3 gap-4">
        <Card title="Card 1" description="This is a card" />
        <Card title="Card 2" description="This is a card" />
        <Card title="Card 3" description="This is a card" />
      </section>
    </section>
  );
};

export default Home;
