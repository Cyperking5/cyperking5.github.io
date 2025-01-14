import React, { useState } from 'react';
import Web3 from 'web3';

const App = () => {
  const [account, setAccount] = useState(null);
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amount, setAmount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } else {
      alert('Please install Metamask');
    }
  };

  const swapTokens = async () => {
    try {
      const response = await fetch(`/swap?fromToken=${fromToken}&toToken=${toToken}&amount=${amount}&userAddress=${account}`);
      const data = await response.json();
      if (data.status === 'success') {
        alert(`Swap successful! TxHash: ${data.txHash}`);
      } else {
        alert('Swap failed');
      }
    } catch (err) {
      console.error('Error swapping tokens:', err);
    }
  };

  return (
    <div>
      <h1>Crypto Swap</h1>
      <button onClick={connectWallet}>{account ? `Connected: ${account}` : 'Connect Wallet'}</button>
      <div>
        <input type="text" placeholder="From Token" onChange={(e) => setFromToken(e.target.value)} />
        <input type="text" placeholder="To Token" onChange={(e) => setToToken(e.target.value)} />
        <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={swapTokens}>Swap</button>
      </div>
    </div>
  );
};

export default App;
