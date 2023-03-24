import Navbar from './components/navigation/Navbar';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Write from './components/writeBlog/write';
import { Provider } from 'react-redux';
import store from './components/writeBlog/redux/store/store'
import SignIn from './components/sign-in/sign-in.component';
import Signup from './components/sign-up/sign-up.component';
import YourBlog from './components/yourBlog/yourBlog.component';


function App() {
  return (
    <Provider store={store}>

    <div className="App">
    <Navbar/>
       <Routes>
        <Route exact path="/write" element={<Write/>} />
        <Route exact path="/sign-up" element={<Signup/>} />
        <Route exact path="/login" element={<SignIn/>} />
        <Route exact path="/your-blog" element={<YourBlog/>} />

        
    </Routes>
    </div>
    </Provider>
  );
}

export default App;
