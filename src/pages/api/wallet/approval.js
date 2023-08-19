import { GoPlus, ErrorCode } from "@goplus/sdk-node";

// Next.js API route handler
export default async function handler(req, res) {
  const { address } = req.query;
  const chainId = req.query.chainId || "56";
  const securityLevel = req.query.securityLevel || 30;

  let erc20Response, erc721Response, erc1155Response;

  try {
    erc20Response = await GoPlus.erc20ApprovalSecurity(
      chainId,
      address,
      securityLevel
    );
    erc721Response = await GoPlus.erc721ApprovalSecurity(
      chainId,
      address,
      securityLevel
    );
    erc1155Response = await GoPlus.erc1155ApprovalSecurity(
      chainId,
      address,
      securityLevel
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  return res.status(200).json({
    erc20:
      erc20Response.code === ErrorCode.SUCCESS
        ? erc20Response
        : { error: erc20Response.message },
    erc721:
      erc721Response.code === ErrorCode.SUCCESS
        ? erc721Response
        : { error: erc721Response.message },
    erc1155:
      erc1155Response.code === ErrorCode.SUCCESS
        ? erc1155Response
        : { error: erc1155Response.message },
  });
}
