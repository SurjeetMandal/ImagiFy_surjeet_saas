import { assets, testimonialsData } from "../assets/assets"
import { motion } from "framer-motion"

const Testimonial = () => {
  return (
    <motion.div className="flex flex-col items-center justify-center my-20 py-12"
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Customer testimonial</h1>
      <p className="text-base text-gray-500 mb-8 md:mb-16">What our user are saying</p>

      <div className="flex flex-wrap gap-6">
        {
            testimonialsData.map((item, index) => (
                <div key={index} className="bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all">
                    <div className="flex flex-col items-center">
                        <img src={item.image} alt="" className="rounded-full w-14"/>
                        <h2 className="text-xl mt-3 font-semibold">{item.name}</h2>
                        <p className="text-gray-500 mb-4">{item.role}</p>
                        <div className="flex mb-4">
                            {Array(item.stars).fill().map((item, index) => (
                                <img key={index} src={assets.rating_star} alt="" />
                            ))}
                        </div>
                        <p className="text-center text-sm text-gray-600">{item.text}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </motion.div>
  )
}

export default Testimonial
