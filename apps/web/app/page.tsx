import { Button } from '@repo/ui';

const HomePage = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-6 py-12">
      <h1 className="text-3xl font-semibold">Web App</h1>
      <p className="text-gray-600">
        Next.js app in pnpm workspace. Shared UI and utils packages.
      </p>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </main>
  );
};

export default HomePage;
