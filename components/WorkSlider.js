import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsArrowRight } from "react-icons/bs";

const slides = [
  {
    title: "Food Mania",
    path: "/thumb1.jpg",
    live: "https://food-mania24.netlify.app/",
    github: "https://github.com/arpitagrawal24/food-mania-project",
  },
  {
    title: "Search it",
    path: "/thumb2.jpg",
    live: "https://search-it24.netlify.app/",
    github: "https://github.com/arpitagrawal24/Search-it-frontend",
  },
  {
    title: "Keeper App",
    path: "/thumb3.jpg",
    live: "https://task-keeper24.netlify.app/",
    github: "https://github.com/arpitagrawal24/Keeper-project",
  },
  {
    title: "Beat Kit",
    path: "/thumb4.jpg",
    live: "https://beat-kit24.netlify.app/",
    github: "https://github.com/arpitagrawal24/Drum-Kit",
  },
  {
    title: "Dice Up",
    path: "/thumb2.jpg",
    live: "https://dice-up24.netlify.app",
    github: "https://github.com/arpitagrawal24/Dicee",
  },
];
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-[280px] md:h-[440px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-56 overflow-hidden rounded-lg md:h-96 duration-700 ease-in-out"
            data-carousel-item
          >
            {/* Image */}
            <div className="group relative h-full">
              <Image
                src={slide.path}
                layout="fill"
                objectFit="cover"
                alt={slide.title}
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 hover:a"></div>
              {/* Text  */}
              <div className="absolute bottom-0 left-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-2xl font-bold">{slide.title}</h3>
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">
                    <a href={slide.live}>LIVE</a>
                  </div>
                  <div className="translate-y-0 group-hover:translate-y-0 transition-all duration-300 delay-150">
                    <a href={slide.github}>PROJECTS</a>
                  </div>
                  <div className="text-xl translate-y-0 group-hover:translate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
