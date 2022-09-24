import React, { useState, useRef, useEffect } from "react";


import Create from './Create';
import Listing from "./Listing";
import Pagination from "./Paginate";
import Select from "../Views/Select";

const Category = ({ data, setAction,close, action,toggle }) => {
  
    //state hook to check if no search result found
  const [to, setTo] = useState(true);

  //state array hook for searched data and pagination
  const [sorted, setSorted] = useState([...data[0]]);
  
  //pagination hooks
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
 
  
  //function to handle Search
  const handleSearch = () => {
    var l1 = document.querySelector("#notes").value
    var dt = document.querySelector('.selectt').innerText

    var searched = data[0].filter(
      (e) => e.note == l1 && e.category==dt
    );
    
    //update state array hook of searched data
    setSorted(searched);
    
    //checking if no result found
    if (searched.length == 0) {
      setTo(false);
    } else {
      setTo(true);
    }
  };

  //pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = (indexOfLastPost) - postsPerPage;
  const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);

  //pagination function will passed to paginate component
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  //delete function will passed to Listing component
  const delte=(e)=>{data[0]=[...data[0].slice(0,e),...data[0].slice(e+1,data[0].length)];console.log(data[0]);setSorted(data[0]);localStorage.setItem('data',JSON.stringify(data[0]))};
  
  //edit function will passed to Listing component
  const edit=(e)=>{console.log(e); setAction(e)};

  //update function will passed to Create component
  const update=(e)=>setSorted(e)
  
  console.log(currentPosts)
  //setSorted(currentPosts);


  return (
    <div>
        {/* component to create notes */}
        <Create data={data} toggle={toggle} action={action} close={close} update={update}/>

        {/* elements for search component */}
      <div className="grid21">
        <div className="g6">
          <div className="qwer">
            <input
            id="notes"
              className="form-control"
              type="text"
              placeholder="Notes to search"
              aria-label="default input example"
            ></input>
          </div>
          <div className="qwer">

            {/*Customally build Select component for category. */}
          <Select defaultValue='Todo' location={['Todo','Habit','Event']} />

          </div>

          <div className="qw">
            <a onClick={handleSearch}>
              <div className="search">Search</div>
            </a>
          </div>
        </div>
      </div>


      <div className="grid21" style={{ display: to === true ? "none" : "block" }}>
        <h4>Nothing to show.. add notes!</h4>
      </div>

      {/* Listing component to display data */}
      <Listing data={currentPosts} edit={edit} delte={delte} />

      {/* Pagination component to paginate the data*/}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={sorted.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Category;
