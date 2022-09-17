import React from "react";
import { houseData } from "../../mock/houseData";
import location from "../../assets/icon/location.svg";
import sq from "../../assets/icon/sq.svg";
import price from "../../assets/icon/price.svg";
import downLine from "../../assets/icon/downLine.svg";
import linegraph from "../../assets/icon/linegrapgh.svg";
import { BtnWrapper, Card, CardWrapper, Container, Wrapper } from "./style";
import Button from "../../generic/Button";

const LastAdded = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Title>Последняя добавленная недвижимость</Container.Title>
        <CardWrapper>
          {houseData.map((value) => {
            return (
              <Card key={value.id}>
                <Card.Img src={value.img} alt={value.title} />
                <Card.Location>
                  <img src={location} alt="" /> {value.location}
                </Card.Location>
                <Card.Title>{value.title}</Card.Title>
                <Card.Details>
                  <img src={sq} alt="" /> {value.sq}
                </Card.Details>
                <Card.Details>
                  <img src={price} alt="" /> {value.price}
                </Card.Details>
              </Card>
            );
          })}
          <BtnWrapper>
            <Button width={"340px"}>Полный каталог недвижимости</Button>
            <Button width={"340px"} type="primary">
              Аналитика цен за 1 кв.м.{" "}
              <img style={{ marginLeft: "10px" }} src={linegraph} alt="" />
            </Button>
          </BtnWrapper>
        </CardWrapper>
        <img src={downLine} alt="" />
      </Container>
    </Wrapper>
  );
};

export default LastAdded;
