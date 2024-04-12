import { FaBolt } from "react-icons/fa6";
import { Step } from '../Step';

export function UpdateStep(props) {
  return (
    <Step step={props.step} icon={<FaBolt />}>
    </Step>
  );
}