import {useState, useEffect} from "react";

function Image() {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Показываем блок через небольшой промежуток, чтобы сработала анимация
      setTimeout(() => setIsVisible(true), 500);
    }, []);
  return(
    //duration отвечает за длительность анимации, isVisible - условие, когда страница открылась
    <div className={`z-20 absolute top-30 right-10 transition-all duration-1200 ease-out 
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-100 opacity-0"}`}>
      <img src="../public/main.png" alt="image" />
    </div>
  )
}

export default Image;