import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown/index";

export default function FilmDrop() {
  return (
    <Dropdown label="Feature Films" dismissOnClick={false}>
      <Dropdown.Item>
        <Link to="/films">All Feature Films</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/films/brd">BluRays</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/films/dvd">DVDs</Link>
      </Dropdown.Item>
    </Dropdown>
  );
}
