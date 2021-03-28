import React, { useState, useEffect } from "react";
import css from "../styles/SocialPage.module.scss";
import Data from "./SocialUrl";

const SocialPage = () => {
  const Colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];

  const [ImgChg, setImgChg] = useState(13);
  useEffect(() => {
    BgHandler;
  }, []);
  const BgHandler = () => {
    setImgChg((pre) => pre + 1);
    if (ImgChg > Colors.length) {
      setImgChg(0);
    }
  };
  return (
    <div className={css.SocialPage}>
      <div className={css.SocialPageBox}>
        <h1 className={css.SocialPageHeading1}>About Me and My Networks</h1>
        <div className={css.SocialPageTop}>
          <div className={css.SocialPageTopImg}>
            <img
              src="/image/A2.png"
              alt="a"
              style={{ backgroundColor: Colors[ImgChg] }}
              onClick={BgHandler}
            />
          </div>
          <div className={css.SocialPageTopText}>
            <div>
              <h1>Neeraj</h1>
              <p>
                I am working with Business learning and preparing for a best
                Entrepreneur to create Bussiness For me and create
              </p>

              <span className={css.SocialPageTopTagBox}>
                <span>Entrepreneur</span>
                <span>Business</span>
                <span>Startups</span>
                <span>Marketing</span>
                <span>Comminication</span>
                <span>Books </span>
                <span>Motivation </span>
                <span>Technology</span>
                <span>Developer</span>
              </span>
            </div>
          </div>
        </div>
        <h1 className={css.SocialPageHeading2}>Check out me on </h1>
        <div className={css.SocialPageCard}>
          <div className={css.SocialPageCardItems}>
            {Data.map((getdata, key) => {
              const { Icon, Name, Link, ProfileName } = getdata;
              return (
                <Card
                  key={key}
                  Icon={Icon}
                  Name={Name}
                  Link={Link}
                  ProfileName={ProfileName}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialPage;

const Card = ({ Icon, Link, Name, ProfileName }) => {
  return (
    <>
      <div className={css.SocialPageCardBox}>
        <a href={Link} className={css.SocialPageCardBoxTop}>
          {Icon}
          <span>{Name}</span>
        </a>
        <a href={Link} className={css.SocialPageCardBoxMiddle}>
          <div className={css.SocialPageCardBoxMiddleImg}>
            {<span></span> && (
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GhWs3AG1nsTZ8mN21s8EgEm-fIFkyu3Pt38UGzeXw=s96-c-rg-br100"
                alt="p"
              />
            )}
          </div>
          <div className={css.SocialPageCardBoxMiddleText}>
            <h2>{ProfileName}</h2>
            <p>{`@${ProfileName}`}</p>
          </div>
        </a>
        <a href={Link} className={css.SocialPageCardBoxFooter}>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
      </div>
    </>
  );
};
