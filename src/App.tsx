import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from './common/components/Loading';
import { Navbar } from './components/Navbar';
import store from './redux/store';


// using React Lazy for dinamic components
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const ProductList = lazy(() => import('./components/ProductList'));

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/items" element={<ProductList />} />
              <Route path="/items/:itemId" element={<ProductDetails />} />
            </Routes>
          </Suspense>
        </div>
      </Provider>
    </BrowserRouter>

  )
}

export default App
