import './App.css';
import Header from './Header';
import Stories from './Stories';
import Feed from './Feed';
import Footer from './Footer';
import Login from './Account/Login'
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const theme = createTheme({
  primary: {
    main: '#ec407a',
  },
})



function App() {
  const [login, setLogin] = useState(false)

  return (
    <Router>
      <Switch>
        <Route path="/feed">
          <Header />
          <Stories />
          <Feed />
          <Footer />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

      </Switch>
    </Router>

    // <div className="App">

    //   {login &&
    //     <div>
    //       <Header />
    //       <Stories />
    //       <Feed />
    //       <Footer />
    //     </div>
    //   }

    //   {!login &&
    //     <Login />
    //   }


    // </div>
  );
}

export default App;
