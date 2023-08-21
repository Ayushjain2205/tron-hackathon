import axios from "axios";

export default async (req, res) => {
  const txHash = req.query.txHash;
  const network = req.query.network;

  if (!txHash) {
    return res
      .status(400)
      .json({ error: "txHash query parameter is required." });
  }

  if (!network) {
    return res
      .status(400)
      .json({ error: "Network query parameter is required." });
  }

  let endpoint;

  switch (network) {
    case "linea":
      endpoint = `https://linea-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
      break;
    case "ethereum":
      endpoint = `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
      break;
    case "polygon":
      endpoint = `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
      break;
    case "optimism":
      endpoint = `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;
      break;
    default:
      return res.status(400).json({ error: "Invalid network specified." });
  }

  const data = {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getTransactionByHash",
    params: [txHash],
  };

  try {
    const response = await axios.post(endpoint, data);
    return res.status(200).json(response.data.result);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch transaction details." });
  }
};
