import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 10px 10px;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

Container.Logo = styled.img`
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Phone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;
Phone.Number = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #213342;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
