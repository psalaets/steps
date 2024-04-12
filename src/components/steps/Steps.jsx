import { useState } from "react";
import { FaBolt } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { FaCodeMerge, FaList } from "react-icons/fa6";
import { Step } from "../step/Step";
import { Pill } from "../pill/Pill";

import './Steps.css';

export function Steps(props) {
  const { steps } = props;
  const [activeStepId, setActiveStepId] = useState(null);

  return (
    <ol className="steps">
      {steps.map((step) => renderStep(step, step.id === activeStepId, setActiveStepId))}
    </ol>
  )
}

function renderStep(step, isActive, onStepClick) {
  switch (step.type) {
  case 'merge':
    return (
      <Step step={step} onClick={onStepClick} icon={<FaCodeMerge />} active={isActive} key={step.id}>
        <Pill icon={<FaList />}>{step.data.count}</Pill>
      </Step>
    );
  case 'update':
    return (
      <Step step={step} onClick={onStepClick} icon={<FaBolt />} active={isActive} key={step.id} />
    );
  default:
    // Generic catchall step
    return (
      <Step step={step} onClick={onStepClick} icon={<FaShareNodes />} active={isActive} key={step.id} />
    );
  }
}
