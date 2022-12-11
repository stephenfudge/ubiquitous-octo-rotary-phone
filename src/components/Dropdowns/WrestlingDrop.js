import { Link } from "react-router-dom";
// import { Dropdown } from "flowbite-react/lib/cjs/components/Dropdown/index";
import { Dropdown } from 'flowbite-react'

export default function WrestlingDrop() {
  return (
    <div className="bg-darkpurple text-jazzberry hover:bg-bedazzle hover:text-paradise text-gray-800 font-semibold rounded inline-flex items-center"  dismissOnClick={false}>
        
      <Dropdown label="Wrestling" dismissOnClick={false}>
        <Dropdown.Item>
          <Link to="/wrestling">All Wrestling</Link>
        </Dropdown.Item>

        <Dropdown label="Format" placement="right" dismissOnClick={false}>
          <Dropdown.Item>
            <Link to="/wrestling/brd">BluRays</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/wrestling/dvd">DVDs</Link>
          </Dropdown.Item>
        </Dropdown>

        <Dropdown label="Promotion" placement="right" dismissOnClick={false}>
          <Dropdown.Item>
            <Link to="/wrestling/wwe"> WWE</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/wrestling/other-promotions">Non WWE</Link>
          </Dropdown.Item>
        </Dropdown>

        <Dropdown label="Presentation" placement="right" dismissOnClick={false}>
          <Dropdown.Item dismissOnClick={false}>
            <Link to="/wrestling/compilation">Compilations</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/wrestling/documentary">Documentaries</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/wrestling/ppv">PPV Events</Link>
          </Dropdown.Item>
        </Dropdown>
      </Dropdown>
    </div>
  );
}
