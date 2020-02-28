import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    //constructor(props){
    //    super(props);
    //    this.state = {...}
    //}

    state = {
        ingrendients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState () {
        //copia o state atual dos ingredientes
        const ingredients = {
            ...this.state.ingrendients
        };
        //cria um array com a quantidade dos ingredientes
        const sum = Object.keys(ingredients)
        .map(igKey => { //acessa a quantidade de ingredientes em cada item
            return ingredients[igKey];
        })
        .reduce((sum, el) => { //soma todos os elementos do array em sum
            return sum +el;
        }, 0);
        this.setState({purchasable: sum > 0}); //se sum > 0 => purchaseble == true
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingrendients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingrendients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingrendients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingrendients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    };

    render () {
        return(
            <Aux>
                <Burger ingredients={this.state.ingrendients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default BurgerBuilder;