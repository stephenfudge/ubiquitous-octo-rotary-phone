import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown/index";

export default function TvDrop() {
  return (
    <Dropdown label="TV Shows" dismissOnClick={false}>
      <Dropdown.Item>
        <Link to="/tv">All TV Shows</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/tv/brd">BluRays</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/tv/dvd">DVDs</Link>
      </Dropdown.Item>
    </Dropdown>
  );
}
