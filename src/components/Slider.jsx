import { useEffect, useRef, useState } from "react";
import capHats from "../assets/capHats.jpg";

const categories = [
  { id: 1, title: 'Hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', background: "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)" },
  { id: 2, title: 'Jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', background: "#0f172a" },
  { id: 3, title: 'Sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', background: "radial-gradient(circle,rgba(141, 181, 188, 1) 0%, rgba(189, 214, 218, 1) 32%)" },
  { id: 4, title: 'Womens', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', background: "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)" },
  { id: 5, title: 'Mens', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)" },
  { id: 6, title: 'Cap hats', imageUrl: capHats, background: "radial-gradient(circle,rgba(141, 181, 188, 1) 0%, rgba(189, 214, 218, 1) 32%)" },
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prevIndex = useRef(0);
  const intervalTime = 7000;

  const goTo = (next) => {

    const last = categories.length - 1;

    prevIndex.current = index;

    // جهت درست در حالت حلقه
    if (index === last && next === 0) {
      setDirection(1);     // حرکت رو به جلو (آخر → اول)
    } else if (index === 0 && next === last) {
      setDirection(-1);    // حرکت رو به عقب (اول → آخر)
    } else {
      setDirection(next > index ? 1 : -1);
    }

    setIndex(next);
  };
  const nextSlide = () => goTo((index + 1) % categories.length);

  useEffect(() => {
    const t = setInterval(nextSlide, intervalTime);
    return () => clearInterval(t);
  }, [index]);

  const getPosition = (i) => {
    if (i === index) {
      return "translate-x-0 opacity-100 z-20";
    }

    if (i === prevIndex.current) {
      return "slide-left-fade z-10";
    }

    return "translate-x-full opacity-0 z-0";
  };

  return (
    <div className="relative w-full h-[420px] bg-white rounded-lg mb-10 overflow-hidden flex items-center justify-center"
    >

      <div className="relative w-full h-full">
        {categories.map((c, i) => (
          <div
            key={c.id}
            className={`
              absolute inset-0 flex items-center justify-center gap-24
              transition-transform duration-700 ease-[cubic-bezier(.4,.0,.2,1)]
              pointer-events-none
              ${getPosition(i)}
            `}
            style={{ background: categories[index].background }}
          >
            <img className={`rounded-2xl w-[440px] ${i % 2 === 0 ? 'rotate-[5deg]' : 'rotate-[-5deg]'}`} src={c.imageUrl} />
            <div className="font-SG w-1/3 text-white p-3 rounded-lg">

              <h2 className="font-extrabold text-xl text-black">
                {c.title}
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quae doloribus quam eveniet,
                perferendis deleniti est voluptatum, aliquid nesciunt harum dignissimos repudiandae. Ullam quis,
                corporis qui repellat rem et labore?
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 flex gap-3 z-30 pointer-events-auto">
        {categories.map((c, i) => (
          <button
            key={c.id}
            onClick={() => goTo(i)}
            className={`
        relative h-3 w-3 rounded-full overflow-hidden
        border ${i === index ? "border-white" : "border-white/0"}
        bg-white/40
        transition-all duration-300
        ${i === index ? "w-8" : ""}
      `}
          >
            {i === index && (
              <span
                key={index}
                className="absolute inset-0 origin-left bg-white
          animate-[progressSmooth_var(--t)_forwards]"
                style={{ "--t": `${intervalTime / 1000}s` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;