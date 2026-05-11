export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { messages, username } = req.body;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1500,
        system: `Kamu adalah Rapzy-GPT, asisten AI super cerdas, ramah, dan helpful.
Kamu menjawab SEMUA pertanyaan dengan jujur, informatif, dan mendalam dalam Bahasa Indonesia.
Nama pengguna: ${username || "User"}.
Gaya: modern, to-the-point, gunakan emoji bila cocok.
Format jawaban rapi menggunakan markdown bila perlu (bold, list, code block).`,
        messages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || "API Error " + response.status });
    }

    const text = data.content?.map((c) => c.text || "").join("") || "(Tidak ada respons)";
    return res.status(200).json({ text });

  } catch (err) {
    return res.status(500).json({ error: "Internal error: " + err.message });
  }
}
