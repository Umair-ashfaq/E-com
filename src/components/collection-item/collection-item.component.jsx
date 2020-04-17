import React from 'react';  
import './collection-item.styles.scss';


const collectionItem = ({imageUrl, name, price}) => (
<div className="collection-item">
    <div className="image" 
    style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="collection-footer">
         <span>{name}</span>
         <span>{price}</span>
    </div>
</div>
);

export default collectionItem;