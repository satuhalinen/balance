import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "./store/balanceSlice";
import { useRef } from "react";

const Balance = () => {
  const inputRef = useRef(); 
  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();

  return (
    <>
      <input ref={inputRef} type="text"></input>
      <button onClick={() => dispatch(deposit(Number(inputRef.current.value)))}>
        Deposit
      </button>
      <button
        onClick={() => dispatch(withdraw(Number(inputRef.current.value)))}
      >
        Withdraw
      </button>
      <p>Balance: {balance} €</p>
    </>
  );
};

export default Balance;
