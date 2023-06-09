import { Route, Routes } from "react-router-dom";
import * as gameService from "./services/gameService";
import Catalog from "./components/Catalog/Catalog";
import Create from "./components/CreateGame/Create";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => setGames(result))
  }, []);

  return (
    <div className="App">

      <div id="box">
        <Header />
       
        <main id="main-content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/create-game" element={<Create />} />
              <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
        <Footer />
      </div>

      {/* <!-- Login Page ( Only for Guest users ) --> */}
      {/* <!-- Register Page ( Only for Guest users ) --> */}
      {/* <!-- Create Page ( Only for logged-in users ) --> */}
      {/* <!-- Edit Page ( Only for the creator )--> */}
    
      {/* <!--Details Page--> */}
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

          <div className="game-header">
            <img className="game-img" src="images/MineCraft.png" alt="" />
            <h1>Bright</h1>
            <span className="levels">MaxLevel: 4</span>
            <p className="type">Action, Crime, Fantasy</p>
          </div>

          <p className="text">
            Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
            with an Orc to find a weapon everyone is prepared to kill for. Set in a world where fantasy
            creatures live side by side with humans. A human cop is forced
            to work with an Orc to find a weapon everyone is prepared to kill for.
          </p>

          {/* <!-- Bonus ( for Guests and Users ) --> */}
          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* <!-- list all comments for current game (If any) --> */}
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            <p className="no-comment">No comments.</p>
          </div>

          {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
          <div className="buttons">
            <a href="#" className="button">Edit</a>
            <a href="#" className="button">Delete</a>
          </div>
        </div>

        {/* <!-- Bonus -->
              <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
          <label>Add new comment:</label>
          <form className="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input className="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>

      </section>
    </div>
  );
}

export default App;
