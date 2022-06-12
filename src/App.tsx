import './App.css';
import Button from "./components/ButtonComponent";
import DropdownMenu from "./components/DropdownMenuComponent";
import * as Icon from 'react-feather';

function App() {
  const links = [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/'
    }
  ]

  return (
    <div className="container">
      <h4>Primary button / states</h4>
      <Button
        variant="btn-primary"
        onClick={() => console.log("You clicked")}
      >
        <Icon.ChevronLeft  size={16}/>
        <span className="ml-4">Erinevad toimingud</span>
      </Button>
      <Button
        disabled={ true }
        variant="btn-primary"
        onClick={() => console.log("You clicked")}
      >
        <span className="mr-4">Erinevad toimingud</span>
        <Icon.ChevronRight size={16}/>
      </Button>
      <h4>Secondary button / states</h4>
      <Button
        variant="btn-secondary"
        onClick={() => console.log("You clicked")}
      >
        <Icon.ChevronLeft  size={16}/>
        <span className="ml-4">Erinevad toimingud</span>
      </Button>
      <Button
        disabled={ true }
        variant="btn-secondary"
        onClick={() => console.log("You clicked")}
      >
        <span className="mr-4">Erinevad toimingud</span>
        <Icon.ChevronRight size={16}/>
      </Button>
      <h4>Dark button / states</h4>
      <Button
        variant="btn-dark"
        onClick={() => console.log("You clicked")}
      >
        <Icon.ChevronLeft size={16}/>
        <span className="ml-4">Erinevad toimingud</span>
      </Button>
      <Button
        disabled={ true }
        variant="btn-dark"
        onClick={() => console.log("You clicked")}
      >
        <span className="mr-4">Erinevad toimingud</span>
        <Icon.ChevronRight size={16}/>
      </Button>
      <h4>Button only icon / only text / disabled</h4>
      <Button
        variant="btn-primary"
        onClick={() => console.log("You clicked")}
      >
        <Icon.Camera size={16}/>
      </Button>
      <Button
        variant="btn-primary"
        onClick={() => console.log("You clicked")}
      >
        Erinevad toimingud
      </Button>
      <Button
        disabled={ true }
        variant="btn-primary"
        onClick={() => console.log("You clicked")}
      >
        <Icon.Camera size={16}/>
      </Button>
      <h4>Dropdown menu</h4>
      <DropdownMenu variant="btn-primary" links={links}>
        <span className="mr-4">I am dropdown</span> <Icon.ChevronDown size={16}/>
      </DropdownMenu>
    </div>
  )
}

export default App;
