import './App.css';
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
 
function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className="App">
      <header className="App-header">

        <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ position: 'absolute', top: 0, left: 0, margin: 16 }}>
                &#9776; {/* Menu icon */} Open Menu List
        </Button>
        <a
          href="https://matias.me/nsfw/"
          target="_blank">
          <button>
            
            button ! press it !
          </button>

          
        </a>
      </header>
    </div>
  );
}

export default App;
