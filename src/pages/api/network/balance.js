import axios from "axios";

export default async (req, res) => {
  const address = req.query.address;
  const network = req.query.network;

  if (!address) {
    return res
      .status(400)
      .json({ error: "Address query parameter is required." });
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
    method: "eth_getBalance",
    params: [address, "latest"],
  };

  try {
    const response = await axios.post(endpoint, data);
    // Convert wei balance to ether for readability
    const balanceInEther = parseInt(response.data.result, 16) / 10 ** 18;
    return res.status(200).json({ balance: balanceInEther });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch balance." });
  }
};
