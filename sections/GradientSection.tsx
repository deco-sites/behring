

export interface Props{
    part1 : {text: string; button?: {text?: string; link?: string}};
    part2 : {text: string; button?: {text?: string; link?: string}};
}

export default function GradientSection({part1, part2} : Props){

    return(
        <section>
            <div class="overflow-hidden">
                <div id="verde" class="h-[45vh] overflow-hidden relative">
                <div id="gradient"></div>
                    <div class="h-full flex items-center justify-start text-white absolute top-0 z-10 px-[10vw] m-auto">
                        <div class="h-full flex flex-col items-start justify-center w-[60%]">
                        <h2 class="text-[30px] font-semibold w-full">{part1.text}</h2>
                        {
                            part1.button?.text && <a class="flex items-center uppercase bg-secondary h-12 px-4 font-semibold rounded-[35px]" href={part1.button.link}>{part1.button.text}</a>
                        }
                        </div>
                    </div>
                </div>
                <div id="azul" class="h-[45vh] overflow-hidden relative">
                    <div id="gradient"></div>
                    <div class="h-full flex items-center justify-end text-white absolute top-0 z-10 px-[10vw] m-auto">
                        <div class="h-full flex flex-col items-start justify-center w-[60%]">
                        <h2 class="text-[30px] font-semibold w-full">{part2.text}</h2>
                        {
                            part2.button && <a class="flex items-center uppercase bg-secondary h-12 px-4 font-semibold rounded-[35px]" href={part2.button.link}>{part2.button.text}</a>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}