"use client";

import Image from "next/image";
import Link from "next/link";
import XVISION from "@/public/logo.png";
import NavDots from "./Blocks/NavDots/NavDots";
import useStore from "../lib/store";
import { useState } from "react";

interface Menu {
  link_title: string;
  _uid: string;
  link: {
    cached_url: string;
    linktype: any;
    url?: string;
  };
}

export default function Navigate({
  props,
  ogonOperationer,
  linsOperation,
}: any) {
  const [showLinser, isShowLinser] = useState(false);
  const [showOgon, isShowOgon] = useState(false);
  const open = useStore((state) => state.open);
  const isOpen = useStore((state) => state.setIsOpenMenu);

  const {
    story: {
      content: { logo, Menu, sub_menu, number, mail },
    },
  } = props;

  const handleLinser = () => {
    isShowLinser(!showLinser);
    isShowOgon(false);
  };
  const handleOgon = () => {
    isShowOgon(!showOgon);
    isShowLinser(false);
  };

  return (
    <header className="bg-transparent py-4 px-5 flex items-center justify-between fixed header top-0 z-50 w-full">
      <Link className="flex items-center" href="/">
        <Image src={logo.filename} width={150} height={50} alt={logo.alt} />
      </Link>
      <nav className="hidden md:flex items-center space-x-6">
        {Menu.map((menuItem: Menu) => {
          return (
            <Link
              key={menuItem._uid}
              className="text-black"
              href={`${
                menuItem.link.linktype === "story"
                  ? `/${menuItem.link.cached_url}`
                  : menuItem.link.url
              }`}
            >
              {menuItem.link_title}
            </Link>
          );
        })}
        <Link
          href="/boka-konsultation"
          className="text-white button bg-[#1D383F]"
        >
          Boka konsultation
        </Link>
        <NavDots />
      </nav>

      <div
        className={`absolute h-[100vh] right-0 top-0 w-[40%] bg-[#172D32] transition-all duration-300 ${
          !open ? "translate-x-full" : "translate-x-0"
        } `}
      >
        <div className=" flex w-full p-[17.8px] items-center justify-between bg-[#A9C1BD]">
          <Image src={XVISION} width={140} height={50} alt="XVISION" />
        </div>
        <div className="flex">
          <div className="p-10 text-[26px] text-white flex flex-col gap-5 mt-10 w-1/2 bg-[#172D32]">
            {sub_menu.map((menuItem: any) => {
              return menuItem.sub_menu_linser ? (
                <Link
                  key={menuItem._uid}
                  href=""
                  onClick={handleLinser}
                  className={`${showLinser && "text-[#CFEDC6]"}`}
                >
                  {menuItem.link_title}
                </Link>
              ) : menuItem.sub_menu_ogonoperation ? (
                <Link
                  key={menuItem._uid}
                  href=""
                  onClick={handleOgon}
                  className={`${showOgon && "text-[#CFEDC6]"}`}
                >
                  {menuItem.link_title}
                </Link>
              ) : (
                <Link
                  key={menuItem._uid}
                  onClick={() => isOpen(!open)}
                  href={`${
                    menuItem.link.linktype === "story"
                      ? `/${menuItem.link.cached_url}`
                      : menuItem.link.url
                  }`}
                >
                  {menuItem.link_title}
                </Link>
              );
            })}
            <Link
              href="/boka-konsultation"
              className="text-black text-center text-[18px] max-w-[80%] button bg-[#CFEDC6] mt-10"
            >
              Boka konsultation
            </Link>
            <div className="flex flex-col text-[18px] mt-24">
              <h3 className="font-semibold">Kontakt</h3>
              <div className="flex flex-col mt-10 font-light">
                <Link href={`tel:${number}`}>{number}</Link>
                <Link href={`mailto:${mail}`}>{mail}</Link>
              </div>
            </div>
          </div>
          <div
            className={`p-10 text-[20px] text-white flex flex-col gap-5 pt-20 w-1/2 h-[100vh] bg-[#1D383F] transition-all duration-300 absolute right-0 ${
              !showLinser ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {linsOperation.map((el: any, index: number) => {
              return (
                <Link onClick={() => isOpen(false)} href={`/${el.full_slug}`} key={index}>
                  {el.name}
                </Link>
              );
            })}
          </div>
          <div
            className={`p-10 text-[20px] capitalize text-white flex flex-col gap-5 pt-20 w-1/2 h-[100vh] bg-[#1D383F] absolute transition-all duration-300 right-0 ${
              !showOgon ? "translate-x-full" : "translate-x-0"
            }`}
          >
            {ogonOperationer.map((el: any, index: number) => {
              return (
                <Link onClick={() => isOpen(false)} href={`/${el.full_slug}`} key={index}>
                  {el.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
