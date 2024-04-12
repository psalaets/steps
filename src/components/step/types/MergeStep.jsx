import { Step } from '../Step';

export function MergeStep(props) {
  return (
    <Step step={props.step}>
      <span>{props.step.data.count}</span>
    </Step>
  );
}