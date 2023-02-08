import type { NextPage } from "next";
import Link from "next/link";
import useSWR from "swr";
import { useUser } from "../hooks/useUser";
import { MembershipMetadata } from "../types";
import styles from "../styles/Theme.module.css";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractRead,
  Web3Button,
} from "@thirdweb-dev/react";
import { utils } from "ethers";
import { useState } from "react";

export default function Home() {
  const contractAddress = "0xE166c801A0cCb838ACeFFCdd9F4C813574A8E6A4";
  const address = useAddress();
  const [quantity, setQuantity] = useState("2000");
  const { contract } = useContract(contractAddress);
  const { data: price, isLoading } = useContractRead(
    contract,
    "priceForAddress",
    address,
    quantity
  );
  const { logoutUser, user } = useUser();
  const { data } =
    useSWR<{ memberships: MembershipMetadata[] }>("/api/memberships");

  const buttonClass =
    "bg-[#603DEB] text-white px-8 text-lg py-2 font-bold rounded hover:opacity-80";

  if (!user?.isLoggedIn) {
    return (
      <div className={styles.container}>
        <div className={styles.heroTitle}>
          Aura Members Lounge
        </div>
        <div className={styles.heroSubtitle}>
          <p className="text-xl text-gray-700">
            This page is for paid Aura Members only. Verify or
            buy membership by using the login button below.
          </p>
        </div>
        <div className="pt-8">
          <div className="flex justify-center">
            <button className={buttonClass}>
              <Link href="/api/login">Login using NFT membership</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <header className="pb-4 space-y-4 text-center border-b-2">
        <h1 className="text-5xl font-bold"> Your Unlock Memberships (NFTs)</h1>
        <p className="text-xl text-gray-700">
          These are all the available memberships valid to access this
          application.
        </p>
        <div className="flex justify-end gap-8">
          <button className={buttonClass} onClick={() => logoutUser()}>
            Logout
          </button>
        </div>
      </header>
      <div className="grid pt-8 sm:grid-cols-2">
        {data?.memberships.map((membership) => {
          const expiration = new Date(membership.expiration * 1000);
          return (
            <div className="p-6 bg-white rounded shadow" key={membership.id}>
              <div>
                <img
                  alt={membership.name}
                  className="w-24 rounded"
                  src={membership.image}
                />
              </div>
              <div className="pt-4 space-y-4">
                <h3 className="text-xl font-semibold"> {membership.name}</h3>
                <p className="text-gray-700"> {membership.description}</p>
                <p className="text-gray-500">
                  Valid until{" "}
                  <time dateTime={expiration.toLocaleDateString()}>
                    {expiration.toLocaleDateString()}
                  </time>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
