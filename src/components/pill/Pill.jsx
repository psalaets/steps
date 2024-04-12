export function Pill(props) {
  return (
    <div className="pill">
      {props.icon}
      {props.children}
    </div>
  );
}
