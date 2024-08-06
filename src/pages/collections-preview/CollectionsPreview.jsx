import React from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
// import shopData from '../../Shop_data'
// import {fetchData}  from '../../redux/category/action';
import { useSelector} from 'react-redux';
import './CollectionsPreview.css'
const CollectionsPreview = () => {

  const data=useSelector(state=>state.category.data);

  return (
    <>
      <div className="collection-overview">
      {data.map(({ id, ...otherCollectionsProps }) => (
        <CollectionPreview key={id} {...otherCollectionsProps} />
      ))}
    </div>
    </>
  )
}

export default CollectionsPreview