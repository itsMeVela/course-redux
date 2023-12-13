import './App.css';
import Header from './components/Header';
import ProductList from './features/productlist/ProductList';

function App() {
  return (
    <>
    <Header />
    <main className="max-w-7xl mx-auto px-4">
      <ProductList />
    </main>
    </>
  )
}

export default App
