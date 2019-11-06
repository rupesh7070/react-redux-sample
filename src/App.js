import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/axios/PostList";
import AgGridExample from "./components/ag-grid/AgGrid";
import SaveData from "./components/axios/SaveData";
import CakeContainer from "./components/cakeshop/components/CakeContainer";
import Provider from "react-redux/lib/components/Provider";
import store from "./components/cakeshop/store/Store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BookPage from "./components/bookProject/components/BookPage";
import Home from "./components/home/Home";
import Error from "./components/home/Error";
import Navigation from "./components/home/Navigation";
import Courses from "./components/pluralSightProject/Courses";
import CounterMath from "./components/pluralSightProject/CounterMath";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/cake" component={CakeContainer}/>
                    <Route path="/book" component={BookPage}/>
                    <Route path="/agGrid" component={AgGridExample}/>
                    <Route path="/course" component={Courses}/>
                    <Route path="/play" component={CounterMath}/>
                    <Route component={Error}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
