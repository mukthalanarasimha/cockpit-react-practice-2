export const Btn = (props) => {
  return (
    <button type={props.type} className={props.class}>
      {props.name}
    </button>
  );
};
