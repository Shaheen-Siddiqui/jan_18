import React from 'react';
import Card from './Card';
import Array_obj from './Array';

function User_friend(props) {
    return(
        <Card 
            imgsrc={Array_obj[0].imgsrc}
            title={Array_obj[0].title}
            link={Array_obj[0].link}
            name={Array_obj[0].name}
        />
    )

}
export default User_friend;