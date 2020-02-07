import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CART = gql`
    {
        cartById(id: 1) {
            id
            cartproducts {
                id
                name
                quantity
                price
            }
            total
        }

    }`;

const Cart = () => {
    const  { loading, error, data } = useQuery(CART,  { pollInterval: 1000 });

    if (loading) return <p>Bouge po gamin !</p>;
    if (error) return <p>Y'a un obstac'</p>;

    return data.cartById.cartproducts.map(({id, name}) => <div key={id}>{name}</div>);
};

export default Cart;
