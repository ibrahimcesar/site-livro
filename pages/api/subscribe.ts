// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(501);
  }
  const { email, token, name } = JSON.parse(req.body);

  console.log(email);

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!token) {
    return res.status(401).json({ error: "Token is required" });
  }

  const validate = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
    }
  );

  const validation = await validate.json();

  if (validation.score >= 0.7) {
    const result = await fetch("https://www.getrevue.co/api/v2/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Token ${process.env.REVUE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        first_name: name,
        double_opt_in: false,
      }),
    });

    const data = await result.json();

    if (!result.ok) {
      return res.status(500).json({ error: data.error.email[0] });
    }
  }

  if (!validation.success) {
    return res.status(500).json({ error: validation["error-codes"] });
  }

  return res.status(201).json({ created: true });
}
