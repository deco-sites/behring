import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

import Slider from '../islands/Slider.tsx';
import { useId } from "preact/hooks";

export interface Props{
    content:{
    title: string;
    button: {text: string; link: string};
    image: LiveImage;
    }[]
}

export default function MainCarousel({content}: Props){

    const id = useId();
    
    return(
        <section class="px-[10vw] h-[145vw] md:h-auto">
            <div id={id} class="relative overflow-hidden">
                <div class={`flex justify-between transition w-[${content.length * 100}%]`} data-slider-content>
                    {content.map((content, idx) => {
                        return(
                            <a href={content.button.link} id={`${id}-${idx}`} class="flex flex-col md:flex-row  justify-between items-center w-[100%] mx-[1px]">
                                <div class="w-full h-[93vw] md:h-auto md:w-[40%] relative">
                                    <img src='/mascara.png' alt="" />
                                    <div id="mascara" class={`absolute w-full h-full top-0 left-0 bg-cover bg-center mask`} style={`background-image: url(${content.image})`}></div>
                                </div>
                                <div class="w-full md:w-[30%] text-left md:text-right mt-[50px] md:mt-0">
                                    <h2 class="text-primary text-[22px] md:text-[32px] font-semibold mb-5">{content.title}</h2>
                                    <span class="block text-secondary uppercase font-semibold border-b-1 border-secondary w-max mr-auto md:ml-auto">{content.button.text}</span>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <div class="absolute w-0 z-30 flex -translate-x-1/2 left-0 bottom-[230px] md:left-auto md:bottom-[100px] md:right-[100px]">
                        {content.map((_, index) => (
                            <button
                            data-dot
                            aria-label={`Focus slide carousel ${index}`}
                            class={`p-1 focus:children:bg-secondary`}
                            >
                            <div class="w-3 h-3 rounded-full bg-gray dark:bg-gray-800" />
                            </button>
                        ))}
                </div>
                <Slider
                    id={id}
                    items={content.length}
                    delay={5 * 1000}
                />
                <a href="#atuacao" class="block mb-[50px] mt-[20px] flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34.115" height="18.472" viewBox="0 0 34.115 18.472">
                    <path id="seta-baixo" d="M-16982.447,7642.246l-16.35,16.351-16.352-16.351" transform="translate(17015.855 -7641.539)" fill="none" stroke="#00B030" stroke-width="2"></path>
                    </svg>
                </a>
            </div>
        </section>
    )

}