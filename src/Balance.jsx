import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "./store/balanceSlice";

const Balance = () => {
  const balance = useSelector((state) => state.balance.balance);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(deposit())}>Deposit</button>
      <button onClick={() => dispatch(withdraw())}>Withdraw</button>
      <p>Balance: {balance} €</p>
    </>
  );
};

export default Balance;
