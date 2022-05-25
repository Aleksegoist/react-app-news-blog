import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import Homepages from './components/home/Homepages';



const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Homepages />} />
            </Routes>
        </>
    );
};

export default App;
