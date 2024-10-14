"use-client";

import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";

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

interface HomeProps {
  tutorials: Tutorial[];
}

const Home: React.FC<HomeProps> = ({ tutorials }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Coding Tutorials</h1>
      <Tutorials tutorials={tutorials} />
    </div>
  );
};

// Fetching data at build time
export const getStaticProps: GetStaticProps = async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000)); // This is to add artifical delay , and see what happens to initial response from server
    const response = await fetch("http://localhost:4000/tutorials");
    if (!response.ok) {
      throw new Error("Failed to fetch tutorials");
    }
    const tutorials = await response.json();
    return {
      props: {
        tutorials,
      },
      // Revalidate every 10 seconds
      revalidate: 10,
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        tutorials: [],
      },
      revalidate: 10,
    };
  }
};

export default Home;
