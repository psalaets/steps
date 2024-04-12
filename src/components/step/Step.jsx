import { Children } from 'react';
import './Step.css';

export function Step(props) {
  const { step, children, icon } = props;

  return (
    <div className={`step`}>
      <span className="step__icon-wrapper">
        {icon}
      </span>
      <StepNumber>{step.stepNumber}</StepNumber>
      <StepName>{step.name}</StepName>
      {Children.count(children) > 0 ? <Indicators>{children}</Indicators> : null}
      {/* error icon */}
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
