import { GoPlus, ErrorCode } from "@goplus/sdk-node";

// Next.js API route handler
export default async function handler(req, res) {
  const { address } = req.query;
  const chainId = req.query.chainId || "1";
  const securityLevel = req.query.securityLevel || 30;

  try {
    const response = await GoPlus.addressSecurity(
      chainId,
      address,
      securityLevel
    );

    if (response.code !== ErrorCode.SUCCESS) {
      console.error(response.message);
      res.status(400).json({ error: response.message });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
