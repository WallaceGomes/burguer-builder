import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
        }
    }

    render () {
        return(
            <Aux>
                <Burger ingredients={this.state.ingrendients} />
                <BuildControls/>
            </Aux>
        );
    }
}

export default BurgerBuilder;