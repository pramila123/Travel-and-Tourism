import React from 'react';
import { UserConsumer } from '../context/UserContext';

const ComponentF = () => {
  return <div>
<UserConsumer>
    {
        (name=>
            {
                return <div>{name}</div>
            })
    }
</UserConsumer>

  </div>;
};

export default ComponentF;
