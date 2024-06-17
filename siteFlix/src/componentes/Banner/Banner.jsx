import { Carousel, IconButton } from "@material-tailwind/react";

function Banner(){
    return(
        <>
            <div class="w-full relative">
      <div class="swiper progress-slide-carousel swiper-container relative">
      <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
          <span class="text-3xl font-semibold text-indigo-600">Slide 1 </span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
          <span class="text-3xl font-semibold text-indigo-600">Slide 2 </span>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
          <span class="text-3xl font-semibold text-indigo-600">Slide 3 </span>
        </div>
      </div>
      </div>
      <div class="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
      </div>
      </div>
        </>
    )
}

export default Banner;