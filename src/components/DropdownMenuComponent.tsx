import './DropdownMenuComponent.css';
import React, { useRef, useState, } from 'react'
import Button from './ButtonComponent'
import { useOnClickOutside } from 'usehooks-ts'

interface Links {
  name: string;
  link: string;
}

interface DropDownMenuProps {
  variant: string;
  links: Links[];
  disabled?: boolean;
  children?: React.ReactNode;
}

const DropDownMenu = (props: DropDownMenuProps) => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const links = props.links
  const handleClickOutside = (event: { target: any }) => {
    setOpen(false)
  }

  useOnClickOutside(container, handleClickOutside)

  return (
    <div className="dropdown-container" ref={ container }>
      <Button
        variant={props.variant}
        onClick={() => setOpen(!open)}
      >
        { props.children }
      </Button>
      { open && (
        <div className="dropdown-wrapper">
          <ul className="dropdown-menu">
            { links.map((link, index) =>
              <li key={index} className="dropdown-menu__item">
                <a href={link.link}>{link.name}</a></li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
