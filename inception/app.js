import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";


/**
 * Header
 *  - Logo
 *  - Navigation
 * Body
 *  - Search bar
 *  - Product Container
 *    - Product Card
 * Footer
 *  - Social Links
 *  - Copy Right
 * 
 */



const App = () => {
  return (<>
<Provider store={appStore}>
  <div className="app">
    <Header/>    
  </div>
</Provider>
  </>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);