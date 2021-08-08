/* eslint-disable no-console */
import React/* , { useState} */ from 'react';
import s from './styles/app.component.css';

export const App = () => {
  // const [firstName, setFirstName] = React.useState(1);
  const [firstName, setFirstName] = React.useState(0);

  const handlerSubmit = (event) =>{
    event.preventDefault();

    console.log('TEST');
  }

  return (

    <div className={s.wrapper}>
 
        <div className={s.form}>

            <form className="name" onSubmit={handlerSubmit}>

                <label className='item' htmlFor='firstName'>

                    name:<input type="text" name='firstName value' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </label>
               <div>

                   <input className={s.btn} type="submit" value="Send" />

                </div>

                   </form>

         </div> 
    </div>
  );
};
