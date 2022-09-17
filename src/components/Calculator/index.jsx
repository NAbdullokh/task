import React from "react";
import { Box, Box1, Box2, Container, Wrapper } from "./style";
import Button from "../../generic/Button";

const Calculator = () => {
  return (
    <Container>
      <Container.Title>Калькулятор тарифов и услуг</Container.Title>
      <Container.Desc>рассчитайте стоимость наших услуг</Container.Desc>
      <Box>
        <Box1>
          <Box.Title>Введите стоимость квартиры</Box.Title>
          <Box.Input type="number" placeholder="Enter Price..." props="90%" />
          <Wrapper props="20px">
            <Wrapper props="10px">
              <input name="text" type="radio" />
              <Wrapper.Text>USD</Wrapper.Text>
            </Wrapper>
            <Wrapper props="10px">
              <input name="text" type="radio" />
              <Wrapper.Text>BYR</Wrapper.Text>
            </Wrapper>
          </Wrapper>
        </Box1>
        <Box2>
          <Box.Title>Стоимость услуг </Box.Title>
          <Wrapper props="20px">
            <Box.Input type="number" props="30%" placeholder="%" />
            <Wrapper.Text>или</Wrapper.Text>
            <Box.Input type="number" props="42%" placeholder="Percent" />
          </Wrapper>
          <Button mt="10" width="140px">
            Cвязаться
          </Button>
        </Box2>
      </Box>
    </Container>
  );
};

export default Calculator;
