import { FaShareNodes } from "react-icons/fa6";
import { Step } from '../Step';

export function GenericStep(props) {
  return (
    <Step step={props.step} icon={<FaShareNodes />} />
  );
}
