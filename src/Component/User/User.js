import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Action/user";
import Card from "../../Component/Card/Card";
import "./user.css";

const User = () => {
  const [search, setSearch] = useState("");
  const [page, setNewPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [sortByTitle, setSortByTitle] = useState(false);
const [sortByDate, setSortByDate] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const pageofLastUser = page * usersPerPage;
  const pageofFirstUser = pageofLastUser - usersPerPage;
  const currentUser = users.slice(pageofFirstUser, pageofLastUser);

  const paginate = (pageNumber) => {
    setNewPage(pageNumber);
  };

  let sortedUsers = [...currentUser];

  if (sortByTitle) {
    sortedUsers = sortedUsers.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortByDate) {
    sortedUsers = sortedUsers.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }
  
  const filteredUsers = sortedUsers.filter((user) => {
    const { title, body } = user;
    const searchTerm = search.toLowerCase();
  
    return (
      title.toLowerCase().includes(searchTerm) ||
      body.toLowerCase().includes(searchTerm)
    );
  });
  const handleSortByTitle = () => {
    setSortByTitle(true);
    setSortByDate(false);
  };
  
  const handleSortByDate = () => {
    setSortByTitle(false);
    setSortByDate(true);
  };
  
  return (
    <>
      <div className=" container py-2 my-4">
        <div className="d-flex justify-content-center">
        <input
          className="search_bar"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setNewPage(1);
          }}
        />
        </div>

        <button className="filteredbtns" onClick={handleSortByTitle}>Sort by Title</button>
    <button className="filteredbtns" onClick={handleSortByDate}>Sort by Date</button>
      
      </div>
      <div className="row">
      {filteredUsers.length > 0 ? (
       
       filteredUsers.map((user) => (
         <div className="col-lg-4 col-md-6">
          <div className="card-container">
           <Card user={user} key={user.id} />
           </div>
         </div>
       ))
     ) : (
       <p>No users</p>
     )}
      {users.length === 0 && loading === true ? <p>Loading...</p> : null}
      {error !== null && !loading === true ? <p>{error.message}</p> : null}
      </div>
   
     
      <div className="d-flex justify-content-center">
        {users.length > usersPerPage && (
          <ul className="pagination">
            {Array.from({
              length: Math.ceil(users.length / usersPerPage),
            }).map((_, index) => (
              <li key={index}>
                <button
                  className={page === index + 1 ? "active" : ""}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default User;
