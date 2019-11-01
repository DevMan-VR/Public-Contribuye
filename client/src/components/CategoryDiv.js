import React from 'react';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import '../css/Utility.css'

const CategoryDiv = ({title, category, itemList}) => (

    
    <NavLink to={`/services/${category}`} activeClassName="selected">
            <button className={"w-100 h-100 category-div "+category} >
                <div >
                    <div>
                    <h3>
                        {title}
                    </h3>
                    </div>
                    <div>
                        <ul>
                            {itemList.map(item => (
                                <li key={item.title}>{item}</li>
                            ))}
                        </ul>
                    </div>
                
                </div>
            
            
            </button>
        
    </NavLink>

)

export default CategoryDiv;