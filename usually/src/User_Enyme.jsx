import React from 'react';
import Card from './Card';
import Array_obj from './Array';

function User_Enyme(props) {
    return(
        <Card 
            imgsrc={Array_obj[1].imgsrc}
            title={Array_obj[1].title}
            link={Array_obj[1].link}
            name={Array_obj[1].name}
        />
    )

}
export default User_Enyme;