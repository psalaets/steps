import { Children } from 'react';
import { IconWrapper } from '../icon/IconWrapper';

import './Step.css';

export function Step({ step, children, icon }) {
  return (
    <div className={`step`}>
      <IconWrapper>{icon}</IconWrapper>
      <StepNumber>{step.stepNumber}</StepNumber>
      <StepName>{step.name}</StepName>
      {Children.count(children) > 0 ? <Indicators>{children}</Indicators> : null}
    </div>
  );
}

function StepNumber({children}) {
  return (
    <span className="step__number">
      {children}
    </span>
  )
}

function StepName({children}) {
  return (
    <span className="step__name">{children}</span>
  )
}

function Indicators({children}) {
  return (
    <div className="step__indicators">{children}</div>
  );
}
