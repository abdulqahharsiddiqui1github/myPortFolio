import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div>
      <h3 className="text-4xl text-green-500 font-extrabold text-center border-b-4 w-44 mx-auto">
        my skills
      </h3>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default Skills;
