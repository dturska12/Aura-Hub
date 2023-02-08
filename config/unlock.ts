export const paywallConfig: Record<string, unknown> = {
  locks: {
    "0xc5bfc92057bbd051c1701faececb7a8c69b78913": {
      "network": 1
    }
  },
  pessimistic: true,
  skipRecipient: true,
  title: "Aura Membership Subscription",
  icon: "https://ipfs.filebase.io/ipfs/QmeUg2A2cmzW7ivuqxvENNuSQkNKbkDZvufcr4owZUejAV",
  redirectUr: "https://auraexchange.org/members",
  persistentCheckout: true,
  referrer: "0x86f2aD57b59bb5BE8091A0a5fDBecb168b63cA17",
  messageToSign: "Thank you for your memebership to Aura NFT Exchange, Alpha awaits!",
  hideSoldOut: false
}