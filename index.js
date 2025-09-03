export default async function handler(req, res) {
  const url = "https://live.eu-north-1b.cf.dmcdn.net/sec2(XXXX)/dm/3/x84wyku/s/live-480.m3u8"; // حط هنا لينك البث الجديد

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
