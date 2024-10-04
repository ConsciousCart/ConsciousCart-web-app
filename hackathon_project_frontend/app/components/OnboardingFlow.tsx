import React, { useState } from "react";
import HowHealthyAreYou from "./HowHealthyAreYou";
import MobileView from "./MobileView";

const OnboardingFlow: React.FC = () => {
  const [healthProfileCompleted, setHealthProfileCompleted] = useState(false);
  const [healthProfile, setHealthProfile] = useState({});

  const handleHealthProfileComplete = (profile: { [key: string]: boolean }) => {
    setHealthProfile(profile);
    setHealthProfileCompleted(true);
  };

  return (
    <div className="h-[100vh] w-[100vw] lg:h-[640px] lg:w-[745px]">
      {!healthProfileCompleted ? (
        <HowHealthyAreYou onComplete={handleHealthProfileComplete} />
      ) : (
        <MobileView healthProfile={healthProfile} />
      )}
    </div>
  );
};

export default OnboardingFlow;