import { Link, Route, Routes } from 'react-router-dom';
import { Button } from '@repo/ui';

const Home = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Admin Home</h2>
      <p className="text-gray-600">React Router DOM is wired up.</p>
      <Button>Primary Action</Button>
    </section>
  );
};

const Settings = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <p className="text-gray-600">This route is handled by React Router.</p>
      <Button variant="secondary">Secondary Action</Button>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-semibold">Admin App</h1>
          <nav className="flex gap-4 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link to="/settings" className="hover:text-gray-900">
              Settings
            </Link>
            fiber test
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
