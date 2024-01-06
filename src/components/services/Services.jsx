import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="bg-gradient-to-b from-custom-start-color to-custom-end-color h-full flex flex-col justify-between">
      {/* text */}
      <motion.div className="flex-1 self-end flex md:items-center gap-20 text-center flex-col md:text-left md:flex-row  ">
        <p className="font-light text-[20px] text-gray-500 text-right">
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr className="w-[300px] border-none border-t-0.5 border-gray-500 md:w-[500px] " />
      </motion.div>
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
        <div className="">
          <h1 className="">
            <b className="">For Your </b> Business.
          </h1>
          <button className="">WHAT WE DO?</button>
        </div>
      </motion.div>
      {/* list */}
      <motion.div className="">
        <div className="">
          <h2 className="">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="">Go</button>
        </div>
        <div className="">
          <h2 className="">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="">Go</button>
        </div>
        <div className="">
          <h2 className="">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="">Go</button>
        </div>
        <div className="">
          <h2 className="">Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button className="">Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
