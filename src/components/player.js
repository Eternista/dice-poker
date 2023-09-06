import React, { useState, useEffect } from 'react';


function Player({trigger}) {

    const [values, setValues] = useState([
        {
            id: Math.floor(Math.random() * 1000),
            check: false,
            value: Math.floor(Math.random() * 6 + 1),
            rolled: false
        },
        {
            id: Math.floor(Math.random() * 1000),
            check: false,
            value: Math.floor(Math.random() * 6 + 1),
            rolled: false
        },
        {
            id: Math.floor(Math.random() * 1000),
            check: false,
            value: Math.floor(Math.random() * 6 + 1),
            rolled: false
        },
        {
            id: Math.floor(Math.random() * 1000),
            check: false,
            value: Math.floor(Math.random() * 6 + 1),
            rolled: false
        },
        {
            id: Math.floor(Math.random() * 1000),
            check: false,
            value: Math.floor(Math.random() * 6 + 1),
            rolled: false
        }
    ]);

    const setDice = (data) => {
        setValues((prevValues) => {
            return prevValues.map((dice) => {
              if (dice === data && dice.rolled !== true) {
                return {
                  ...dice,
                  check: !dice.check,
                };
            } else {
                return dice;
            }
        });
    });
    }

    
    const roll = () => {
        setValues((prevValues) => {
            return prevValues.map((dice) => {
                if(dice.check == true) {
                    return {
                        id: dice.id,
                        check: false,
                        value: Math.floor(Math.random() * 6 + 1),
                        rolled: true
                    }
                } else {
                    return {
                        id: dice.id,
                        check: false,
                        value: dice.value,
                        rolled: true
                    }
                }
            });
        });
    }
    useEffect(() => {
        if(trigger) {
            roll();
        }
    }, [trigger])


    return (
        <section className="single-player">
            <div className='dices'>
                {
                    
                    values.map((dice, index) => 
                    (
                        <div className='dice' key={index} data-check={dice.check} onClick={(() => { setDice(dice)})}>
                                {dice.value}                           
                                {dice.check}                           
                            </div>
                        )
                    )
                    
                }

            </div>
        </section>
    );
  }
  
 


  export default Player;
  