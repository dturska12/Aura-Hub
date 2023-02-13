import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function generateMintSignature(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // De-construct body from request
    const { _keyOwner } = JSON.parse(req.body);

    // Get the Early Access NFT Edition Drop contract
    const sdk = new ThirdwebSDK("ethereum");
    const AuraMembership = await sdk.getContract("0xC5BFc92057bBD051c1701faECeCb7A8C69b78913");

    // Check to see if the wallet address has an early access NFT
    const data = await AuraMembership.call("totalKeys", _keyOwner)
    let userHasToken = false;
    // Check each token in the Edition Drop
    for (let i = 0; i < data.toNumber(); i++) {
        // See if they have the token
        const balance = await AuraMembership.call("balanceOf", _keyOwner, i);
        if (balance.toNumber() > 0) {
            userHasToken = true;
            break;
        }
    }

    // Now use the SDK on Goerli to get the signature drop
    const ZoeToken = await sdk.getContract("0x236d0dd52cfA1229bB1a51D053Ac14aa39F271FE", "token");
    // If the user has an early access NFT, generate a mint signature
    if (userHasToken) {
        // see how to craft a payload to sign in the `contract.signature.generate()` documentation
        //const signedPayload = await ZoeToken.signature.generate({});

        // now anyone can mint the tokens
        // const tx = await ZoeToken.signature.mint(signedPayload);
        //const receipt = tx.receipt; // the mint transaction receipt

        // res.status(200).json(signedPayload);
        res.status(200).json({
            message: "User has an early access NFT",
        });
    } else {
        res.status(400).json({
            message: "User does not have an early access NFT",
        });
    }

}