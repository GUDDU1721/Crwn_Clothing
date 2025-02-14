import React from 'react'
import MenuItem from "../menu-item/menuItem";
import "./Directory.css"
// import axios from 'axios';
import { fetchData } from '../../redux/category/action';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// const categories = [
//     {
//       "id": 1,
//       "title": "hats",
//       "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
//       "route":'shop/hats'
//     },
//     {
//       "id": 2,
//       "title": "jackets",
//       "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
//       "route":'shop/jackets'
//     },
//     {
//       "id": 3,
//       "title": "sneakers",
//       "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
//       "route":'shop/sneakers'
//     },
//     {
//       "id": 4,
//       "title": "womens",
//       "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
//       "route":'shop/womens'
//     },
//     {
//       "id": 5,
//       "title": "mens",
//       "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
//       "route":'shop/mens'
//     }
//   ];


const Directory = () => {
  // const [data, setData] = useState([]);
  const dispatch=useDispatch();
  const data=useSelector(state=>state.category.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //       getdata();
  //   }, [])

  //   const getdata = () => {
  //     axios.get("http://localhost:7000/category/findall")
  //           .then((result) => {
  //               setData(result.data)
  //               console.log(result.data);
  //           })
  //           .catch((error) => {
  //               console.log(error)
  //           })
  //   }

  return (
    <div className="directory-menu">
      {data.map((category)=>(
            <MenuItem key={category.id} category={category}/>   
        ))
        }
    </div>
  )
}

export default Directory
