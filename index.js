export default async function handler(req, res) {
  const url = "https://live.eu-north-1b.cf.dmcdn.net/sec2(P46OQlQ0X_s8ZOnoKrBzN0JUHsqtpb-0xuvfvlpRL8eKM9_i8rIDRnrKccUfIgLLq3eDJPWDtm9BKV31pRV0DzFBzOjQhGvwGT0wKsKRXlo21KC-039YPc0Ij2MBYMQu)/dm/3/x84wyku/s/live-480.m3u8";

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    if (!response.ok) {
      res.status(response.status).send("Error fetching stream");
      return;
    }

    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
    const body = await response.text();
    res.send(body);
  } catch (err) {
    res.status(500).send("Proxy error: " + err.message);
  }
}
