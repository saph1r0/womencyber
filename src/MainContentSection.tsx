import React from "react";
import vector7 from "./vector-7.svg";
import vector8 from "./vector-8.svg";
import vector9 from "./vector-9.svg";

export const MainContentSection = () => {
  const progressData = {
    level: "Nivel 3",
    points: "360 pts",
    progressWidth: 103,
  };

  const achievements = [
    {
      id: 1,
      title: "Defensor digital",
      icon: vector7,
      iconConfig: {
        containerClass: "w-[18px] h-[18px]",
        imageClass: "absolute w-3.5 h-[17px] top-px left-0.5",
      },
    },
    {
      id: 2,
      title: "Guardián de contraseñas",
      icons: [
        {
          src: vector8,
          class: "absolute w-[15px] h-2.5 top-[7px] left-0",
        },
        {
          src: vector9,
          class: "absolute w-[9px] h-2 top-0 left-[3px]",
        },
      ],
      iconConfig: {
        containerClass: "w-[18px] h-[18px]",
        wrapperClass: "h-[18px]",
        innerClass: "relative w-[15px] h-4 top-px left-0.5",
      },
    },
  ];

  return (
    <section className="flex flex-col w-80 items-start gap-4 p-[17px] self-stretch bg-[#21101f] rounded-3xl relative border border-solid border-[#26384d]">
      <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="w-[68.63px] text-[#e6fff5] text-base relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
          Progress
        </h2>
      </header>

      <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="relative self-stretch w-full h-2.5 bg-[#14212a] rounded-[48px] overflow-hidden"
          role="progressbar"
          aria-label={`Progress: ${progressData.level} ${progressData.points}`}
        >
          <div
            className="w-[103px] h-2.5 bg-[#2c5780]"
            style={{ width: `${progressData.progressWidth}px` }}
          />
        </div>

        <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <p className="w-[109.08px] text-[#95a3b3] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
            {progressData.level} · {progressData.points}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="w-[52.97px] text-[#e6fff5] text-base relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
          Logros
        </h3>
      </div>

      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-center gap-2.5 p-[13px] relative self-stretch w-full flex-[0_0_auto] bg-[#400e5e] rounded-xl border border-solid border-[#26384d]"
          >
            <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
              {achievement.icon ? (
                <div className={achievement.iconConfig.containerClass}>
                  <img
                    className={achievement.iconConfig.imageClass}
                    alt={achievement.title}
                    src={achievement.icon}
                  />
                </div>
              ) : (
                <div className={achievement.iconConfig.containerClass}>
                  <div className={achievement.iconConfig.wrapperClass}>
                    <div className={achievement.iconConfig.innerClass}>
                      {achievement.icons.map((icon, index) => (
                        
                        <img
                          key={index}
                          className={icon.class}
                          alt={`${achievement.title} icon ${index + 1}`}
                          src={icon.src}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={`${achievement.id === 1 ? "w-[118.05px]" : "w-[187.69px]"} h-5 mt-[-1.00px] text-[#e6ffef] text-base relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]`}
            >
              {achievement.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
