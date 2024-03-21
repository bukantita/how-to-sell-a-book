import React from 'react';
import Header from "./pages/kepala";
import JalanAja from "./utama";
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div> 
        <Header/>
        <JalanAja/>
        {/* <Link to="/gallery" className='nav-link'>Gallery</Link> */}
      </div>
    );
  }
}

export default App;