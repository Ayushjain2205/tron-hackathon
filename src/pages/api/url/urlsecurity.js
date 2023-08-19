import { GoPlus, ErrorCode } from "@goplus/sdk-node";

// Next.js API route handler
export default async function handler(req, res) {
  const dAppUrl = req.query.dAppUrl || req.body.dAppUrl;
  const securityLevel = req.query.securityLevel || req.body.securityLevel || 30;

  let response;

  try {
    response = await GoPlus.dappSecurity(dAppUrl, securityLevel);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  if (response.code !== ErrorCode.SUCCESS) {
    console.error(response.message);
    return res.status(400).json({ error: response.message });
  } else {
    return res.status(200).json(response);
  }
}
