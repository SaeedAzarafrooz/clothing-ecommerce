import { useRef } from "react";
import ArrowIcon from '../assets/arrow-down-icon.svg'
import ArrowIconHover from '../assets/arrow-down-icon-hover.svg'
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import { BiTimeFive } from "react-icons/bi";
// import { HiOutlineArchiveBox } from "react-icons/hi2"; // آیکون برای جعبه (یا عکس بذارید)

const products = [
  {
    id: 1,
    title: "گوشی موبایل سامسونگ Galaxy S24 Ultra",
    image: "https://dkstatics-public.digikala.com/digikala-products/78455854b73b5c2196022646c192661858c16053_1706364379.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    price: "65,000,000",
    oldPrice: "72,000,000",
    discount: "10%",
  },
  {
    id: 2,
    title: "هدفون بلوتوثی کیو سی وای مدل T13",
    image: "https://dkstatics-public.digikala.com/digikala-products/0e326c7104886cc8458739d48b11eb0c897f2258_1656422847.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    price: "750,000",
    oldPrice: "1,200,000",
    discount: "38%",
  },
  {
    id: 3,
    title: "ساعت هوشمند اپل واچ سری 9",
    image: "https://dkstatics-public.digikala.com/digikala-products/1126780789704e933682fd4710db4707168c4a5c_1695125368.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    price: "18,400,000",
    oldPrice: "21,000,000",
    discount: "12%",
  },
  {
    id: 4,
    title: "کنسول بازی سونی مدل PlayStation 5",
    image: "https://dkstatics-public.digikala.com/digikala-products/f0e6e91129bc892d5398d5a8df2d2d6c13876d75_1638686175.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
    price: "24,500,000",
    oldPrice: "26,000,000",
    discount: "5%",
  },
  {
    id: 5,
    title: "لپ تاپ 15.6 اینچی ایسوس",
    image: "https://dkstatics-public.digikala.com/digikala-products/123123.jpg", // لینک نمونه
    price: "35,000,000",
    oldPrice: "38,000,000",
    discount: "8%",
  },
  {
    id: 6,
    title: "هندزفری بلوتوثی سامسونگ",
    image: "https://dkstatics-public.digikala.com/digikala-products/buds2.jpg", // لینک نمونه
    price: "4,200,000",
    oldPrice: "5,000,000",
    discount: "15%",
  },
];

const Carousel = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      // مقدار اسکرول: اندازه عرض هر کارت + فاصله (gap)
      const scrollAmount = 260; // عرض کارت (حدودی)

      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 py-10" dir="rtl">

      {/* Main Container (Red Box) */}
      <div className="bg-[#ef394e] p-4 rounded-3xl flex gap-1 w-full max-w-[1300px] h-[360px]">

        {/* Right Side: Amazing Offer Info (Fixed) */}
        <div className="w-[180px] flex flex-col items-center justify-center text-white shrink-0 gap-4">
          {/* Box Image PlaceHolder */}
          <div className="w-24 h-24 flex items-center justify-center">
            <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="box" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-xl font-black text-center">
            پیشنهاد<br />شگفت‌انگیز
          </h2>

          <div className="bg-white/20 rounded-full px-3 py-1 flex items-center gap-1 text-sm">
            <span>12:05:40</span>
            BiTimeFive
          </div>

          <a href="#" className="text-sm flex items-center gap-1 mt-4 hover:bg-white/10 px-3 py-1 rounded-lg transition">
            مشاهده همه Left
          </a>
        </div>

        {/* Left Side: Scrollable Carousel */}
        <div className="relative flex-1 overflow-hidden rounded-l-2xl">

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("right")}
            className="group absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-500 p-2 rounded-full shadow-md hover:bg-gray-100 transition-all disabled:opacity-50"
          >
            <div className=" relative w-7 h-7 flex-shrink-0">
              <img
                src={ArrowIcon}
                alt="shop"
                className="-rotate-90 absolute inset-0 w-7 h-7 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none"
              />

              <img
                src={ArrowIconHover}
                alt="shop-hover"
                className="-rotate-90 absolute inset-0 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
              />
            </div>
          </button>

          <button
            onClick={() => scroll("left")}
            className="group absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-gray-500 p-2 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            <div className=" relative w-7 h-7 flex-shrink-0">
              <img
                src={ArrowIcon}
                alt="shop"
                className="rotate-90 absolute inset-0 w-7 h-7 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none"
              />

              <img
                src={ArrowIconHover}
                alt="shop-hover"
                className="rotate-90 absolute inset-0 w-7 h-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
              />
            </div>
          </button>

          {/* Scroll Container */}
          <div
            ref={sliderRef}
            className="flex items-center gap-[2px] w-full h-full overflow-x-auto scroll-smooth no-scrollbar"
          // کلاس no-scrollbar برای مخفی کردن اسکرول‌بار (پایین توضیح دادم)
          >

            {/* Product Cards */}
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white min-w-[260px] max-w-[260px] h-full flex flex-col items-center justify-between p-4 first:rounded-r-2xl last:rounded-l-2xl cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="w-full h-[150px] flex items-center justify-center mb-2">
                  <img src={product.image} alt={product.title} className="max-h-full object-contain" />
                </div>

                {/* Title */}
                <h3 className="text-xs font-bold text-gray-700 leading-6 line-clamp-2 h-12 w-full">
                  {product.title}
                </h3>

                {/* Price Section */}
                <div className="w-full mt-2">
                  {/* Old Price & Discount */}
                  <div className="flex items-center justify-between px-1 mb-1">
                    <span className="bg-[#ef394e] text-white text-[11px] font-bold px-2 py-[1px] rounded-full">
                      {product.discount}
                    </span>
                    <span className="text-gray-400 text-xs line-through decoration-gray-300">
                      {product.oldPrice}
                    </span>
                  </div>

                  {/* Current Price */}
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-gray-800 font-bold text-lg">
                      {product.price}
                    </span>
                    <span className="text-xs text-gray-700">تومان</span>
                  </div>
                </div>

                {/* Progress Bar (Fake Sales) */}
                <div className="w-full h-1 bg-gray-100 rounded-full mt-3">
                  <div className="h-full bg-gray-300 w-[60%] rounded-full"></div>
                </div>

              </div>
            ))}

            {/* Card "View All" at the end (Optional - Digikala style) */}
            <div className="bg-white min-w-[160px] h-full flex flex-col items-center justify-center gap-2 rounded-l-2xl">
              <div className="p-3 border border-blue-400 rounded-full text-blue-500">
                Left
              </div>
              <span className="text-sm font-bold text-gray-700">مشاهده همه</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
