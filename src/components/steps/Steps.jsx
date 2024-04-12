import { useState } from "react";
import { FaBolt, FaRegFaceFrown } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";
import { FaCodeMerge, FaList } from "react-icons/fa6";
import { Step } from "../step/Step";
import { Pill } from "../pill/Pill";
import { IconWrapper } from "../icon/IconWrapper";

import './Steps.css';

export function Steps(props) {
  const { steps } = props;
  const [activeStepId, setActiveStepId] = useState(null);

  return (
    <ol className="steps">
      {steps.map((step) => {
        return (
          <StepWrapper
            step={step}
            active={step.id === activeStepId}
            onClick={setActiveStepId}
            key={step.id}
          />
        );
      })}
    </ol>
  )
}

function StepWrapper({step, active, onClick}) {
  return (
    <li className={`step-wrapper ${active ? 'step-wrapper--active' : ''}`} onClick={() => onClick(step.id)}>
      {renderStep(step)}
      {step.hasError && <StepWrapperError />}
    </li>
  )
}

function StepWrapperError() {
  return (
    <span className="step-wrapper__error">
      <span className="step-wrapper__error-symbol">!</span>
    </span>
  );
}

function renderStep(step) {
  switch (step.type) {
  case 'merge':
    return (
      <Step step={step} icon={<FaCodeMerge />}>
        <Pill icon={<FaList />}>{step.data.count}</Pill>
      </Step>
    );
  case 'update':
    return (
      <Step step={step} icon={<FaBolt />} />
    );
  default:
    // Generic catchall step
    return (
      <Step step={step} icon={<FaShareNodes />} />
    );
  }
}
