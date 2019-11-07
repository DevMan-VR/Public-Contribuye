import React, {useState,useRef} from 'react';
import { useSpring, animated } from 'react-spring';
import {NavLink} from 'react-router-dom';
import '../css/Utility.css'

const trans = (x, y, s) => `perspective(200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function CategoryDiv({title, category, itemList}){
    
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 200, friction: 70 } }));
    const ref = useRef();
    const [isHovered, setHovered] = useState(false)
    return (
      <animated.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
      const x = clientX - (ref.current.offsetLeft - (window.scrollX || window.pageXOffset || document.body.scrollLeft))
      const y = clientY - (ref.current.offsetTop - (window.scrollY || window.pageYOffset || document.body.scrollTop))
      const dampen = 1000 // Higher number => less rotation
      const xys = 
      [ 
        -(y - ref.current.clientHeight / 2) / dampen, // rotateX
        (x - ref.current.clientWidth / 2) / dampen, // rotateY
        1.07, // Scale
      ]
      set({ xys })
      }}
      onMouseLeave={() => 
      {
        setHovered(false)
        set({ xys: [0, 0, 1] })
      }}
      style={{ 
        zIndex: isHovered ? 2 : 1,
        transform: props.xys.interpolate(trans), 
      }}
      >
        <NavLink to={`/services/${category}`} activeClassName="selected">
            <button className={"category-div "+category} >
                
                <div>
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
    </animated.div>
  );
}

export default CategoryDiv;