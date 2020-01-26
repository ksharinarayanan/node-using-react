import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"

import UsersList from "./components/users.component.js";

function App() {
  return (
    <Router>
      <Route path="/users" component={UsersList} />
    </Router>
  );
}

export default App;
