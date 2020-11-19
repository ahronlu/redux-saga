import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Container } from "semantic-ui-react";
import Item from "./Item";
import { requestApiData } from "./actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestApiData());
  }, [dispatch]);

  const { results } = useSelector((state) => state.data);

  return (
    <Container>
      <Card.Group itemsPerRow={6}>
        {results && results.map((x, i) => <Item key={i} i={i} x={x} />)}
      </Card.Group>
    </Container>
  );
};

export default Home;
