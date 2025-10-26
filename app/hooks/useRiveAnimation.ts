import { useEffect, useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

// Shared mood state across all instances
let globalMoodValue = 0;
const moodListeners = new Set<() => void>();

export function useRiveAnimation() {
  const STATE_MACHINE_NAME = "mood_selector";
  const INPUT_NAME = "mood";
  const [moodValue, setMoodValue] = useState(globalMoodValue);

  const { rive, RiveComponent } = useRive({
    src: "/quit_binge.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const moodInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  useEffect(() => {
    const listener = () => setMoodValue(globalMoodValue);
    moodListeners.add(listener);
    return () => {
      moodListeners.delete(listener);
    };
  }, []);

  // Update the input when mood value changes
  useEffect(() => {
    if (moodInput) {
      moodInput.value = moodValue;
    }
  }, [moodInput, moodValue]);

  const handleMoodChange = (value: number) => {
    globalMoodValue = value;
    moodListeners.forEach(listener => listener());
  };

  return { RiveComponent, moodInput, handleMoodChange };
}
