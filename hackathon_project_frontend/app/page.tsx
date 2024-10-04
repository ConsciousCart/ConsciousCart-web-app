"use client";
import OnboardingFlow from "./components/OnboardingFlow";
// import { useEffect } from "react";
function Page() {
  return (
    <div className=" flex overflow-hidden flex-col items-stretch justify-center">
      <main className="overflow-hidden lg:h-auto flex flex-col w-screen lg:my-10 items-center justify-center space-y-8 lg:py-10">
      <OnboardingFlow />
      </main>
    </div>
  );
}

export default Page;
