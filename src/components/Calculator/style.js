import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
Container.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  text-align: center;
  color: #213342;
`;

Container.Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #212121;
  margin-top: 10px;
`;

export const Box = styled.div`
  width: 100%;
  background: #213342;
  border-radius: 10px;
  margin-top: 50px;
  display: flex;
  padding: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

Box.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 20px;
`;

Box.Input = styled.input`
  border: none;
  outline: none;
  height: 40px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 20px;
  width: ${({ props }) => props};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #213342;
  margin-bottom: 20px;
`;

export const Box1 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ props }) => props};
  align-items: center;
`;

Wrapper.Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;

export const Box2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

export const BtnWrapper = styled.div``;
