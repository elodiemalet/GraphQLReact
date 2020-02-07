import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const PRODUCTS = gql`
    {
       products {
           id
           name
       } 
    }`;

const Product = () => {
    const  { loading, error, data } = useQuery(PRODUCTS,  { pollInterval: 1000000 });

    if (loading) return <p>Bouge po gamin !</p>;
    if (error) return <p>Y'a un obstac'</p>;

    return data.products.map(({id, name}) => <div key={id}>{name}</div>);
};

export default Product;
