import { Ethereum } from "@thirdweb-dev/sdk";

/**
 * TODO: Replace these values with your contract addresses and ABI.
 * 1. NETWORK_ID: This is the network ID of the network your smart contracts are deployed to.
 * 2. MARKETPLACE_ADDRESS: This is the address of the marketplace smart contract.
 * 3. NFT_COLLECTION_ADDRESS: This is the address of your NFT collection smart contract.
 * 4. NFT_COLLECTION_ABI: This is the ABI of your NFT collection smart contract.
 *  You can copy your ABI from the "Sources" tab on the thirdweb dashboard.
 *  Or from the "contract" tab on EtherScan.
 */

// 0. Set up the root URL of where users can view transactions on
// For example, below, we use Mumbai scan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://etherscan.io/";

// 1. Set up the network ID of the network your smart contracts are deployed to.
export const NETWORK = Ethereum;
// 1.25 Staking contract address
export const NFT_DROP_ADDRESS = "0xc875CE0c715EeBE8795037d6fE06a2802d6cEbE1";
export const KATNIP_NFT_ADDRESS = "0x767DFb1e584b426916D78C19a27f179B7bA35c9B";
export const KATNIP_ADDRESS = "0x88cCC5cdE30a98804a5b8002Bff55367DDd5b30D";
export const KATNIP_STAKING_VAULT = "0xaA5c665A9abcb780aF18627DB3cF835fFCA1dbe9";
export const AURA_MEMBERSHIP = "0xca38852b736328f05737e59bbba80f884238b0b7";
// 1.5 Staking contract address
export const STAKING_CONTRACT_ADDRESS = "0xB143aBd4c4417c3c937201aDB8d43398F15eD5f1";
//1.75 Zoe Token address
export const ZOE_TOKEN_ADDRESS = "0xE166c801A0cCb838ACeFFCdd9F4C813574A8E6A4";
//1.85 Zoe ERC1155 address
export const ZOE_ERC1155_ADDRESS = "0xbD6ED32a4DDbc03aCc4ad1F988A92b7804fded46";
export const ZOE_EDITION_STAKING_ADDRESS = "0xe65301C3D4a66E5683eA4a9Cc12345D20174aD21";
// 2. The address of the marketplace smart contract.
export const MARKETPLACE_ADDRESS = "0x5526fb9e98A64F7C95971a2f0580D8cdF172A95a";
// 2.5. The ABI of the marketplace smart contract.
export const MARKETPLACE_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_nativeTokenWrapper",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeBuffer",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "bidBufferBps",
        "type": "uint256"
      }
    ],
    "name": "AuctionBuffersUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "closer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "bool",
        "name": "cancelled",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "auctionCreator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "winningBidder",
        "type": "address"
      }
    ],
    "name": "AuctionClosed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "assetContract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lister",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "listingId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "tokenOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "assetContract",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "currency",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "reservePricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "buyoutPricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "enum IMarketplace.TokenType",
            "name": "tokenType",
            "type": "uint8"
          },
          {
            "internalType": "enum IMarketplace.ListingType",
            "name": "listingType",
            "type": "uint8"
          }
        ],
        "indexed": false,
        "internalType": "struct IMarketplace.Listing",
        "name": "listing",
        "type": "tuple"
      }
    ],
    "name": "ListingAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "listingCreator",
        "type": "address"
      }
    ],
    "name": "ListingRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "listingCreator",
        "type": "address"
      }
    ],
    "name": "ListingUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "offeror",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "enum IMarketplace.ListingType",
        "name": "listingType",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantityWanted",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalOfferAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "currency",
        "type": "address"
      }
    ],
    "name": "NewOffer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "assetContract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lister",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantityBought",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalPricePaid",
        "type": "uint256"
      }
    ],
    "name": "NewSale",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "platformFeeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "platformFeeBps",
        "type": "uint256"
      }
    ],
    "name": "PlatformFeeInfoUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_BPS",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_listingId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_offeror",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerToken",
        "type": "uint256"
      }
    ],
    "name": "acceptOffer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "bidBufferBps",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_listingId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_buyFor",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_quantityToBuy",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_totalPrice",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_listingId",
        "type": "uint256"
      }
    ],
    "name": "cancelDirectListing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_listingId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_closeFor",
        "type": "address"
      }
    ],
    "name": "closeAuction",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractType",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractVersion",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "assetContract",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "secondsUntilEndTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantityToList",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "currencyToAccept",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "reservePricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "buyoutPricePerToken",
            "type": "uint256"
          },
          {
            "internalType": "enum IMarketplace.ListingType",
            "name": "listingType",
            "type": "uint8"
          }
        ],
        "internalType": "struct IMarketplace.ListingParameters",
        "name": "_params",
        "type": "tuple"
      }
    ],
    "name": "createListing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPlatformFeeInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getRoleMember",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleMemberCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_defaultAdmin",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_contractURI",
        "type": "string"
      },
      {
        "internalType": "address[]",
        "name": "_trustedForwarders",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "_platformFeeRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_platformFeeBps",
        "type": "uint256"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "forwarder",
        "type": "address"
      }
    ],
    "name": "isTrustedForwarder",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "listings",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "tokenOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "assetContract",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "reservePricePerToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "buyoutPricePerToken",
        "type": "uint256"
      },
      {
        "internalType": "enum IMarketplace.TokenType",
        "name": "tokenType",
        "type": "uint8"
      },
      {
        "internalType": "enum IMarketplace.ListingType",
        "name": "listingType",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes[]",
        "name": "data",
        "type": "bytes[]"
      }
    ],
    "name": "multicall",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "results",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_listingId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_quantityWanted",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_expirationTimestamp",
        "type": "uint256"
      }
    ],
    "name": "offer",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "offers",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "offeror",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "quantityWanted",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "pricePerToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expirationTimestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC1155BatchReceived",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC1155Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_timeBuffer",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_bidBufferBps",
        "type": "uint256"
      }
    ],
    "name": "setAuctionBuffers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      }
    ],
    "name": "setContractURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_platformFeeRecipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_platformFeeBps",
        "type": "uint256"
      }
    ],
    "name": "setPlatformFeeInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "timeBuffer",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalListings",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_listingId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_quantityToList",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_reservePricePerToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_buyoutPricePerToken",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_currencyToAccept",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_secondsUntilEndTime",
        "type": "uint256"
      }
    ],
    "name": "updateListing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "winningBid",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "offeror",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "quantityWanted",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "pricePerToken",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "expirationTimestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];
// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xC5BFc92057bBD051c1701faECeCb7A8C69b78913";

// 4. The ABI of your NFT collection smart contract.
export const NFT_COLLECTION_ABI = [
  {
    "type": "error",
    "name": "CANNOT_APPROVE_SELF",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "CANT_BE_SMALLER_THAN_SUPPLY",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "CANT_EXTEND_NON_EXPIRING_KEY",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "GAS_REFUND_FAILED",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "INSUFFICIENT_ERC20_VALUE",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "INSUFFICIENT_VALUE",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "INVALID_ADDRESS",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "INVALID_HOOK",
    "inputs": [
      {
        "type": "uint8",
        "name": "hookIndex",
        "internalType": "uint8"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "INVALID_LENGTH",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "INVALID_TOKEN",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "KEY_NOT_VALID",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "KEY_TRANSFERS_DISABLED",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "LOCK_HAS_CHANGED",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "LOCK_SOLD_OUT",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "MAX_KEYS_REACHED",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "MIGRATION_REQUIRED",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NON_COMPLIANT_ERC721_RECEIVER",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NON_RENEWABLE_LOCK",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NOT_ENOUGH_FUNDS",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NOT_ENOUGH_TIME",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NOT_READY_FOR_RENEWAL",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NO_SUCH_KEY",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NULL_VALUE",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ONLY_KEY_MANAGER_OR_APPROVED",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ONLY_LOCK_MANAGER",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ONLY_LOCK_MANAGER_OR_KEY_GRANTER",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "OUT_OF_RANGE",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "OWNER_CANT_BE_ADDRESS_ZERO",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SCHEMA_VERSION_NOT_CORRECT",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TRANSFER_TO_SELF",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "UNAUTHORIZED",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "UNAUTHORIZED_KEY_MANAGER_UPDATE",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "approved",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "approved",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CancelKey",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "sendTo",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "refund",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ExpirationChanged",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "newExpiration",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "bool",
        "name": "timeAdded",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ExpireKey",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "GasRefunded",
    "inputs": [
      {
        "type": "address",
        "name": "receiver",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "refundedAmount",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [
      {
        "type": "uint8",
        "name": "version",
        "indexed": false,
        "internalType": "uint8"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeyExtended",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "newTimestamp",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeyGranterAdded",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeyGranterRemoved",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeyManagerChanged",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_newManager",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "KeysMigrated",
    "inputs": [
      {
        "type": "uint256",
        "name": "updatedRecordsCount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LockConfig",
    "inputs": [
      {
        "type": "uint256",
        "name": "expirationDuration",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "maxNumberOfKeys",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "maxKeysPerAcccount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LockManagerAdded",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LockManagerRemoved",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "LockMetadata",
    "inputs": [
      {
        "type": "string",
        "name": "name",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "symbol",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "baseTokenURI",
        "indexed": false,
        "internalType": "string"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PricingChanged",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldKeyPrice",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "keyPrice",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "oldTokenAddress",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RefundPenaltyChanged",
    "inputs": [
      {
        "type": "uint256",
        "name": "freeTrialLength",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "refundPenaltyBasisPoints",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleAdminChanged",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true,
        "internalType": "bytes32"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleGranted",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleRevoked",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferFeeChanged",
    "inputs": [
      {
        "type": "uint256",
        "name": "transferFeeBasisPoints",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "UnlockCallFailed",
    "inputs": [
      {
        "type": "address",
        "name": "lockAddress",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "unlockAddress",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Withdrawal",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "DEFAULT_ADMIN_ROLE",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "KEY_GRANTER_ROLE",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "LOCK_MANAGER_ROLE",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "addKeyGranter",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addLockManager",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "approve",
    "inputs": [
      {
        "type": "address",
        "name": "_approved",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "type": "address",
        "name": "_keyOwner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "balance",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "burn",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "cancelAndRefund",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "expirationDuration",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "expireAndRefundFor",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "extend",
    "inputs": [
      {
        "type": "uint256",
        "name": "_value",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_referrer",
        "internalType": "address"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "freeTrialLength",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "gasRefundValue",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_refundValue",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getApproved",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getCancelAndRefundValue",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "refund",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getHasValidKey",
    "inputs": [
      {
        "type": "address",
        "name": "_keyOwner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isValid",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getRoleAdmin",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getTransferFee",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_time",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "grantKeyExtension",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_duration",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "grantKeys",
    "inputs": [
      {
        "type": "address[]",
        "name": "_recipients",
        "internalType": "address[]"
      },
      {
        "type": "uint256[]",
        "name": "_expirationTimestamps",
        "internalType": "uint256[]"
      },
      {
        "type": "address[]",
        "name": "_keyManagers",
        "internalType": "address[]"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "grantRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "hasRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "type": "address",
        "name": "_lockCreator",
        "internalType": "address payable"
      },
      {
        "type": "uint256",
        "name": "_expirationDuration",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_tokenAddress",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_keyPrice",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_maxNumberOfKeys",
        "internalType": "uint256"
      },
      {
        "type": "string",
        "name": "_lockName",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "type": "address",
        "name": "_owner",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_operator",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isKeyGranter",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isLockManager",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isOwner",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "isValidKey",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "keyExpirationTimestampFor",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "keyManagerOf",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "keyPrice",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "lendKey",
    "inputs": [
      {
        "type": "address",
        "name": "_from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "maxKeysPerAddress",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "maxNumberOfKeys",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "mergeKeys",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenIdFrom",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_tokenIdTo",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "migrate",
    "inputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "numberOfOwners",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "onKeyCancelHook",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ILockKeyCancelHook"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "onKeyExtendHook",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ILockKeyExtendHook"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "onKeyGrantHook",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ILockKeyGrantHook"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "onKeyPurchaseHook",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ILockKeyPurchaseHook"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "onKeyTransferHook",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ILockKeyTransferHook"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "onTokenURIHook",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ILockTokenURIHook"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "onValidKeyHook",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ILockValidKeyHook"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ownerOf",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "publicLockVersion",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16",
        "name": "",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "purchase",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_values",
        "internalType": "uint256[]"
      },
      {
        "type": "address[]",
        "name": "_recipients",
        "internalType": "address[]"
      },
      {
        "type": "address[]",
        "name": "_referrers",
        "internalType": "address[]"
      },
      {
        "type": "address[]",
        "name": "_keyManagers",
        "internalType": "address[]"
      },
      {
        "type": "bytes[]",
        "name": "_data",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "",
        "internalType": "uint256[]"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "purchasePriceFor",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_referrer",
        "internalType": "address"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "minKeyPrice",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "referrerFees",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "refundPenaltyBasisPoints",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "renewMembershipFor",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_referrer",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceLockManager",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "renounceRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokeKeyGranter",
    "inputs": [
      {
        "type": "address",
        "name": "_granter",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokeRole",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "internalType": "bytes32"
      },
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "_from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "_from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "bytes",
        "name": "_data",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "schemaVersion",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "type": "address",
        "name": "_to",
        "internalType": "address"
      },
      {
        "type": "bool",
        "name": "_approved",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setEventHooks",
    "inputs": [
      {
        "type": "address",
        "name": "_onKeyPurchaseHook",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_onKeyCancelHook",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_onValidKeyHook",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_onTokenURIHook",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_onKeyTransferHook",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_onKeyExtendHook",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_onKeyGrantHook",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGasRefundValue",
    "inputs": [
      {
        "type": "uint256",
        "name": "_refundValue",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setKeyManagerOf",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_keyManager",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setLockMetadata",
    "inputs": [
      {
        "type": "string",
        "name": "_lockName",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_lockSymbol",
        "internalType": "string"
      },
      {
        "type": "string",
        "name": "_baseTokenURI",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setOwner",
    "inputs": [
      {
        "type": "address",
        "name": "account",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setReferrerFee",
    "inputs": [
      {
        "type": "address",
        "name": "_referrer",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_feeBasisPoint",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "shareKey",
    "inputs": [
      {
        "type": "address",
        "name": "_to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenIdFrom",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_timeShared",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenAddress",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenByIndex",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenOfOwnerByIndex",
    "inputs": [
      {
        "type": "address",
        "name": "_keyOwner",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_index",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenURI",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalKeys",
    "inputs": [
      {
        "type": "address",
        "name": "_keyOwner",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "totalSupply",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transfer",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_to",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_valueBasisPoint",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success",
        "internalType": "bool"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFeeBasisPoints",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "type": "address",
        "name": "_from",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unlendKey",
    "inputs": [
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "unlockProtocol",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract IUnlock"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateKeyPricing",
    "inputs": [
      {
        "type": "uint256",
        "name": "_keyPrice",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "_tokenAddress",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateLockConfig",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newExpirationDuration",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_maxNumberOfKeys",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_maxKeysPerAcccount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateRefundPenalty",
    "inputs": [
      {
        "type": "uint256",
        "name": "_freeTrialLength",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "_refundPenaltyBasisPoints",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateSchemaVersion",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateTransferFee",
    "inputs": [
      {
        "type": "uint256",
        "name": "_transferFeeBasisPoints",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_recipient",
        "internalType": "address payable"
      },
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "name": "",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  }
]
