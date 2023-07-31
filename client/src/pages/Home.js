import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome, userName</h1>
      <img src="" />
      <div>
        <p>Which child is traveling with you today?</p>
        <div className="children-list">
          <div>
            <label for="checkbox-id">Child 1</label>
            <input
              type="checkbox"
              id="checkbox-id"
              name="checkbox-name"
              value="checkbox-value"
            ></input>
          </div>
          <div>
            <label for="checkbox-id">Child 2</label>
            <input
              type="checkbox"
              id="checkbox-id"
              name="checkbox-name"
              value="checkbox-value"
            ></input>
          </div>
          <div>
            <label for="checkbox-id">Child 3</label>
            <input
              type="checkbox"
              id="checkbox-id"
              name="checkbox-name"
              value="checkbox-value"
            ></input>
          </div>
          <Link to="/kids">
            <button className="">Edit list</button>
          </Link>
        </div>
      </div>
      <div className="">
        <p>What is your budget?</p>
        <input className="form-input" placeholder="$0.00" type="currentcy" />
      </div>
      <div className="">
        <p>What flight are you on?</p>
        <input className="form-input" placeholder="flight number" />
      </div>
      <Link to="/matches">
        <button className="">Search</button>
      </Link>
    </div>
  );
};

export default Home;
