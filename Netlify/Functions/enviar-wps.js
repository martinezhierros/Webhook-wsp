exports.handler = async (event) => {
  const { telefono } = JSON.parse(event.body || "{}");
  const r = await fetch(
    `https://graph.facebook.com/v21.0/${process.env.WA_PHONE_ID}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.WA_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: telefono, // ej: 5493511234567
        type: "template",
        template: {
          name: "martinezhierros",
          language: { code: "es_AR" },
        },
      }),
    }
  );
  return { statusCode: r.status, body: await r.text() };
};
