import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContract } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import { Container, Card, Row, Text } from "@nextui-org/react";
/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <br></br>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroAsset2Frame}>
              <br></br>
              <Image
                src="/aura.png"
                width={1000}
                height={350}
                alt="Hero asset, NFT marketplace"
                quality={100}
                className={styles.heroAsset}
              />
            </div>
          </div>
          <Text h1 size={20} color="secondary">
            The team at LordLabz and KronicLabz have a clear vision of advancing the blockchain industry forward with products providing safety, efficiency and education for all.
            Our goals are to push the industry out of the dark and into the light by helping projects and their communities grow wealth with utilities and avenues of revenue.
            We are breaking the mould and switching the mindset of greed to collective growth.
            We welcome all from across the globe already in the web3 space and web2 companies looking to be guided safely and professionally into this industry of the future.
            Join us on our journey of blockchain enlightenment...
          </Text>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <p className={styles.heroSubtitle}>
                The first NFT marketplace to add utility to your NFTs.
              </p>
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/aura-sat.png"
              width={860}
              height={860}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/verified_partner_v2_white.png"
              width={400}
              height={100}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />

            <Image
              src="/1.png"
              width={400}
              height={100}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />

            <Image
              src="/2.png"
              width={400}
              height={100}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
