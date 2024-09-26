import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", price: 10, quantity: 2 },
    { id: 2, name: "Item 2", price: 15, quantity: 1 },
    { id: 3, name: "Item 3", price: 5, quantity: 3 },
  ]);

  const totalPurchase = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Compras</h1>
      <ul className={styles.itemList}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <span>{item.name}</span>
            <span>Valor unitário: R$ {item.price.toFixed(2)}</span>
            <span>Quantidade: {item.quantity}</span>
            <span>
              Valor total: R$ {(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <strong>Total da compra: R$ {totalPurchase.toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default App;
