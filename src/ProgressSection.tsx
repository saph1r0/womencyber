import React, { useState } from "react";
import vector4 from "./vector-4.svg";
import vector5 from "./vector-5.svg";
import vector6 from "./vector-6.svg";

export const ProgressSection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Select");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const languages = ["Español", "English", "Français", "Deutsch"];

  const gameModes = [
    {
      title: "Modo Tutorial",
      description: "Guía paso a paso\ncon explicaciones.",
      padding: "pt-[17px] pb-[34px] px-[17px]",
    },
    {
      title: "Modo Historia",
      description: "Cumple misiones y\navanza la narrativa.",
      padding: "pt-[17px] pb-[34px] px-[17px]",
    },
    {
      title: "Modo Desafío",
      description: "Toma decisiones\nrápidas con\ntemporizador.",
      padding: "p-[17px]",
    },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const handlePlayClick = () => {
    // Handle play button click
    console.log("Play button clicked");
  };

  const handleHowItWorksClick = () => {
    // Handle how it works button click
    console.log("How it works button clicked");
  };

  return (
    <section className="flex flex-col w-[565.13px] items-start gap-4 relative self-stretch">
      <div className="flex items-center justify-between p-[29px] self-stretch w-full flex-[0_0_auto] bg-[#21101f] rounded-3xl relative border border-solid border-[#26384d]">
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="w-[207.13px] h-[136px] text-[#dde9ff] text-[28px] relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
              CyberGuardian:
              <br />
              Aprende
              <br />
              ciberseguridad
              <br />
              jugando
            </h1>
          </div>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <p className="w-[194.75px] h-[51px] text-[#95a3b3] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
              Simulaciones prácticas.
              <br />
              Multilingüe. De principiante a<br />
              experto.
            </p>
          </div>

          <div className="flex flex-col items-start pt-2 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <button
                className="inline-flex items-center gap-2 px-3.5 py-2.5 relative flex-[0_0_auto] bg-[#2c5780] rounded-xl hover:bg-[#3a6a95] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2c5780] focus:ring-offset-2 focus:ring-offset-[#21101f]"
                onClick={handlePlayClick}
                aria-label="Play CyberGuardian"
              >
                <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                  <div className="relative w-[18px] h-[18px]">
                    <div className="h-[18px]">
                      <div className="relative w-4 h-4 top-px left-px">
                        <img
                          className="absolute w-[7px] h-2 top-1 left-[5px]"
                          alt=""
                          src={vector4}
                        />

                        <img
                          className="absolute w-4 h-4 top-0 left-0"
                          alt=""
                          src={vector5}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <span className="w-[28.3px] h-[17px] text-white text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
                  Play
                </span>
              </button>

              <button
                className="inline-flex items-center gap-2 pl-3.5 pr-[32.55px] py-2.5 relative flex-[0_0_auto] bg-[#400e5e] rounded-xl hover:bg-[#5a1a7e] transition-colors focus:outline-none focus:ring-2 focus:ring-[#400e5e] focus:ring-offset-2 focus:ring-offset-[#21101f]"
                onClick={handleHowItWorksClick}
                aria-label="Learn how CyberGuardian works"
              >
                <div className="inline-flex flex-col items-center justify-center relative flex-[0_0_auto]">
                  <div className="relative w-[18px] h-[18px]">
                    <img
                      className="absolute w-[15px] h-3 top-[3px] left-0.5"
                      alt=""
                      src={vector6}
                    />
                  </div>
                </div>

                <span className="w-[42.28px] h-[34px] text-[#e6ffef] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
                  How it
                  <br />
                  works
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
          <div className="inline-flex items-center justify-between p-[17px] flex-[0_0_auto] bg-[#21101f] rounded-xl relative border border-solid border-[#26384d]">
            <label className="w-[121.34px] h-[17px] text-[#dde9ff] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
              Choose Language
            </label>

            <div className="relative">
              <button
                className="inline-flex items-center px-[15px] py-[11px] relative flex-[0_0_auto] rounded-xl border border-solid border-[#26384d] hover:border-[#3a5a7d] transition-colors focus:outline-none focus:ring-2 focus:ring-[#26384d] focus:ring-offset-2 focus:ring-offset-[#21101f]"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="listbox"
                aria-label="Select language"
              >
                <span className="w-[41.88px] h-[17px] mt-[-1.00px] text-[#e6fff5] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
                  {selectedLanguage}
                </span>
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-[#21101f] border border-solid border-[#26384d] rounded-xl z-10">
                  <ul role="listbox" className="py-1">
                    {languages.map((language, index) => (
                      <li key={index}>
                        <button
                          className="w-full px-[15px] py-2 text-left text-[#e6fff5] text-sm [font-family:'Inter-SemiBold',Helvetica] font-semibold hover:bg-[#26384d] transition-colors focus:outline-none focus:bg-[#26384d]"
                          onClick={() => handleLanguageSelect(language)}
                          role="option"
                          aria-selected={selectedLanguage === language}
                        >
                          {language}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center gap-3 p-[17px] self-stretch w-full flex-[0_0_auto] bg-[#21101f] rounded-3xl relative border border-solid border-[#26384d]">
        {gameModes.map((mode, index) => (
          <article
            key={index}
            className={`flex flex-col w-[169.03px] items-start gap-2 ${mode.padding} bg-[#400e5e] rounded-xl relative border border-solid border-[#26384d] hover:bg-[#5a1a7e] transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-[#400e5e] focus-within:ring-offset-2 focus-within:ring-offset-[#21101f]`}
            tabIndex={0}
            role="button"
            aria-label={`Select ${mode.title}`}
          >
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <h3 className="text-[#e6ffef] text-base relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal]">
                {mode.title}
              </h3>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <p className="text-[#95a3b3] text-sm relative [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[normal] whitespace-pre-line">
                {mode.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};