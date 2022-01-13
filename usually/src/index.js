import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Array_obj from './Array';
import './index.css';


ReactDOM.render(
<React.Fragment>

<h1 className="heading_style">List of top five Netflix Series </h1>
<Card
 imgsrc={Array_obj[0].imgsrc}
  title={Array_obj[0].title}
  link={Array_obj[0]. link}
  name={Array_obj[0]. name}/>
<Card 
 imgsrc={Array_obj[1].imgsrc}
  title={Array_obj[1].title}
  link={Array_obj[1]. link}
  name={Array_obj[1]. name}/>
<Card 
 imgsrc={Array_obj[2].imgsrc}
  title={Array_obj[2].title}
  link={Array_obj[2]. link}
  name={Array_obj[2]. name}/>

</React.Fragment>,
document.getElementById("root")
)


































