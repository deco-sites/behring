import type { Image as LiveImage } from "$live/std/ui/types/Image.ts";

export interface Props {
  aboutUs: string;
  menu: {
    title: string;
    link: string;
    submenu?: {
      text?: string;
      link?: string;
    }[];
  }[];
  logo: LiveImage;
}

export default function Footer({ aboutUs, menu, logo }: Props) {
  return (
    <footer class="py-[50px] md:py-[100px] bg-primary text-white">
      <div class="flex flex-col-reverse md:flex-row justify-between px-[10vw]">
        <div class="mt-[30px] md:mt-0 md:w-[25%]">
          <p class="text-[12px] mb-[15px] md:mb-[50px]">{aboutUs}</p>
          <span class="text-[10px] font-extralight">
            <span class="text-[14px]">©</span>{" "}
            FUNDAÇÃO BEHRING, 2023, TODOS OS DIREITOS RESERVADOS. <br />
            DESENVOLVIDO POR FIB | FÁBRICA DE IDEIAS BRASILEIRAS.
          </span>
        </div>
        <div class="flex flex-col md:flex-row text-[12px] gap-8 uppercase">
          {menu.map((menu) => {
            return (
              <div>
                <a
                  class="font-semibold hover:border-b-[1px] border-white"
                  href={menu.link}
                >
                  {menu.title}
                </a>
                {menu.submenu &&
                  (
                    <ul class="mt-6">
                      {menu.submenu.map((submenu) => {
                        return (
                          <li>
                            <a
                              class="hover:border-b-[1px] border-white mb-0.5"
                              href={submenu.link}
                            >
                              {submenu.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
              </div>
            );
          })}
        </div>
        <div class="mb-[30px] md:mb-0 w-[110px] md:w-[8%]">
          <img src={logo} alt="Logo Fundação" />
        </div>
      </div>
    </footer>
  );
}
