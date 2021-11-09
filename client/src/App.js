import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

// imported during 21.4.3
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
// imported during 21.4.3
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SingleThought from "./pages/SingleThought";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

// You swapped this
// const httpLink = createHttpLink({
//   uri: "http://localhost:3001/graphql",
// });

// for this
const httpLink = createHttpLink({
  uri: "/graphql",
});
// and got an error

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          {/* <Home /> */}
          <div className="container">
            <Routes>
              {/* the problem is here, line 46 renders correctly 
              but these following routes do not. I need to fix the follow
              routes to get them to render. 
              watch a youtube video on react-router-dom
              routes/route tutorial
              also the module says to use Switch and not Routes
              but as of v6 i'm supposed to use Routes */}
              <Route path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/profile/:username?" element={<Profile />} />
              <Route exact path="/thought/:id" element={<SingleThought />} />
              <Route exact path="*" element={<NoMatch />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
