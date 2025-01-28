import TypewriterComponent from 'typewriter-effect'; // Ensure you have this installed

const TypeWriter = () => {
  return (
    <div className="flex lg:items-start lg:justify-start items-center justify-center">
      <div className="text-white mr-3">
        <h1>{"I'm"}</h1>
      </div>
      <div className="bg-gradient-to-l from-orange-700 to-orange-400 bg-clip-text text-transparent">
        <TypewriterComponent
          options={{
            strings: ["Irasema", "a Cutie"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>
    </div>
  );
};

export default TypeWriter;


