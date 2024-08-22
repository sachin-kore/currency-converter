import './style.css';

import { useEffect, useState } from "react";
import InputItem from '../../components/InputItem';
import SelectItem from '../../components/SelectItem';
export default function App() {
  const [amount, setAmount] = useState(10);
  const [fromValue, setFromValue] = useState("USD");
  const [tooValue, setTooValue] = useState("EUR");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const URL = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromValue}&to=${tooValue}`;
    const response = await fetch(URL);
    const data = await response.json();
    setData(data?.rates[tooValue]);
    setLoading(false);
  };


  useEffect(() => {
    if (fromValue === tooValue) return setAmount(data);
    fetchData();
  }, [amount, fromValue, tooValue]);
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <div className="input-items">
        <InputItem
          disabled={loading}
          className="selector"
          amount={amount}
          type="text"
          setAmount={setAmount} />
        <SelectItem
          disabled={loading}
          className="selector"
          value={fromValue}
          currencyValues={setFromValue} />

        <SelectItem
          disabled={loading}
          className="selector"
          value={tooValue}
          currencyValues={setTooValue} />

        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <h3 className="result">
            {data?.toLocaleString()}
            {" " + tooValue}
          </h3>
        )}

      </div>
    </div>
  );
}