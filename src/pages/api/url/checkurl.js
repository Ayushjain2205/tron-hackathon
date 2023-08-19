import axios from "axios";

// Next.js API route handler
export default async function handler(req, res) {
  const url = req.query.url || req.body.url;
  const securityLevel = req.query.securityLevel || req.body.securityLevel || 30;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const [phishingResponse] = await Promise.all([
      axios.get(`http://localhost:3000/api/url/phishingdetect?site=${url}`),
      //   axios.get(
      //     `http://localhost:3000/api/urlSecurity?dAppUrl=${url}&securityLevel=${securityLevel}`
      //   ),
    ]);
    console.log(phishingResponse);
    const isPhishing = phishingResponse.data.phishing_site === 1;
    const isSafe = !isPhishing;

    return res.status(200).json({ isSafe });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
