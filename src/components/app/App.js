import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import AppHeader from "../appHeader/AppHeader";

import { MainPages, ComicsPage } from "../pages";

const App = () => {

    return (
        <Router>
        <div className="app">
            <AppHeader/>
            <main>
                <Switch>
                    <Route exact path='/'>
                        <MainPages/>
                    </Route>
                    <Route exact path='/comics'>
                        <ComicsPage/>
                    </Route>
                </Switch>
            </main>
        </div>
        </Router>
    )
}

export default App;