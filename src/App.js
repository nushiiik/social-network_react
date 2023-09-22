import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header />
                <Aside />
                <div className="appContent">
                    <Routes>
                        <Route element={<Profile store={props.store} />} path="/profile" />
                        <Route element={<DialogsContainer store={props.store} />} path="/dialogs/*" />
                        <Route element={<News />} path="/news" />
                        <Route element={<Music />} path="/music" />
                        <Route element={<Settings />} path="/settings" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
