import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown/index";

export default function MusicDrop() {
  return (
    <Dropdown label="Music" dismissOnClick={false}>
      <Dropdown.Item>
        <Link to="/music">All Music</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/music/brd">BluRays</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/music/dvd">DVDs</Link>
      </Dropdown.Item>
    </Dropdown>
  );
}
