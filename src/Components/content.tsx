import {useState, useEffect} from "react";

function Content() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показываем блок через небольшой промежуток, чтобы сработала анимация
    setTimeout(() => setIsVisible(true), 600);
  }, []);
  return (
    <div className="z-30 absolute top-20">
    {/* duration отвечает за длительность анимации, isVisible - условие, когда страница открылась */}
      <div className={`bg-white/[0.4] text-neutral-500 rounded-4xl mt-10 px-10 pt-12 pb-19 w-[560px] ml-10 leading-loose transition-all duration-1800 ease-out 
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-250 opacity-0"}`}>
        Artificial intelligence (AI) technologies are computer systems designed
        to perform tasks that normally require human intelligence. These tasks
        include understanding language, recognizing images, solving problems,
        and making decisions. AI can learn from data, improve over time, and
        work automatically. It is used in many areas, such as healthcare,
        education, transportation, and business, making everyday life easier and
        more efficient.
      </div>
      <div className={`bg-white/[0.4] rounded-4xl mt-5 px-10 py-6 ml-10 w-[560px] flex items-center gap-13 transition-all duration-1600 ease-out 
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-200 opacity-0"}`}>
        <img src="public/deepseek.png" alt="" />
        <img src="public/claude.png" alt="" />
        <img src="public/gpt.png" alt="" />
        <img src="public/gemini.png" alt="" />
      </div>
      <h3 className={`mt-18 ml-10 uppercase text-lg transition-all duration-1200 ease-out 
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-200 opacity-0"}`}>
        Innovative AI Solutions for a Smarter Future
      </h3>
      <h1 className={`mt-2 ml-10 font-bold uppercase text-[86px] leading-26  transition-all duration-1200 ease-out 
        ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-100 opacity-0"}`}>
        ai <br></br>technologies
      </h1>
    </div>
  );
}

export default Content;
