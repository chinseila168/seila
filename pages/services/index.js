//components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Circles';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Services = () => {
  return <div className='h-full bg-primary/30 py-36 flex items-center'>
    <Circles />
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4
        xl:mb-0'>
        <motion.h2 
          variants={fadeIn('up', 0.2)} 
          initial="hidden"
          animate="show" 
          exit='hidden'
          className='h2 xl:mt-8'
        >
          My Services <span className='text-accent'>.</span>
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)} 
          initial="hidden"
          animate="show" 
          exit='hidden' 
          className='mb-4 max-w-[400px] mx-auto lg:mx-0'
          >
            As a dedicated business analyst, I specialize in bridging the gap between business objectives and IT solutions. 
          With a keen eye for detail and a deep understanding of business processes, I excel at gathering requirements, 
          analyzing data, and translating insights into actionable strategies.
        </motion.p>
        </div>
        {/* slider */}
        <motion.div 
          variants={fadeIn('up', 0.6)} 
          initial="hidden"
          animate="show" 
          exit='hidden' 
          className='w-full xl:max-w-[65%]'
        > 
        <ServiceSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Services;