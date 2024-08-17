import "./App.css";
import CreateCustomer from "./features/features/customers/CreateCustomer";
import Customer from "./features/features/customers/Customer";
import AccountOperation from "./features/features/accounts/AccountOperations";
import BalanceDisplay from "./features/features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake_dark_mode");
    },
    [isFakeDark]
  );

  return (
    <div>
      
      <h1>🏦 The React-Redux Bank ⚛️ <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn_fake_dark_mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button></h1>

      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperation />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
