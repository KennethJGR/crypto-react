import { useState, useEffect } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";
import styled from "@emotion/styled";
import cryptoImage from "./img/imagen-criptos.png";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 2.5rem;
  &::after {
    content: "";
    width: 300px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [coins, setCoins] = useState({});
  const [resultAPI, setResultAPI] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const fetchAPI = async () => {
        setLoading(true);
        const { coin, cryptoCoin } = coins;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;

        const response = await fetch(url);
        const result = await response.json();

        setResultAPI(result.DISPLAY[cryptoCoin][coin]);

        setLoading(false);
      };
      fetchAPI();
    }
  }, [coins]);

  return (
    <Container>
      <Image src={cryptoImage} alt="crypto image" />

      <div>
        <Heading>Cryptocurrency state</Heading>
        <Form setCoins={setCoins} />

        {loading && <Spinner />}

        {resultAPI.PRICE && <Result resultAPI={resultAPI} />}
      </div>
    </Container>
  );
}

export default App;
