import React from "react";
import styled from "@emotion/styled";

const ResultDiv = styled.div`
  color: #fff;
  font-family: Lato, sans-serif;
  display: flex;
`;

const Info = styled.p`
  font-size: 1.2rem;
  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 2rem;
  span {
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: block;
  margin-top: 2rem;
`;

const Result = ({ resultAPI }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultAPI;

  return (
    <div>
      <ResultDiv>
        <Image src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="Crypto" />
        <div>
          <Price>
            Current price is: <span>{PRICE}</span>{" "}
          </Price>
          <Info>
            Highest price of the day is: <span>{HIGHDAY}</span>{" "}
          </Info>
          <Info>
            Lowest price of the day is: <span>{LOWDAY}</span>{" "}
          </Info>
          <Info>
            Change in price in 24hrs: <span>{CHANGEPCT24HOUR}</span>{" "}
          </Info>
          <Info>
            Lastest update is: <span>{LASTUPDATE}</span>{" "}
          </Info>
        </div>
      </ResultDiv>
    </div>
  );
};

export default Result;
