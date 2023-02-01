import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
  text-align: center;
`;

const useSelectCoin = (label, opt) => {
    const [state, setState] = useState("");

    const SelectCoin = () => (
        <>
            <Label htmlFor="">{label}</Label>
            <Select
                name=""
                id=""
                value={state}
                onChange={(e) => setState(e.target.value)}
            >
                <option value="">Select currency</option>

                {opt.map((coin) => (
                    <option key={coin.code} value={coin.code}>
                        {coin.name}
                    </option>
                ))}
            </Select>
        </>
    );

    return [state, SelectCoin];
};

export default useSelectCoin;
