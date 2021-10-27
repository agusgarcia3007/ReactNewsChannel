import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  return ( 
    <>
      <Header title='React News App'/>

      <div className="container white">
        <Form />
      </div>
    </>
   );
}
 
export default App;