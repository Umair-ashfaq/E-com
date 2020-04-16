import React from 'react';
import MenuItem from '../menu-item/MenuItem.component';
import "./directory.styles.scss";

class Directory extends React.Component{
    constructor(){
        super();
         this.state={
         sections: [
             {title: 'hats',
             imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
             id: 1
            },
            {title: 'jackets',
             imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
             id: 2
            },
            {title: 'sneakers',
             imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
             id: 3
            },
            {title: 'women',
             imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
             id: 4,
             size: 'large'
            },
            {title: 'men',
             imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
             id: 5,
             size: 'large'
            },
         ]
         }
    }

    render (){
        return (
         <div className="directory-menu">
             {this.state.sections.map(({id, title, imageURL, size}) => (
                 <MenuItem key={id} title={title} image={imageURL} size={size}/>
             ))}
         </div>
        )
    }

}

export default Directory ;