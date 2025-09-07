import React from "react";
import iconifyIcon2 from "./iconify-icon-2.svg";
import iconifyIcon3 from "./iconify-icon-3.svg";
import iconifyIcon from "./iconify-icon.svg";
import image from "./image.svg";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector11 from "./vector-11.svg";
import vector12 from "./vector-12.svg";
import vector from "./vector.svg";

export const SidebarSection = () => {
  const gameModes = [
    {
      id: 1,
      name: "Modo Tutorial",
      icon: iconifyIcon3,
      isIconComponent: true,
    },
    {
      id: 2,
      name: "Modo Historia",
      icon: vector12,
      isIconComponent: false,
    },
    {
      id: 3,
      name: "Modo Desafío",
      icon: { primary: vector, secondary: image },
      isIconComponent: false,
      isComposite: true,
    },
  ];

  const quickStartItems = [
    {
      id: 1,
      name: "Phishing",
      icon: { primary: vector2, secondary: vector3 },
      isComposite: true,
    },
    {
      id: 2,
      name: "Malware",
      icon: iconifyIcon,
      isIconComponent: true,
    },
    {
      id: 3,
      name: "Network",
      icon: iconifyIcon2,
      isIconComponent: true,
    },
  ];

  return (
    <aside className="flex flex-col w-[280px] items-start gap-4 p-[17px] self-stretch bg-[#071326] rounded-3xl relative border border-solid border-[#26384d]">
      <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="w-[75.98px] text-[#bfe0ff] text-base relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
          Language
        </h2>
      </header>

      <div className="flex items-center justify-between pl-[17px] pr-[0.5px] py-[17px] self-stretch w-full flex-[0_0_auto] bg-[#21101f] rounded-xl relative border border-solid border-[#26384d]">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-[18px] h-[18px]">
              <div className="h-[18px]">
                <div className="relative w-4 h-4 top-px left-px bg-[url(/vector-10.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-4 h-4 top-0 left-0"
                    alt="Spanish flag"
                    src={vector11}
                  />
                </div>
              </div>
            </div>
          </div>

          <span className="w-[53.14px] h-[17px] text-[#dde9ff] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
            Español
          </span>

          <div className="inline-flex flex-col items-start px-2 py-1 relative flex-[0_0_auto] bg-[#400e5e] rounded-[48px]">
            <span className="w-[41.39px] h-[15px] text-[#e6ffef] text-xs relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
              Default
            </span>
          </div>
        </div>

        <button className="inline-flex items-center px-3.5 py-2.5 relative flex-[0_0_auto] bg-[#400e5e] rounded-xl hover:bg-[#4a1068] transition-colors">
          <span className="w-[51.97px] h-[17px] text-[#e6ffef] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
            Change
          </span>
        </button>
      </div>

      <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="w-[101.22px] text-[#bfe0ff] text-base relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
          Game Modes
        </h2>
      </header>

      <nav className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        {gameModes.map((mode) => (
          <button
            key={mode.id}
            className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] hover:bg-[#26384d] rounded-lg p-1 transition-colors"
          >
            {mode.isIconComponent ? (
              <img
                className="relative flex-[0_0_auto]"
                alt={`${mode.name} icon`}
                src={mode.icon}
              />
            ) : mode.isComposite ? (
              <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                <div className="relative w-[18px] h-[18px]">
                  <div className="h-[18px]">
                    <div className="relative w-3.5 h-4 top-px left-0.5">
                      <img
                        className="absolute w-[5px] h-2.5 top-0 left-1"
                        alt=""
                        src={mode.icon.primary}
                      />
                      <img
                        className="absolute w-3.5 h-3.5 top-[3px] left-0"
                        alt=""
                        src={mode.icon.secondary}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                <div className="relative w-[18px] h-[18px]">
                  <img
                    className="absolute w-3.5 h-4 top-px left-0.5"
                    alt={`${mode.name} icon`}
                    src={mode.icon}
                  />
                </div>
              </div>
            )}

            <span className="text-[#dde9ff] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
              {mode.name}
            </span>
          </button>
        ))}
      </nav>

      <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="w-[85.94px] text-[#bfe0ff] text-base relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
          Quick Start
        </h2>
      </header>

      <nav className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
        {quickStartItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto] hover:bg-[#26384d] rounded-lg p-1 transition-colors"
          >
            {item.isIconComponent ? (
              <img
                className="relative flex-[0_0_auto]"
                alt={`${item.name} icon`}
                src={item.icon}
              />
            ) : item.isComposite ? (
              <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                <div className="relative w-[18px] h-[18px]">
                  <div className="h-[18px]">
                    <div className="relative w-4 h-[15px] top-0.5 left-px">
                      <img
                        className="absolute w-4 h-3.5 top-0 left-0"
                        alt=""
                        src={item.icon.primary}
                      />
                      <img
                        className="absolute w-4 h-[13px] top-0.5 left-0"
                        alt=""
                        src={item.icon.secondary}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <img
                className="relative flex-[0_0_auto]"
                alt={`${item.name} icon`}
                src={item.icon}
              />
            )}

            <span className="text-[#dde9ff] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
              {item.name}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
