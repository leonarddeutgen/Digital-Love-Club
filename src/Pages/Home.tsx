import { Hero } from "../components/Hero";
import { Cards } from "../components/videoCards/Cards";

export const Home = () => {
  return (
    <>
      <article className="heroContainer">
        <Hero></Hero>
      </article>
      <section className="CardsContainer">
        <Cards></Cards>
      </section>
    </>
  );
};
