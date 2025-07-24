import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { PromoCarousel } from './components/Header/PromoCarousel';
import { Search } from './components/Main/Search/Search';
import { FilterTags } from './components/Main/Filter/FilterTags';
import { GoogleMap } from './components/Main/Map/GoogleMap';
import { Tags } from './components/Main/Tags/Tags';
import { Media } from './components/Main/Media/Media';


function App() {
    return (
        <>

        <header>
            <div id="header-banner">
                <p>Where's your Brand Been?</p>
                <p>Show off your travel style. Share your story.  Enter weekly contests</p>
            </div>

            <PromoCarousel></PromoCarousel>

            <div id="header-auth">
                <span>Login to see your peeps!</span>
                <button name="facebook-login-btn">Login with Facebook</button>
                <button name="post-story-btn">Post your story</button>
            </div>
        </header>

        <main>
            <hr/>

            <section id="left-container">
                <Search></Search>
                <FilterTags></FilterTags>
                <GoogleMap></GoogleMap>
            </section>

            <section id="right-container">
                <Tags></Tags>
                <Media></Media>
            </section>

        </main>

        <hr/>

        <Footer></Footer>

        </>



      /* No longer needed below
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

       */

  );
}

export default App;
