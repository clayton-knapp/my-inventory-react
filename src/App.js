import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  NavLink,
  Redirect,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthPage from './pages/AuthPage';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';
import DetailPage from './pages/DetailPage';
import { logout } from './services/fetch-utils';


function App() {
  //store user in state
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  //grab user from localStorage token on load
  useEffect(() => {
    const user = localStorage.getItem('supabase.auth.token');
    setUser(user);
  }, []);
  

  async function handleLogout() {
    await logout();
    setUser(null);
  }


  return (
    <Router>
      <div className="App">
        <h2>Equipment Inventory App</h2>
        <header>
          {
            user && <ul style={{ listStyle: 'none' }}>
              <li>
                <NavLink to='/list'
                  activeClassName='active-class'
                >List Page</NavLink>
              </li>
              <li>
                <NavLink to='/create'
                  activeClassName='active-class'
                >Create Page</NavLink>
              </li>
              <button
                onClick={handleLogout}
              >Log Out</button>
            </ul>
          }
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              {
                user
                  ? <Redirect to='/list' />
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path='/list'>
              {
                user
                  ? <ListPage />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/create'>
              {
                user
                  ? <CreatePage />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/detail/:id'>
              {
                user
                  ? <DetailPage user={user}/>
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/update/:id'>
              {
                user
                  ? <UpdatePage />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </main>


      </div>
    </Router>
  );
}

export default App;
