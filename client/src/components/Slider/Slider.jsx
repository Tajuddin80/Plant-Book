import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, Outlet } from "react-router";

function Slider() {
  const swiperRef = useRef(null);

  const slides = [
    {
      title: "Urban Gardening Meetup",
      description:
        "Join fellow plant lovers for a hands-on workshop on balcony and container gardening.",
      image: "https://i.ibb.co/RG87qpm4/slider-3.png",
      date: "2025-06-15",
    },
    {
      title: "Composting 101: From Waste to Wealth",
      description:
        "Learn the art of composting at home and reduce your carbon footprint while enriching your garden soil.",
      image: "https://i.ibb.co/zhcZSrVD/slider-2.png",
      date: "2025-06-22",
    },
    {
      title: "Hydroponics for Beginners",
      description:
        "Discover how to grow fresh herbs and veggies without soil — perfect for small spaces and curious minds.",
      image: "https://i.ibb.co/hR6fTNwf/slider-1.png",
      date: "2025-07-01",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 text-base-content mb-10 h-[70vh] rounded-2xl shadow-xl border border-base-300 transition-all overflow-hidden">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full max-w-6xl mx-auto px-5 md:px-10 py-4">
                <div className="order-1 md:order-2 flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-[180px] md:h-[320px] lg:h-[400px] object-contain w-auto drop-shadow-md"
                  />
                </div>
                <div className="order-2 md:order-1 text-center md:text-left space-y-2">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base">{slide.description}</p>
                  <p className="font-medium text-base md:text-lg text-green-600">
                    {slide.date}
                  </p>
                  <Link to="/browsetips" className="btn btn-primary mt-2">
                    Explore Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Content below slider */}
      <div className="w-[90%] mx-auto mt-10">
        <Outlet />
      </div>
    </>
  );
}

export default Slider;
