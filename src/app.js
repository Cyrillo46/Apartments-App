import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ApartmentPage from './pages/ApartmentPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/apartments/:id" component={ApartmentPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
