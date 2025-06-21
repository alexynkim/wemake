import { Link } from "react-router";
import React from "react";

import { Button } from "~/common/components/ui/button";

import { ProductCard } from "~/features/products/components/product-card";
import { PostCard } from "~/features/community/components/post-card";
import { IdeaCard } from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";

import type { Route } from "./+types/home-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Home:WeMake" },
    { name: "description", content: "Welcome to WeMake" },
  ];
};

const HomePage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-4xl font-bold mb-2 leading-tight tracking-tight">
            Today's products
          </h2>
          <p className="text-xl font-light text-foreground/80">
            Discover amazing products created by talented makers in our
            community.
          </p>
          <Button variant="link" className="text-lg p-0">
            <Link to="products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>
            <ProductCard
              id={`${index}`}
              name={`Product ${index}`}
              description="Product description"
              commentCount={12}
              viewCount={12}
              upvoteCount={120}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-20">
        <div>
          <h2 className="text-4xl font-bold mb-2 leading-tight tracking-tight">
            Latest discussions
          </h2>
          <p className="text-xl font-light text-foreground/80">
            The latest discussions from our community.
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="community/posts">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>
            <PostCard
              id={`postId-${index}`}
              title="What is the best productivity tool?"
              author="Alex"
              authorAvatarUrl="https://github.com/apple.png"
              category="Productivity"
              postedAt="12 hours ago"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-20">
        <div>
          <h2 className="text-4xl font-bold mb-2 leading-tight tracking-tight">
            IdeaGPT
          </h2>
          <p className="text-xl font-light text-foreground/80">
            Find ideas for your next project.
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>
            <IdeaCard
              id={`ideaId-${index}`}
              title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and progress tracking using a mobile app to track workouts and progress as well as a website to manage the business."
              viewCount={123}
              likeCount={123}
              postedAt="12 hour ago"
              claimed={index % 2 === 0}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 mt-20">
        <div>
          <h2 className="text-4xl font-bold mb-2 leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-foreground/80">
            Find your dream job
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index}>
            <JobCard
              id={`jobId-${index}`}
              title="Software Engineer"
              companyName="Tesla"
              companyLogoUrl="https://github.com/facebook.png"
              postedAt="12 hours ago"
              type="Full-Time"
              location="San Francisco, US"
              isRemote={true}
              salary="$100,000-$120,000"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 mt-20">
        <div>
          <h2 className="text-4xl font-bold mb-2 leading-tight tracking-tight">
            Find team mate
          </h2>
          <p className="text-xl font-light text-foreground/80">
            Join a team looking for a new member
          </p>
          <Button variant="link" className="text-lg p-0" asChild>
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index}>
            <TeamCard
              id={`teamId-${index}`}
              leaderUsername="alex"
              leaderUserAvatarUrl="https://github.com/alexynkim.png"
              projectDescription="a new social media platform"
              roles={[
                "React Developer",
                "Backend Developer",
                "Product Manager",
              ]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
