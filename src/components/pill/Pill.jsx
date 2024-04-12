import { IconWrapper } from '../icon/IconWrapper';
import './Pill.css';

export function Pill({icon, children}) {
  return (
    <span className="pill">
      <IconWrapper>{icon}</IconWrapper>
      <span className="pill__label">{children}</span>
    </span>
  );
}
