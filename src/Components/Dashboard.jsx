import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Fetch } from "./FetchUsers";

const Dashboard = () => {
  const [query, setQuery] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const { isAuth, isAuth2 } = useSelector((state) => state, shallowEqual);

  const handleSearch = () => {
    Fetch(query).then((res) => {
      setUsers(res.data.items);
    });
  };

  // if (isAuth === "true" && isAuth2 === "true") {
  return isAuth2 ? (
    <div className="Dashboard">
      <div>
        <h1> Dashboard </h1>
        <input
          value={query}
          placeholder="Github User Name"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {users.map((item) => (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4 m-auto d-flex align=items-center  box">
                <img width="80px" src={item.avatar_url} alt="" />
                <h4>{item.login}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
export { Dashboard };
