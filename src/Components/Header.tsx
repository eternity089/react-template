import {useState, useEffect} from "react";


function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показываем блок через небольшой промежуток, чтобы сработала анимация
    setTimeout(() => setIsVisible(true), 100);
  }, []);
  return(
    //duration отвечает за длительность анимации, isVisible - условие, когда страница открылась
    <header
      className={`z-10 absolute left-93 top-5 bg-gray-50 border border-gray-200 h-20 rounded-full w-6xl px-10 flex items-center justify-between transition-all duration-1200 ease-out 
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-150 opacity-0"}`}
    >
    {/* group - отвечает за стилизацию дочернего элемента при изменении состояния родительского элемента */}
      <nav className="w-1/2 flex items-center font-inter justify-between">
      <li className="group hover:opacity-80">About AI      <div className="absolute h-0.25 bg-black w-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-80"></div></li>
      <li className="group hover:opacity-80">Our Solutions <div className="absolute h-0.25 bg-black w-0 transition-all duration-300 group-hover:w-26 group-hover:opacity-80"></div></li>
      <li className="group hover:opacity-80">Benefits      <div className="absolute h-0.25 bg-black w-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-80"></div></li>
      <li className="group hover:opacity-80">Contact Us    <div className="absolute h-0.25 bg-black w-0 transition-all duration-300 group-hover:w-21 group-hover:opacity-80"></div></li>
      </nav>
      <button className="group relative z-0 overflow-hidden border px-10 py-3 border-black  cursor-pointer overflow-x-hidden rounded-full bg-white text-black hover:text-white"><span className="relative z-10">Learn More</span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center translate-x-full bg-black transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
    </header>
  );
}


export default Header;

