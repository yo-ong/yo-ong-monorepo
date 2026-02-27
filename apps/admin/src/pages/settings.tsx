import { Button } from "@repo/ui";

const Settings = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <p className="text-gray-600">This route is handled by React Router.</p>
      <Button variant="secondary">Secondary Action</Button>
    </section>
  );
};

export default Settings;