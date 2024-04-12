import { Children } from 'react';
import './Step.css';

export function Step(props) {
  const { step, children } = props;

  const indicators = Children.count(children) > 0
    ? <Indicators>{children}</Indicators>
    : null;

  return (
    <li className={`step`}>
      {/* step type icon */}
      <StepNumber>{step.stepNumber}</StepNumber>
      <StepName>{step.name}</StepName>
      {indicators}
      {/* error icon */}
    </li>
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
