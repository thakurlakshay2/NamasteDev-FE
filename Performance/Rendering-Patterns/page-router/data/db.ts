// db.ts

export interface Tutorial {
  id: number;
  image: string;
  title: string;
  views: string;
  published: string;
}

export const tutorials: Tutorial[] = [
  {
    id: 1,
    image: "https://example.com/images/react-basics.jpg",
    title: "React Fundamentals for Beginners",
    views: "254K",
    published: "2 months ago",
  },
  {
    id: 2,
    image: "https://example.com/images/python-data-science.jpg",
    title: "Data Science with Python: Getting Started",
    views: "189K",
    published: "5 months ago",
  },
  {
    id: 3,
    image: "https://example.com/images/javascript-async.jpg",
    title: "Mastering Asynchronous JavaScript",
    views: "327K",
    published: "1 year ago",
  },
  {
    id: 4,
    image: "https://example.com/images/docker-containers.jpg",
    title: "Docker Containers Explained",
    views: "98K",
    published: "3 weeks ago",
  },
  {
    id: 5,
    image: "https://example.com/images/machine-learning-intro.jpg",
    title: "Introduction to Machine Learning Algorithms",
    views: "412K",
    published: "7 months ago",
  },
  {
    id: 6,
    image: "https://example.com/images/vue-components.jpg",
    title: "Building Reusable Vue.js Components",
    views: "76K",
    published: "4 months ago",
  },
  {
    id: 7,
    image: "https://example.com/images/nodejs-express.jpg",
    title: "Building RESTful APIs with Node.js and Express",
    views: "203K",
    published: "9 months ago",
  },
  {
    id: 8,
    image: "https://example.com/images/git-advanced.jpg",
    title: "Advanced Git Techniques for Developers",
    views: "145K",
    published: "6 months ago",
  },
  {
    id: 9,
    image: "https://example.com/images/flutter-mobile-dev.jpg",
    title: "Flutter: Cross-Platform Mobile Development",
    views: "287K",
    published: "11 months ago",
  },
  {
    id: 10,
    image: "https://example.com/images/aws-serverless.jpg",
    title: "Serverless Architecture with AWS Lambda",
    views: "167K",
    published: "8 months ago",
  },
];
