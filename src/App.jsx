import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Title from "./Title";
import EntryMain from "./EntryMain";
import AboutMySelf from "./AboutMySelf";
import Posts from "./Posts";
import Tags from "./Tags";

const App = () => {
  return(
      <div>
          <Header/>
          <div className="w3-row">
              <div className="w3-col l8 s12">
                  <Title/>
                  <EntryMain/>
              </div>
              <div className="w3-col l4">
                   <AboutMySelf/>
                   <Posts/>
                   <Tags/>
              </div>
          </div>
          <Footer/>
      </div>
  )
}

export default App;