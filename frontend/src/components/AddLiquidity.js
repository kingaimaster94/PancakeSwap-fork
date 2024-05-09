import React from "react";

export function AddLiquidity({ addLiquidity, tokenSymbolA, tokenSymbolB }) {
  return (
    <div>
      <h4>AddLiquidity</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const toAddress = formData.get("toAddress");
          const amountA = formData.get("amountA");
          const amountB = formData.get("amountB");

          if (toAddress && amountA && amountB) {
            addLiquidity(toAddress, amountA, amountB);
          }
        }}
      >
        <div className="form-group">
          <label>Amount of {tokenSymbolA}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amountA"
            placeholder="1"
            required
          />
          <label>Amount of {tokenSymbolB}</label>
          <input
            className="form-control"
            type="float"
            name="amountB"
          />
        </div>
        <div className="form-group">
          <label>toAddress</label>
          <input className="form-control" type="text" name="toAddress" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="AddLiquidity" />
        </div>
      </form>
    </div>
  );
}
