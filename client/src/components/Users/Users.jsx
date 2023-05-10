import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import User from '../User/User';
import { getUsers } from '../../redux/actions';

const Users = () => {

  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const Users = useSelector((state) => state.UsersCopy)
  const resultsPerPage = 15
  const numberOfResults = Users.length
  const numberOfPages = numberOfResults ? Math.ceil(numberOfResults / resultsPerPage) : 0
  const [pageNumber, setPageNumber] = useState(1)
  const pageSliceStart = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage
  const pageSliceEnd = pageNumber * resultsPerPage

  const dispatch = useDispatch()
  useEffect(() => {
    setPageNumber(1)
  }, [numberOfResults])
  useEffect(() => {
    getUsers()
    const getData = async ( ) => {
      return dispatch(getUsers())
    }
    
  
    setProducts(getData());
  }, []);


  return (
    <div>
        <div>
            <h1>Users in database</h1>
        </div>
        <div>
        {
          Users.length ?
             Users.slice(pageSliceStart, pageSliceEnd).map(user => (<User key={user._id} user={user} />)) : null 
        }
        </div>
    </div>
  )
};

export default Users;