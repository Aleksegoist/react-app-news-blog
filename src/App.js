import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';



const App = () => {
    return (
        <>
            <Header />
            <Routes>
                {/* <Route path='/' element={<Homepages />} /> */}
            </Routes>
        </>
    );
};

export default App;
