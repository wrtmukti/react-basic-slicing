import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Card(props) {
  const [users, setUsers] = useState([])
  const getUsers = async() => {
    try {
      let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${props.number}`)
      setUsers(response.data)

    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(()=> {
    getUsers();
  }, [])

  const imgProfile = {
    backgroundColor: "black",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "100%",
    height: "100px",
    width: "100px",
    overflow: "hidden",
  }
  return (
    <div className="col-md-4 mb-8 mb-md-0">
      <div className="card card-span h-100 shadow-lg" style={{ borderRadius : "20px" }}>
      <div className="card-span-img"><img src={props.image} alt="" style={imgProfile}/></div>
      <div className="card-body d-flex flex-column flex-center py-6">
        <div className="my-4">
        <p className="card-text fw-semi-bold text-center text-1000 px-4">{users.name}</p>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item me-0">
              <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </li>
            <li className="list-inline-item me-0">
              <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </li>
            <li className="list-inline-item me-0">
              <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </li>
            <li className="list-inline-item me-0">
              <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </li>
            <li className="list-inline-item me-0">
              <svg className="bi bi-star-fill" xmlns="http://www.w3.org/2000/svg" width={28} height={26} fill="#FF974D" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"> </path>
              </svg>
            </li>
          </ul>
        </div>
        
        <p className="card-text text-center text-1000 px-4">I love Jobest, easy platform to use,fantasic staff and nothing but great results!</p>
      </div>
    </div>
    </div>
  );
}

export default Card;