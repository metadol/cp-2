import React, { ReactNode } from "react";


export function DotBackgroundDemo({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center bg-white bg-dot-black/[0.2] md:h-[50rem] lg:h-[50rem]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {children}
    </div>
  );
}
