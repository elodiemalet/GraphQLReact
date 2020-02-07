import React from 'react';
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const ADD_CART = gql`
    mutation AddCart($productInput: ProductInput, $cartId: Int) {
        addToCart(productInput: $productInput, cartId: $cartId) {
            error
        }
    }   
`;

const AddCart = () => {
    const [addCart, {data}] = useMutation(ADD_CART);
    return <div><button onClick={e => {
        e.preventDefault();
        addCart({
            variables: {
                "productInput" : {
                    productId: 1
                },
                "cartId": 1
            }
        })
    }
    }>j'en veux</button></div>;
}

export default AddCart;