import React from 'react';
import axios from 'axios';
import { useState ,useEffect} from "react";
import Text from './text.js'
function View(){
    const [renderdata, setrenderdata] = useState([{userid:""}]);
  const axios = require('axios');
  
    useEffect(async () => {
    const result = await axios(
      'http://jsonplaceholder.typicode.com/todos',
    );
     setrenderdata([result.data]);

  },[]);


    const textList = renderdata.map( data => <Text text={data}/> )
    return <div>{textList}</div>
}
export default View;