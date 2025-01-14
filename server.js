const express = require('express');
const Web3 = require('web3');
const { abi } = require('./UniswapRouterABI.json'); // Uniswap V2 Router ABI

const app = express();
const port = 3000;

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const router = new web3.eth.Contract(abi, '0xUniswapRouterAddress');

app.get('/swap', async (req, res) => {
  try {
    const { fromToken, toToken, amount, userAddress } = req.query;

    const tx = await router.methods
      .swapExactTokensForTokens(
        web3.utils.toWei(amount, 'ether'),
        0, // Minimum amount out (set to 0 for simplicity)
        [fromToken, toToken],
        userAddress,
        Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes deadline
      )
      .send({ from: userAddress });

    res.json({ status: 'success', txHash: tx.transactionHash });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
