import React from "react";
import { coins } from "../data/coins";
import styled from "@emotion/styled";
import useSelectCoin from "../hooks/useSelectCoin";
import { useEffect } from "react";

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

const Form = () => {
  const [coin, SelectCoin] = useSelectCoin("Choose your coin", coins);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;

      const response = await fetch(url);
      const result = await response.json();
      console.log(result.Data)
    };
    fetchAPI();
  }, []);

  const [SelectCrypto] = useSelectCoin("Choose your crypto", "", coin);

  return (
    <form>
      <SelectCoin />

      <InputSubmit type="submit" value="Save" />
    </form>
  );
};

export default Form;
