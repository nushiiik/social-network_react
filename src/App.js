import './App.css';
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header />
                <Aside />
                <div className="appContent">
                    <Routes>
                        <Route element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} path="/profile" />
                        <Route element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} path="/dialogs/*" />
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
