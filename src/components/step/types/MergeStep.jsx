import { FaCodeMerge, FaList } from "react-icons/fa6";
import { Step } from '../Step';
import { Pill } from '../../pill/Pill';

export function MergeStep(props) {
  return (
    <Step step={props.step} icon={<FaCodeMerge />}>
      <Pill icon={<FaList />}>{props.step.data.count}</Pill>
    </Step>
  );
}
