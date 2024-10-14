"use-cient";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Tutorial {
  id: number;
  image: string;
  title: string;
  views: string;
  published: string;
}

interface TutorialsProps {
  tutorials: Tutorial[];
}

const Tutorials: React.FC<TutorialsProps> = ({ tutorials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tutorials.map((tutorial) => (
        <div key={tutorial.id}>
          <div className="relative h-48">
            <Image
              width={200}
              height={200}
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {tutorial.title}
            </h2>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{tutorial.views} views</span>
              <span>{tutorial.published}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch("http://localhost:4000/tutorials");
        if (!response.ok) {
          throw new Error("Failed to fetch tutorials");
        }
        const data = await response.json();
        setTutorials(data);
        setLoading(false);
      } catch (err: unknown) {
        setError("An error occurred while fetching tutorials " + err);
        setLoading(false);
      }
    };

    fetchTutorials();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Coding Tutorials</h1>
      <Tutorials tutorials={tutorials} />
    </div>
  );
};

export default Home;
