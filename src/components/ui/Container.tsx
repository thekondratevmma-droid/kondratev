import type { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-[60px]">
      {children}
    </div>
  );
}

