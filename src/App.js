import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"

import Users from "./components/users.component.js";

function App() {
  return (
    <Router>
      <Route path="/users" component={Users} />
    </Router>
  );
}

export default App;
