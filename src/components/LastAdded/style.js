import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f9f9fa;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 100px 10px;
  margin: auto;
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  color: #213342;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin: 50px 0;
`;

export const Card = styled.div`
  width: 400px;
  padding: 20px;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 10px 50px rgba(119, 152, 181, 0.4);
    border-radius: 10px;
    cursor: pointer;
  }
`;

Card.Img = styled.img``;

Card.Location = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  text-decoration-line: underline;
  color: #7798b5;
  margin-top: 20px;
`;

Card.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  color: #213342;
  margin-top: 10px;
  margin: 10px 0;
`;

Card.Details = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #212121;
  margin-top: 5px;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  @media (max-width: 770px) {
    gap: 20px;
  }
`;

CardWrapper.Line = styled.img`
  margin-top: 100px;
`;
