// import './categories.styles.scss';
// import CategoryItem from './components/category-item/category-item.component';

import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from './routes/Navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return (
    <div>
      <div>
        <h1>This is the shop page.</h1>
      </div>
    </div>
  )
}

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
