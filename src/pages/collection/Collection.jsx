import React, { useEffect } from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './Collection.css';
import { useParams } from 'react-router';
// import axios from 'axios';
import {fetchData}  from '../../redux/category/action';
import { useSelector, useDispatch } from 'react-redux';

const Collection = () => {
  // const [data, setData] = useState([]);
  const { collection } = useParams();
  const dispatch=useDispatch();

  const data=useSelector(state=>state.category.data);
  const error=useSelector(state=>state.category.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if(error){
    return <div>Error:{error}</div>
  }

  // useEffect(() => {
  //   getData();
  // }, []);

  // Fetch data from the server
  // const getData = () => {
  //   axios.get("http://localhost:7000/category/findall")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // };

  const title = collection.toUpperCase();
  const categoryData = data.find(category => category.title.toUpperCase() === title);
  const items = categoryData ? categoryData.items : [];

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
