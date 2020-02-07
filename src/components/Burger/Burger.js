import React from 'react';

import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const Burger = (props) => {

    //Object.keys() = extrai as keys de um objeto e transforma em array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            //transformar a quantidade de ingredientes em multiplas strings no array
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            }); //a quantidade de elementos no array é = a quant dos ingredientes
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        //object
        //key = qual tip de ingrediente
        //value = quantidade do ingrediente

    if (transformedIngredients.length ===0 ) {
        transformedIngredients = <p>Please start add ingredients</p>
    }

    return (
        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;