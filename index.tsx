import React, { useState } from "react";

const Button: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({
  onClick,
  children,
}) => (
  <button
    style={{
      backgroundColor: "goldenrod",
      border: "2px solid darkgoldenrod",
      padding: "15px 30px",
      margin: "10px",
      fontSize: "16px",
      cursor: "pointer",
      color: "white",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

const Popup: React.FC<{
  visible: boolean;
  onClose: () => void;
  onBuy: (amount: number) => void;
}> = ({ visible, onClose, onBuy }) => {
  if (!visible) return null;
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#222",
          padding: "20px 30px",
          border: "3px solid goldenrod",
          borderRadius: "8px",
          color: "white",
          fontSize: "1.2rem",
          textAlign: "center",
          zIndex: 10000,
        }}
      >
        <Button onClick={() => onBuy(10)}>Buy 10 Weights - 100 Coins</Button>
        <Button onClick={() => onBuy(50)}>Buy 50 Weights - 400 Coins</Button>
        <Button onClick={() => onBuy(100)}>Buy 100 Weights - 700 Coins</Button>
        <Button onClick={onClose}>Close</Button>
      </div>
    </>
  );
};

export default function WeightLifting() {
  const [weights, setWeights] = useState(0);
  const [coins, setCoins] = useState(0);
  const [popupVisible, setPopupVisible] = useState(false);

  const liftWeights = () => setWeights((w) => w + 5);

  const sellWeights = () => {
    setCoins((c) => c + weights);
    setWeights(0);
  };

  const buyWeight = (amount: number) => {
    const cost = amount * 10;
    if (coins >= cost) {
      setCoins((c) => c - cost);
      setWeights((w) => w + amount);
      setPopupVisible(false);
    } else {
      alert("Not enough coins!");
    }
  };

  return (
    <div style={{ color: "gray", fontFamily: "'Times New Roman', Times, serif" }}>
      <h1>Weight Lifting Simulator</h1>
      <Button onClick={liftWeights}>Lift Weights</Button>
      <Button onClick={sellWeights}>Sell</Button>
      <Button onClick={() => setPopupVisible(true)}>Buy Weights</Button>
      <h2>Weights Lifted: {weights}</h2>
      <h2>Coins: {coins}</h2>
      <Popup visible={popupVisible} onClose={() => setPopupVisible(false)} onBuy={buyWeight} />
    </div>
  );
}
