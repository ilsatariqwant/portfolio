import { useEffect } from "react";

export default function ClickBurst(){

  useEffect(()=>{

    const createBurst = (x,y)=>{

      const burst = document.createElement("div");
      burst.className = "color-burst";

      burst.style.left = x + "px";
      burst.style.top = y + "px";

      document.body.appendChild(burst);

      setTimeout(()=>{
        burst.remove();
      },800);
    }

    const clickHandler = (e)=>{
      createBurst(e.clientX,e.clientY);
    }

    document.addEventListener("click",clickHandler);

    return ()=>{
      document.removeEventListener("click",clickHandler);
    }

  },[]);

  return null;
}