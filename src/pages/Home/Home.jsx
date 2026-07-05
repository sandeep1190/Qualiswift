import Hero from "../../components/sections/Hero/Hero";
import Challenges from "../../components/sections/Challenges/Challenges";
import Introducing from "../../components/sections/Introducing/Introducing";
import Platform from "../../components/sections/Platform/Platform";
import Capabilities from "../../components/sections/Capabilities/Capabilities";
import Outcomes from "../../components/sections/Outcomes/Outcomes";
import Industries from "../../components/sections/Industries/Industries";
import Assessment from "../../components/sections/Assessment/Assessment";
import Contact from "../../components/sections/Contact/Contact";

const Home = () => {
  return (
    <main className="pt-20">
      <Hero />
      <Challenges />
      <Introducing />
      <Platform />
      <Capabilities />
      <Outcomes />
      <Industries />
      <Assessment />
      <Contact />
    </main>
  );
};

export default Home;