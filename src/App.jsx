import './App.scss';
import Main from './containers/Navbar/Main/Main';
import Navbar from './containers/Navbar/Navbar';

import beers from './data/beers';

function App() {
  return (
    <div className="App">
        <h1>
          Best Beer
        </h1>
        <section className='Homepage'>
          <Navbar className="Navbar"/>
          <Main className="Mainpage" />
        </section>

    </div>
  );
}

export default App;
