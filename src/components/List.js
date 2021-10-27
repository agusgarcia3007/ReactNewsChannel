import React from 'react';
import New from './New';

const List = ({news}) => (
    <div className="row">

        {news.map( e => (
            <New
                key={e.url}
                New={e}
            />
        ))}
    </div>

)
    
 
export default List;