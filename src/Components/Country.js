const Header = (props) => {
  return (
    <li
      style={{
        border: " 1px solid black",
        listStyle: "none",
        padding: "20px",
        margin: "20px",
      }}
    >
      <img src={props.img} alt={props.img} width={300} />
      <h3>{props.name}</h3>
      <p>{props.population}</p>
      <p>{props.region}</p>
      <p>{props.capital}</p>
    </li>
  );
};
export default Header;
