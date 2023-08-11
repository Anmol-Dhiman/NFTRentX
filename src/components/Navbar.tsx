import React from "react";
import logo from "../assets/Group 3.png";
import profileImg from "../assets/Ellipse 1.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const router = useRouter();
  const address = "";


  return (
    <nav className="text-[#DEDEDE] bg-[#1E141E] border-b-[1px] border-[#484E52] px-8">
      <div className="flex justify-between items-center py-3">
        <div className="cursor-pointer active:scale-90 transition duration-300">
          <Image className="text-white" src={logo} alt="logo-img" />
        </div>
        <div>
          <ul className="flex justify-between items-center gap-[60px] font-semibold">
            <li className="cursor-pointer hover:text-[#F4AEF4]">
                <Link href="/marketplace">Marketplace</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F4AEF4]">
              <Link href="/rentednft">RentedNFTs</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F4AEF4]">
              <Link href="/nftfaucet">NFTfaucet</Link>
            </li>
            <li className="cursor-pointer  font-semibold bg-white rounded-[8px]">
              <ConnectButton  accountStatus="address" />
            </li>
          </ul>
        </div>
          <Link href="/profile">
            <div className="flex jusstify-center items-center gap-[8px]">
              <span className="font-semibold text-lg">{address || "0x00...ab"}</span>
              <Image src={profileImg} alt="profile" />
            </div>
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
