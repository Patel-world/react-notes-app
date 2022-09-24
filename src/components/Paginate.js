import React, { useState } from 'react';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";



const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const[active, setActive] = useState('page-link')
  const [isActive, setIsActive] = useState(1);
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  

  return (
    <nav>
      <ul className='pagination'>
      <li className='page-item'>
            <a onClick={() => {paginate(currentPage-1); setIsActive(currentPage-1)}} style={{display: currentPage>=2 ? 'block' : 'none',}} className={active}>
              <FiChevronsLeft id='arrow'/>
            </a>
          </li>
       
        {pageNumbers.slice(currentPage-1, currentPage+4).map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => {paginate(number); isActive===number?setIsActive(false):setIsActive(number)}} id={number} style={{backgroundColor: isActive===number ? '#dc3545' : '#ffff',}} className={active}>
              {number}
            </a>
          </li>
        ))}
     
        <li className='page-item'>
            <a onClick={() => {paginate(currentPage+1); setIsActive(currentPage+1)}} className={active}>
            <FiChevronsRight id='arrow'/>
            </a>
          </li>
        </ul>
    </nav>
  );
};

export default Pagination;