import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import apiCalls from "../config/api";
import Sneak from './Sneak';
import Drink from './Drink';
import Souse from './Souse';
// import { useParams } from 'react-router-dom';


export const Pizzalist = () => {


    const [pizza, setPizza ] = useState([]);
    const [sneak, setSneak ] = useState([]);
    const [ drink, setDrink] = useState([]);
    const [souse, setSouse] = useState([]);
    // const { id } = useParams();
    useEffect(() => {           
        const getPizza = async () => {
          try {
            const data = await apiCalls.getPizza();
            setPizza(data);
            // <loader/>
          } catch (error) {
            // setIsLoading(false);
            //   setError(error.message + 'xatolik');
            //   console.log(setError.message);
               };
        };  getPizza();  
        const getSneakes = async () => {
            try {
              const data = await apiCalls.getSneakes();
              setSneak(data);
              // <loader/>
            } catch (error) {
              // setIsLoading(false);
              //   setError(error.message + 'xatolik');
              //   console.log(setError.message);
                 };
          };  
          getSneakes();  
  
          const getDrinks = async () => {
          try {
            const data = await apiCalls.getDrinks();
            setDrink(data);
            // <loader/>
          } catch (error) {
            // setIsLoading(false);
            //   setError(error.message + 'xatolik');
            //   console.log(setError.message);
              //  };
        };  
       };
       getDrinks();
  
       const getSouse = async () => {
         try{
           const data = await apiCalls.getSouse();
           setSouse(data)
         }catch(error){
  
         };
       };
         getSouse();  
    }, []);

    return (
        <div className='cardList'>
            {
                pizza.map( el => <Card key={el.id} product={el} /> )
            }
             {
                sneak.map( el => <Sneak key={el.id} sneak={el} /> )
            }
            {
              drink.map(el => <Drink key={el.id} drink={el}  /> )
            }
            {
              souse.map(el => <Souse key={el.id} souse={el}/> )
            }
        </div>
    )
}