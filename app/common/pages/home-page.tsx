import React from "react";
import { Button } from "../components/ui/button";

const HomePage: React.FC = () => {
  return (
    <main className="container mx-auto text-center px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our App</h1>
      <p className="text-lg mb-8">
        Get started by exploring our features or sign in to your account.
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="default">Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </main>
  );
};

export default HomePage;
