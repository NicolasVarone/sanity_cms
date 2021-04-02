import React from "react";

/* Images */
import GreenTrees from "../images/green_trees.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={GreenTrees}
        alt="Green trees"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-36 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Aloha. I'm Nicolas.
        </h1>
      </section>
    </main>
  );
};

export default Home;
