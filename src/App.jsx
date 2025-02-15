import './App.css';
import HomePage from './components/home-page';
/* import Login from './components/login';
import { useState } from 'react'; */

function App() {
    /* const [isLoggedIn, setIsLoggedIn] = useState(false);

    const showHomePage = () => {
        setIsLoggedIn(true);
    }; */

    return (
        <>
           {/*  {isLoggedIn ? <HomePage /> : <Login onLogin={showHomePage} />} */}
            <HomePage />
        </>
    );
}

export default App;

