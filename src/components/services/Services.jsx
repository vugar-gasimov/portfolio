import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="bg-gradient-to-b from-custom-start-color to-custom-end-color  h-full flex flex-col justify-between">
      {/* text */}
      <motion.div className="flex-1 self-end flex items-center gap-20 justify-between "></motion.div>
      <p className="font-light text-[20px] text-gray-500 text-right">
        I focus on helping your brand grow <br /> and move forward
      </p>
      <hr className="w-300 border-none border-t-0.5 border-gray-500 md:w-500 " />
      {/* title */}
      <motion.div className="flex-2  flex flex-col items-center w-full md:w-auto ">
        <div className="flex items-center gap-[50px]">
          <img
            className="w-[300px] h-[100px] rounded-full object-cover"
            src="/people.webp"
            alt="Team working together."
          />
          <h1 className="text-[36px] font-thin md:text-[96px]">
            <b className="font-bold">Unique </b> Ideas
          </h1>
        </div>
        <div className="flex items-center gap-[50px]">
          <h1 className="text-[36px] font-thin md:text-[96px]">
            <b className="font-bold">For Your </b> Business.
          </h1>
          <button className="w-[150px] h-[50px] rounded-full bg-orange-500  border-none text-[16px] cursor-pointer md:text-[24px] md:w-[300px] md:h-[100px]">
            WHAT WE DO?
          </button>
        </div>
      </motion.div>
      {/* list */}
      <motion.div className="flex-2 flex w-full mx-auto flex-col md:flex-row md:max-w-[1366px]">
        <div className="p-[50px] border border-gray-300 rounded-md flex flex-col justify-between">
          <h2 className="font-bold text-xl">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="p-[10px] bg-orange-500 border-none cursor-pointer rounded-md">
            Go
          </button>
        </div>
        <div className="p-[50px] border border-gray-300 rounded-md flex flex-col justify-between">
          <h2 className="font-bold text-xl">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="p-[10px] bg-orange-500 border-none cursor-pointer rounded-md">
            Go
          </button>
        </div>
        <div className="p-[50px] border border-gray-300 rounded-md flex flex-col justify-between">
          <h2 className="font-bold text-xl">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="p-[10px] bg-orange-500 border-none cursor-pointer rounded-md">
            Go
          </button>
        </div>
        <div className="p-[50px] border border-gray-300 rounded-md flex flex-col justify-between">
          <h2 className="font-bold text-xl">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="p-[10px] bg-orange-500 border-none cursor-pointer rounded-md">
            Go
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
