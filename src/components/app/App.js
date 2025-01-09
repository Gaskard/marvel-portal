import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";

import { MainPages, ComicsPage, Page404, SingleComicPage } from "../pages";
import { StrictMode } from "react";

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/' element={<MainPages/>}/>
                    <Route path="comics">         
                        <Route index element={<ComicsPage/>}/>                             
                        <Route path=":id" element={<SingleComicPage/>}/>
                    </Route>

                        <Route path='*' element={<Page404/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;