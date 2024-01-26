import { Route , Routes} from 'react-router-dom';
import './App.css'
import Login from './components/Login/Login.jsx';
import Home from './components/Home/Home.jsx';
import Comands from './components/Comands/Comands.jsx';
import Notes from './components/Notes/Notes.jsx';
import Note from './components/Note/Note.jsx';
import Detail from './components/Detail/Detail.jsx';
import Archived from './components/Archived/Archived.jsx';
import Form from "./components/Form/Form.jsx";
import FormPut from './components/FormPut/FormPut.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';

const App = () => {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/comands" element={<Comands />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/note" element={<Note />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/archived" element={<Archived />} />
                <Route path="/create" element={<Form/> } />
                <Route path="/edit/:id" element={<FormPut/> } />
                <Route path="/navigation" element={<NavigationBar /> } />
            </Routes>
        </div>
    )
}


export default App
