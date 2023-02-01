import React from "react";
import { coins } from "../data/coins";
import styled from "@emotion/styled";
import useSelectCoin from "../hooks/useSelectCoin";
import { useEffect, useState } from "react";

const InputSubmit = styled.input`
  background-color: #66a2fe;
  text-transform: uppercase;
  border: none;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #3c89fd;
    cursor: pointer;
  }
`;

const Error = styled.p`
  background-color: #cf1818;
  padding: 1rem;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 10px;
`;

const Form = () => {
  const [crypto, setCrypto] = useState([]);
  const [error, setError] = useState(false);
  const [coin, SelectCoin] = useSelectCoin("Choose your coin", coins);
  const [cryptoCoin, SelectCryptoCoin] = useSelectCoin(
    "Choose your cryptocurrency",
    crypto
  );

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;

      const response = await fetch(url);
      const result = await response.json();

      const arrayCoins = result.Data.map((coin) => {
        return {
          code: coin.CoinInfo.Name,
          name: coin.CoinInfo.FullName,
        };
      });

      setCrypto(arrayCoins);
    };
    fetchAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (coin === "" || cryptoCoin === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
  };

  return (
    <>
      {error ? <Error className="error">All fields are required</Error> : null}

      <form onSubmit={handleSubmit}>
        <SelectCoin /> <SelectCryptoCoin />
        <InputSubmit type="submit" value="Save" />
      </form>
    </>
  );
};

export default Form;
