export const IconBtn = (props) => {
  console.log(props);
  return (
    <button type={props.type} className={props.class}>
      <img src={props.icon} alt={props.name} />
      {props.name}
    </button>
  );
};
