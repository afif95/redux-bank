import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(store) {
  return {
    balance: store.account.balance,
  };
}

// before useSelector: classical method
export default connect(mapStateToProps)(BalanceDisplay);
