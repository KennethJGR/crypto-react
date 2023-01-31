import React from "react";
import styled from "@emotion/styled";

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
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #3c89fd;
        cursor: pointer;
    }

`;

const Form = () => {
    return (
        <form>
            <InputSubmit type="submit" value="Save" />
        </form>
    );
};

export default Form;
