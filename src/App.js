import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/axios/PostList";
import AgGridExample from "./components/ag-grid/AgGrid";
import SaveData from "./components/axios/SaveData";
import CakeContainer from "./components/cakeshop/components/CakeContainer";
import Provider from "react-redux/lib/components/Provider";
import store from "./components/cakeshop/store/Store";


function App() {
  return (
      <Provider store={store}>
          <div>
              <CakeContainer/>>
          </div>
      </Provider>
  );
}
export default App;
