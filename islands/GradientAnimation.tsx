
import { useEffect, useState } from "preact/hooks";

export default function GradientAnimation(){

    const [alreadyShowed, setAlreadyShowed] = useState(false)

    useEffect(() => {
        console.log("batata")
        const onScroll = () => {
            console.log(window.pageYOffset)

            if(window.pageYOffset >= 1600 && !alreadyShowed){
                const gradient : HTMLElement = document.querySelector("#verde")!
                gradient.style.marginLeft = "0px"
                const gradient2 : HTMLElement = document.querySelector("#azul")!
                gradient2.style.marginLeft = "0px"
            }
        };

        document.addEventListener("scroll", onScroll)
    },[])

    return <div/>
}