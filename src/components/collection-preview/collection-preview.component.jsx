import React from 'react';
import "./collection-preview.styles.scss";
import CollectionItem from '../collection-item/collection-item.component';

export const CollectionPreview =({items, title})=>(
<div className="collection-preview">
    <div className="title"><h1>{title.toUpperCase()}</h1></div>
    <div className="preview">
        {items.filter((item, idx)=> idx<4).map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
</div>
);