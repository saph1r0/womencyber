import React from "react";
import { MainContentSection } from "./MainContentSection";
import { ProgressSection } from "./ProgressSection";
import { SidebarSection } from "./SideBarSection";

export const ContainerScreen = (): JSX.Element => {
  return (
    <div className="flex w-[1229.13px] h-[534px] items-start justify-center gap-5 pl-6 pr-0 py-6 relative">
      <SidebarSection />
      <ProgressSection />
      <MainContentSection />
    </div>
  );
};