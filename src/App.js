import './App.scss';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Hero />
      <SearchBar />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
