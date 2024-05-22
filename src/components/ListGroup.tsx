import { MouseEvent } from "react";

function ListGroup() {
  const items = ["ff", "ld"];

  const selelctedIndex = -1;
  // event handler- click
  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no itmes</p>}
      <ul clasName="list-group">
        {items.map((item, index) => (
          <li
            className={
              selelctedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={selelctedIndex = }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
