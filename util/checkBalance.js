import { contractAddress } from "../const/auraMembership";

export default async function checkBalance(sdk, address) {
    const nftDrop = await sdk.getContract(
        contractAddress, // replace this with your contract address
        "nft-drop"
    );

    const balance = await nftDrop.balanceOf(address);

    // gt = greater than
    return balance.gt(0);
}