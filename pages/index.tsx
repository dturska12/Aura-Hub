import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContract } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>

          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-gradient.png"
              width={660}
              height={580}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  The Hub
                </span>
                <br />
                By Aura Exchange
              </h1>
              <p className={styles.heroSubtitle}>
                The first NFT marketplace to add utility to your NFTs.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta}
                  href="https://app.unlock-protocol.com/checkout?paywallConfig=%7B%22locks%22%3A%7B%220xca38852b736328f05737e59bbba80f884238b0b7%22%3A%7B%22network%22%3A1%7D%7D%2C%22pessimistic%22%3Atrue%2C%22skipRecipient%22%3Afalse%2C%22title%22%3A%22Aura+Platinum+Membership+Pass%22%2C%22icon%22%3A%22https%3A%2F%2Fipfs.filebase.io%2Fipfs%2FQmeUg2A2cmzW7ivuqxvENNuSQkNKbkDZvufcr4owZUejAV%22%2C%22redirectUri%22%3A%22https%3A%2F%2Fauraexchange.org%2F%22%2C%22persistentCheckout%22%3Afalse%2C%22referrer%22%3A%22%22%2C%22messageToSign%22%3A%22%22%2C%22hideSoldOut%22%3Afalse%7D"
                  target="_blank"
                >
                  Aura Pass
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="/our_vision">
                  Our Vision
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
