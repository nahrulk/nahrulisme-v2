import { brandList, testimonialList } from "@/constant/listData";
import { AppWrap, MotionWrap } from "@/wrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonialList.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <Image
              src={testimonialList[currentIndex].imgurl}
              alt={testimonialList[currentIndex].name}
              width={500}
              height={500}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonialList[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">
                  {testimonialList[currentIndex].name}
                </h4>
                <h5 className="p-text">
                  {testimonialList[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonialList.length - 1
                    : currentIndex - 1
                )
              }
            >
              <ChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonialList.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <ChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brandList.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <Image
              src={brand.imgUrl}
              alt={brand.name}
              width={500}
              height={500}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial app__flex"),
  "testimonial",
  "app__primarybg"
);
