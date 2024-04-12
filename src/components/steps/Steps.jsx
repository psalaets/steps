import { GenericStep } from '../step/types/GenericStep';
import { MergeStep } from '../step/types/MergeStep';
import { UpdateStep } from '../step/types/UpdateStep';

import './Steps.css';

export function Steps(props) {
  const steps = props.steps;

  return (
    <ol className="steps">
      {steps.map(renderStep)}
    </ol>
  )
}

function renderStep(step) {
  switch (step.type) {
  case 'merge':
    return <MergeStep step={step} key={step.id} />;
  case 'update':
    return <UpdateStep step={step} key={step.id} />;
  default:
    return <GenericStep step={step} key={step.id} />;
  }
}