// Local project images (matching Figma order: 5 rows × 3 columns)
import { useEffect, useLayoutEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import mechanaAi from "../assets/Mechana AI (1).png";
import hd from "../assets/HD.png";
import lowesPo from "../assets/Lowes_PO (1).png";
import lowesB from "../assets/Lowes_B (3).png";
import webPortfolio from "../assets/Web_Portfolio.png";
import spendAnalytics from "../assets/Spend_Analytics.png";
import coverBia from "../assets/CoverBIA 1.png";
import ppp from "../assets/PPP.png";
import livongo from "../assets/LIVONGO (1).png";
import intrado from "../assets/Intrado (4).png";
import leaflet from "../assets/Leaflet (3).png";
import voip from "../assets/VOIP (2).png";
import qoutelbanner from "../assets/Qoutel.png";
import dscEdited from "../assets/Photography.png";
import banner from "../assets/RacknGo.png";
import zeroWaitPRJ from "../assets/ZeroWait_True.png";
import profilePic from "../assets/ProfilePic.png";
import figmaSvg from "../assets/Figma.svg";
import airtableSvg from "../assets/Airtable_SVG.svg";
import miroSvg from "../assets/Miro.svg";
import javaScriptSvg from "../assets/Java Script.svg";
import slackSvg from "../assets/slack.svg";
import photoshopImg from "../assets/photoshop.png";
import aiImg from "../assets/ai (1).png";
import adobeImg from "../assets/adobe.png";
import geminiImg from "../assets/Gemini.png";
import gcloudImg from "../assets/gcloud.png";
import nodejsImg from "../assets/nodejs.png";
import pythonImg from "../assets/python.png";
import reactIconSvg from "../assets/React_Icon.svg";
import cursorSvg from "../assets/Cursor.svg";

const FigmaIconBlack = () => (
  <svg width="22" height="33" viewBox="0 0 22 33" fill="none" className="h-5 w-5 shrink-0 opacity-60" style={{ minWidth: "1.25rem" }}>
    <path d="M19.3 11C20.3729 10.2883 21.1885 9.25035 21.6261 8.03949C22.0638 6.82863 22.1003 5.50911 21.7304 4.27589C21.3604 3.04267 20.6035 1.96116 19.5716 1.19118C18.5397 0.421188 17.2875 0.00356004 16 0H5.99999C4.71247 0.00356004 3.46025 0.421188 2.42835 1.19118C1.39644 1.96116 0.63959 3.04267 0.269623 4.27589C-0.100343 5.50911 -0.0638002 6.82863 0.373852 8.03949C0.811505 9.25035 1.62705 10.2883 2.69999 11C1.87489 11.5473 1.19806 12.2903 0.729852 13.1627C0.261645 14.0351 0.0166159 15.0099 0.0166159 16C0.0166159 16.9901 0.261645 17.9649 0.729852 18.8373C1.19806 19.7097 1.87489 20.4527 2.69999 21C1.83247 21.5713 1.12813 22.3581 0.655896 23.2832C0.183661 24.2084 -0.0402936 25.2404 0.00594956 26.2781C0.0521927 27.3158 0.367049 28.3237 0.919707 29.2033C1.47237 30.0828 2.24389 30.8038 3.15879 31.2956C4.07369 31.7875 5.10062 32.0334 6.13908 32.0094C7.17754 31.9853 8.19197 31.692 9.08308 31.1583C9.9742 30.6245 10.7115 29.8686 11.2228 28.9644C11.7341 28.0602 12.0019 27.0387 12 26V20.5C13.1222 21.4434 14.5342 21.9729 16 22C17.2875 21.9964 18.5397 21.5788 19.5716 20.8088C20.6035 20.0388 21.3604 18.9573 21.7304 17.7241C22.1003 16.4909 22.0638 15.1714 21.6261 13.9605C21.1885 12.7497 20.3729 11.7117 19.3 11ZM12 2H16C17.0609 2 18.0783 2.42143 18.8284 3.17157C19.5786 3.92172 20 4.93913 20 6C20 7.06087 19.5786 8.07828 18.8284 8.82843C18.0783 9.57857 17.0609 10 16 10H12V2ZM1.99999 6C1.99999 4.93913 2.42142 3.92172 3.17156 3.17157C3.92171 2.42143 4.93912 2 5.99999 2H9.99999V10H5.99999C4.93912 10 3.92171 9.57857 3.17156 8.82843C2.42142 8.07828 1.99999 7.06087 1.99999 6ZM1.99999 16C1.99999 14.9391 2.42142 13.9217 3.17156 13.1716C3.92171 12.4214 4.93912 12 5.99999 12H9.99999V20H5.99999C4.93912 20 3.92171 19.5786 3.17156 18.8284C2.42142 18.0783 1.99999 17.0609 1.99999 16ZM9.99999 26C9.99999 26.7911 9.7654 27.5645 9.32587 28.2223C8.88634 28.8801 8.26163 29.3928 7.53073 29.6955C6.79982 29.9983 5.99555 30.0775 5.21963 29.9231C4.44371 29.7688 3.73097 29.3878 3.17156 28.8284C2.61215 28.269 2.23119 27.5563 2.07685 26.7804C1.92251 26.0044 2.00172 25.2002 2.30447 24.4693C2.60722 23.7384 3.11991 23.1136 3.77771 22.6741C4.43551 22.2346 5.20887 22 5.99999 22H9.99999V26ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0768 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8863 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z" fill="black"/>
  </svg>
);
const ReactIconBlack = () => (
  <svg width="29" height="32" viewBox="0 0 29 32" fill="none" className="h-5 w-5 shrink-0 opacity-60" style={{ minWidth: "1.25rem" }}>
    <path d="M14.0657 14.1064C13.0219 14.1064 12.1719 14.9565 12.1719 16.0002C12.1719 17.044 13.0219 17.894 14.0657 17.894C15.1094 17.894 15.9594 17.044 15.9594 16.0002C15.9594 14.9565 15.1094 14.1064 14.0657 14.1064ZM14.0657 17.0768C13.4719 17.0768 12.9891 16.594 12.9891 16.0002C12.9891 15.4065 13.4719 14.9237 14.0657 14.9237C14.6594 14.9237 15.1422 15.4065 15.1422 16.0002C15.1422 16.594 14.6594 17.0768 14.0657 17.0768Z" fill="black"/>
    <path d="M27.6132 7.4891C26.4148 5.58128 23.3712 5.16875 19.5475 6.08128C18.2866 2.35779 16.3178 0 14.0646 0C11.8115 0 9.84259 2.35783 8.58177 6.08128C4.75828 5.16719 1.71447 5.58128 0.516058 7.4891C-0.7652 9.52821 0.40668 12.7268 3.28486 16C0.406696 19.2735 -0.7652 22.4721 0.516058 24.5109C1.31139 25.7766 2.91765 26.386 5.02532 26.386C6.09565 26.386 7.29567 26.2281 8.58317 25.9203C9.84255 29.6422 11.8113 32 14.0644 32C16.3176 32 18.2865 29.6422 19.5457 25.9203C20.8333 26.2281 22.0333 26.386 23.1036 26.386C25.2114 26.386 26.8177 25.7766 27.6128 24.5109C28.8941 22.4718 27.7222 19.2733 24.844 16C27.7222 12.7265 28.8945 9.52793 27.6132 7.4891ZM26.921 7.92347C27.9726 9.59849 26.8382 12.4315 24.2741 15.3736C23.285 14.3251 22.1256 13.2782 20.8209 12.2642C20.6241 10.2985 20.2756 8.48288 19.8022 6.88449C23.221 6.07668 25.9398 6.35937 26.921 7.92347ZM17.3225 21.186C16.2381 21.8673 15.1443 22.4736 14.0646 23.0033C12.9834 22.4736 11.8896 21.8673 10.8068 21.186C9.85055 20.5845 8.94429 19.9517 8.09428 19.3001C7.99428 18.2329 7.93959 17.1298 7.93959 16.0001C7.93959 14.8704 7.99428 13.7672 8.09428 12.7C8.94429 12.0484 9.85055 11.4141 10.8068 10.8141C11.8896 10.1328 12.9834 9.52653 14.0631 8.9984C15.1443 9.52809 16.2381 10.1328 17.3225 10.8141C18.2787 11.4156 19.185 12.0484 20.035 12.7C20.135 13.7672 20.1897 14.8704 20.1897 16.0001C20.1897 17.1298 20.135 18.2329 20.035 19.3001C19.185 19.9517 18.2787 20.586 17.3225 21.186ZM19.9132 20.4188C19.7069 22.0407 19.3897 23.5532 18.9866 24.9049C17.7257 24.5549 16.385 24.0658 15.0131 23.4471C15.9209 22.9768 16.8397 22.4549 17.7569 21.8783C18.51 21.4064 19.2288 20.9173 19.9132 20.4188ZM13.1163 23.447C11.7444 24.0658 10.4038 24.5548 9.14278 24.9048C8.73965 23.5532 8.42245 22.0407 8.2162 20.4188C8.90057 20.9172 9.61934 21.4047 10.3725 21.8781C11.2897 22.4547 12.2084 22.9767 13.1163 23.447ZM7.21139 18.6017C6.17386 17.7502 5.23948 16.8736 4.42227 16.0001C5.23948 15.1267 6.17386 14.2501 7.21139 13.3985C7.15358 14.2439 7.12232 15.111 7.12232 16.0001C7.12232 16.8892 7.15357 17.7564 7.21139 18.6017ZM8.21608 11.5812C8.42233 9.95934 8.73953 8.44528 9.14266 7.09358C10.4036 7.44358 11.7443 7.93267 13.1177 8.5514C12.2099 9.02172 11.2911 9.54517 10.3724 10.1217C9.61922 10.5936 8.90045 11.0828 8.21608 11.5812ZM15.0146 8.55308C16.3865 7.93431 17.7271 7.44526 18.9881 7.09526C19.3912 8.44684 19.7084 9.95938 19.9146 11.5813C19.2303 11.0829 18.5115 10.5954 17.7584 10.1219C16.8396 9.54537 15.9224 9.02184 15.0146 8.55308ZM20.9179 13.3983C21.9554 14.2499 22.8898 15.1265 23.707 15.9999C22.8898 16.8734 21.9554 17.75 20.9179 18.6015C20.9757 17.7562 21.0069 16.889 21.0069 15.9999C21.0069 15.1108 20.9757 14.2437 20.9179 13.3983ZM14.0646 0.816971C15.9115 0.816971 17.5974 2.96856 18.7302 6.29225C17.2552 6.70473 15.6817 7.30474 14.0646 8.07979C12.4473 7.30322 10.8739 6.70477 9.3989 6.29225C10.5317 2.96876 12.2177 0.816971 14.0646 0.816971ZM1.20799 7.92347C1.83768 6.92033 3.18145 6.44377 4.96584 6.44377C5.96429 6.44377 7.10023 6.59377 8.32681 6.88441C7.85336 8.48288 7.50491 10.3001 7.30803 12.2657C6.00333 13.2798 4.84392 14.3266 3.85486 15.3751C1.29075 12.4313 0.154853 9.59869 1.20799 7.92347ZM1.20799 24.0769C0.156413 22.4019 1.2908 19.5688 3.8549 16.6268C4.844 17.6752 6.00337 18.7221 7.30807 19.7362C7.50495 21.7019 7.8534 23.5175 8.32685 25.1159C4.90804 25.9237 2.1892 25.6394 1.20799 24.0769ZM14.0646 31.1834C12.2177 31.1834 10.5317 29.0318 9.3989 25.7081C10.8739 25.2956 12.4474 24.6956 14.0646 23.919C15.6818 24.6956 17.2568 25.294 18.7302 25.7081C17.5974 29.0316 15.9114 31.1834 14.0646 31.1834ZM26.9211 24.0769C25.9399 25.641 23.2195 25.9238 19.8022 25.116C20.2757 23.5175 20.6241 21.7019 20.821 19.7363C22.1257 18.7222 23.2851 17.6754 24.2742 16.6269C26.8383 19.5691 27.9743 22.4021 26.9211 24.0769Z" fill="black"/>
  </svg>
);

const JavaScriptIconBlack = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="h-5 w-5 shrink-0 opacity-60" style={{ minWidth: "1.25rem" }}>
    <g clipPath="url(#jsClip)">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.16 22.8558C16.9788 22.8558 15.5687 21.8243 14.8812 20.4751L16.7937 19.3762C17.2975 20.1921 17.9512 20.7912 19.11 20.7912C20.0825 20.7912 20.7037 20.3085 20.7037 19.6426C20.7037 18.6407 19.3562 18.2492 18.405 17.845C16.71 17.1295 15.585 16.2305 15.585 14.332C15.585 12.5849 16.9275 11.2532 19.0263 11.2532C20.5188 11.2532 21.5937 11.769 22.365 13.1169L20.5362 14.2824C20.1337 13.5669 19.6975 13.284 19.0263 13.284C18.3375 13.284 17.9013 13.717 17.9013 14.2824C17.9013 14.9818 18.3375 15.2646 19.345 15.6974C21.4563 16.5951 23.0537 17.3004 23.0537 19.6093C23.0537 21.7074 21.3925 22.8558 19.16 22.8558ZM13.75 19.3429C13.75 21.7572 12.2512 23.0332 10.17 23.0332C8.28998 23.0332 7.16374 22.32 6.60999 21.08H6.59126H6.58249H6.57749L8.48873 19.7546C8.85748 20.4031 9.19 20.8632 9.995 20.8632C10.7675 20.8632 11.25 20.4752 11.25 19.3108V11.16H13.75V19.3429ZM0 24.8H25V0H0V24.8Z" fill="black"/>
    </g>
    <defs>
      <clipPath id="jsClip">
        <rect width="25" height="25" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const CursorIconBlack = () => (
  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" className="h-5 w-5 shrink-0 opacity-60" style={{ minWidth: "1.25rem" }}>
    <path d="M20.5811 5.6806L10.9972 0.133623C10.6894 -0.0445409 10.3097 -0.0445409 10.0019 0.133623L0.418434 5.6806C0.159726 5.83035 0 6.10727 0 6.40723V17.5928C0 17.8923 0.159726 18.1697 0.418434 18.3194L10.0024 23.8664C10.3101 24.0445 10.6899 24.0445 10.9976 23.8664L20.5815 18.3194C20.8403 18.1697 21 17.8927 21 17.5928V6.40723C21 6.10774 20.8403 5.83035 20.5815 5.6806H20.5811ZM19.9791 6.85558L10.7272 22.9201C10.6647 23.0283 10.4996 22.9841 10.4996 22.8587V12.3399C10.4996 12.1297 10.3875 11.9353 10.2057 11.8297L1.11898 6.57052C1.01099 6.50784 1.05509 6.34227 1.18016 6.34227H19.6839C19.9467 6.34227 20.1109 6.6278 19.9795 6.85605H19.9791V6.85558Z" fill="black"/>
  </svg>
);

const iconImg = (src) => () => (
  <span
    className="inline-block h-5 w-5 shrink-0 opacity-60"
    style={{ minWidth: "1.25rem", filter: "brightness(0) saturate(100%)" }}
  >
    <img src={src} alt="" className="size-full object-contain" />
  </span>
);
const LowesIcons = [
  iconImg(figmaSvg),
  iconImg(airtableSvg),
  iconImg(miroSvg),
  iconImg(javaScriptSvg),
  iconImg(slackSvg),
];

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const MECHANA_HD_DESCRIPTION =
  "When the System Broke Me, I Built a Better One";
const HD_LOWES_DESCRIPTION = "Driving Operational Wins Through AI-Powered Automation";
const LOWES_PLATFORM_DESCRIPTION =
  "One smart platform for orders, jobs, and deliveries. See how I built it";

const PROJECTS_GRID = [
  [mechanaAi, hd, lowesPo],
  [zeroWaitPRJ, lowesB, webPortfolio],
  [spendAnalytics, coverBia, ppp],
  [livongo, intrado, leaflet],
  [voip, qoutelbanner, banner],
  [dscEdited],
].flat().map((src, i) => ({
  src,
  href: i === 0 ? "/projects/mechana-ai" : i === 1 ? "/projects/hd" : i === 2 ? "/projects/lowes-po" : i === 3 ? "/projects/zero-wait-prj" : i === 4 ? "/projects/lowes-b" : i === 5 ? "/projects/web-portfolio" : i === 6 ? "/projects/spend-analytics" : i === 7 ? "/projects/cover-bia" : i === 8 ? "/projects/ppp" : i === 9 ? "/projects/livongo" : i === 10 ? "/projects/intrado" : i === 11 ? "/projects/leaflet" : i === 12 ? "/projects/voip" : i === 13 ? "/projects/qoutel" : i === 14 ? "/projects/banner" : i === 15 ? "/projects/photography" : undefined,
  icons: i === 0 ? [FigmaIconBlack, ReactIconBlack, JavaScriptIconBlack, CursorIconBlack, iconImg(aiImg), iconImg(photoshopImg)] : i === 1 ? LowesIcons : i === 2 ? [iconImg(figmaSvg), iconImg(photoshopImg), iconImg(aiImg), iconImg(adobeImg)] : i === 3 ? [iconImg(figmaSvg), iconImg(geminiImg), iconImg(gcloudImg), iconImg(nodejsImg), iconImg(pythonImg), iconImg(aiImg), iconImg(photoshopImg)] : i === 4 ? [iconImg(figmaSvg), iconImg(photoshopImg), iconImg(aiImg), iconImg(adobeImg)] : i === 5 ? [iconImg(figmaSvg), ReactIconBlack, iconImg(javaScriptSvg), iconImg(cursorSvg), iconImg(aiImg), iconImg(photoshopImg)] : i === 6 ? [iconImg(figmaSvg), iconImg(aiImg), iconImg(photoshopImg), iconImg(adobeImg)] : i === 7 ? [iconImg(figmaSvg), iconImg(aiImg), iconImg(photoshopImg), iconImg(adobeImg)] : i === 8 ? [iconImg(figmaSvg), iconImg(aiImg), iconImg(photoshopImg), iconImg(adobeImg)] : i === 9 ? [iconImg(figmaSvg)] : i === 10 ? [iconImg(figmaSvg)] : i === 11 ? [iconImg(figmaSvg)] : i === 12 ? [iconImg(figmaSvg)] : i === 13 ? [iconImg(figmaSvg)] : i === 14 ? [iconImg(figmaSvg)] : i === 15 ? [iconImg(figmaSvg)] : undefined,
  title: i === 2 ? "New Product | 2025" : i === 4 ? "Redesign | 2024" : i === 6 ? "New Product | 2024" : i === 9 ? "Redesign | 2022" : i === 10 ? "New Product | 2021" : i === 11 ? "Redesign | 2021" : i === 12 ? "Redesign | 2018" : i === 13 || i === 14 ? "New Product | 2017" : i === 15 ? "Photography | 2013" : i === 7 || i === 8 ? "New Product | 2023" : i === 5 ? "New Product | 2026" : i <= 3 ? "New Product | 2026" : undefined,
  description:
    i === 0
      ? MECHANA_HD_DESCRIPTION
      : i === 1
        ? HD_LOWES_DESCRIPTION
        : i === 3
          ? "My Hackathon Journey: From Jobless to Solving Healthcare Wait Times"
          : i === 5
            ? "No Code, No Problem: How I Built a Top-Tier Website with AI-Assisted Frontend Tools"
            : i === 6
              ? "See how I built smarter insights for Pro Contractors"
              : i === 7
                ? 'See how I designed and optimized the "Buy It Again" Experience for pro contractors'
                : i === 8
                  ? "Digital Protection Plan Experience for Pro Customers"
                  : i === 9
                    ? "See how I created effortless Livongo integration with Microsoft Teams"
                    : i === 10
                      ? "Design to Improve School Emergency Response with Teams + Intrado"
                      : i === 11
                        ? "Redesigned Leaflet for seamless MS Teams legal workflows"
                        : i === 12
                          ? "Redesigning the mobile VOIP Application"
                          : i === 13
                            ? "Qoutel: Inspiring minds with quotes"
                            : i === 14
                              ? "Rack N Go - Connecting Competitive Players locally"
                              : i === 15
                                ? "Bridging UX Design and Storytelling Through Photography & Film"
                                : i === 2 || i === 4
                                  ? LOWES_PLATFORM_DESCRIPTION
                                  : LOREM,
}));

export default function ProjectsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (lenis) lenis.scrollTo(0, { immediate: true });
  };

  // Run as early as possible when entering Projects page so we beat Lenis init
  useLayoutEffect(() => {
    scrollToTop();
  }, []);

  // Retry scroll after Lenis may have initialized or restored scroll
  useEffect(() => {
    const id1 = requestAnimationFrame(() => scrollToTop());
    const id2 = setTimeout(scrollToTop, 0);
    const id3 = setTimeout(scrollToTop, 50);
    const id4 = setTimeout(scrollToTop, 150);
    return () => {
      cancelAnimationFrame(id1);
      clearTimeout(id2);
      clearTimeout(id3);
      clearTimeout(id4);
    };
  }, [lenis]);

  // Clear nav state when we were asked to scroll to top
  useEffect(() => {
    if (location.state?.scrollTo === "top") {
      navigate(".", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  return (
    <div className="min-h-screen pt-[136px] text-black bg-white app-lift-up">
      <div className="w-full px-4 py-10 sm:py-12 lg:py-16">
        {/* Projects header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div className="flex flex-col gap-2">
            <h1
              className="font-bold text-4xl sm:text-5xl tracking-[-0.01em] text-black"
              style={{ fontFamily: "Roboto, system-ui, sans-serif", lineHeight: 1.2 }}
            >
              Projects
            </h1>
            <p
              className="text-lg sm:text-xl text-black/90 tracking-[-0.02em]"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif", lineHeight: 1.4 }}
            >
              See how I design systems that turn complexity into clarity.
            </p>
          </div>
        </section>

        {/* Project grid: whole card links to project (same as Explore destination) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 lg:gap-x-6">
          {PROJECTS_GRID.map(({ src, href, icons, title, description }, index) => {
            const exploreClass = "shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black/50 text-white font-medium text-sm hover:bg-zinc-800/50 transition-colors z-10 absolute top-[44px] right-6";
            const cardClass = "flex flex-col w-full min-w-0 rounded-[10px] sm:rounded-[14px] bg-white overflow-hidden pt-2";
            const content = (
              <>
                <div
                  className="group relative w-full min-h-0 shrink-0 overflow-visible rounded-[10px] sm:rounded-[14px] bg-white py-4"
                  style={{ aspectRatio: "426/275" }}
                >
                  {href ? (
                    <span className={exploreClass + " pointer-events-none"} aria-hidden>Explore</span>
                  ) : (
                    <a href="#" className={exploreClass}>Explore</a>
                  )}
                  <img
                    src={src}
                    alt=""
                    className={`absolute inset-0 size-full object-contain object-center rounded-[10px] sm:rounded-[14px] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:brightness-110 ${index === 7 || index === 8 ? "border border-black/20 box-border" : ""}`}
                    style={{
                      backfaceVisibility: "hidden",
                      imageRendering: "auto",
                    }}
                  />
                </div>
                <div className="pl-0 pr-3 py-2.5 sm:pr-4 sm:py-3" style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}>
                  {icons && icons.length > 0 && (
                    <div className="flex items-center gap-2 mb-1.5">
                      {icons.map((Icon, i) => (
                        <Icon key={i} />
                      ))}
                    </div>
                  )}
                  {title && (
                    <p className="text-sm sm:text-base font-bold text-black mb-0.5">{title}</p>
                  )}
                  <p className="text-sm sm:text-base text-black/80">{description}</p>
                </div>
              </>
            );
            return href ? (
              <Link key={index} to={href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={index} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>

        {/* Let's talk footer */}
        <section
          id="footer"
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-16 md:py-20 bg-black rounded-[32px] sm:rounded-[48px] px-6 sm:px-10 md:px-16 mx-4 mt-14"
        >
          <img
            src={profilePic}
            alt="Osita Nwankwo"
            className="w-[210px] h-[210px] sm:w-[300px] sm:h-[300px] md:w-[375px] md:h-[375px] lg:w-[497px] lg:h-[497px] rounded-full object-contain shrink-0"
          />
          <div className="flex flex-col gap-8 items-center md:items-start text-center md:text-left">
            <h2
              className="text-6xl sm:text-8xl lg:text-[140px] font-bold text-white tracking-[-0.02em] leading-[1.1]"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              Let's talk!
            </h2>
            <a
              href="mailto:nwankwo908@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black text-lg hover:opacity-90 transition-opacity"
              style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}
            >
              nwankwo908@gmail.com
              <span className="inline-block -rotate-135" aria-hidden>
                →
              </span>
            </a>
          </div>
        </section>

        {/* Bottom bar */}
        <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-black/60 tracking-[-0.01em] border-t border-black/10">
          <p style={{ fontFamily: "Alte Haas Grotesk, system-ui, sans-serif" }}>
            {new Date().getFullYear()} © — Made by Osita Nwankwo
          </p>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/osi-n-5803a11b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors underline"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
