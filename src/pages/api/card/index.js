// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createACard, getCardList } from "@/server/controller/card.controller";

export default function handler(req, res) {
    if (req.method === "POST") {
        if(req.body.image.length === 0) return res.status(500).json({ message: "Can't upload" })
        if (req.body.name.length > 10) return res.status(400).json({ message: "Arai l urt bnaa" });
        return res.status(400).json(createACard(req.body));

    } else return res.status(200).json(getCardList());
    // res.status(200).json({message: "Successfully create a card named: " + req.body.name})
}
