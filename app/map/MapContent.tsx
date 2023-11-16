"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./animation.css";
import { ArtTypes } from "../_types/data";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { artDataState } from "../_state/state";
import { getArtData } from "../_utils/useData";
import pin from "../_assets/pin.png";
import Script from "next/script";

export default function MapContent() {
  const mapRef = useRef<HTMLInputElement>(null);
  // const [map, setMap] = useState<any>(null);
  // const [markers, setMarkers] = useState<any>([]);
  // const [isShowMenu, setIsShowMenu] = useState(false);
  // const [artData, setArtData] = useRecoilState(artDataState);
  // const [artList, setArtList] = useState<ArtTypes[] | null>(null);

  // if (!artData) {
  //   getArtData().then((data) => {
  //     setArtData(data);
  //     setArtList(data);
  //   });
  // } else {
  //   setArtList(artData);
  // }
  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(37.3595704, 127.105399);
      const sw = new naver.maps.LatLng(37.4533862, 126.8025048);
      const ne = new naver.maps.LatLng(37.6599625, 127.1719201);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 14,
        minZoom: 12,
        maxZoom: 16,
        enableWheelZoom: true,
        maxBounds: new naver.maps.LatLngBounds(sw, ne),
        disableKineticPan: false,
        mapDataControl: false,
        scaleControl: false,
      });

      // setMap(map);
    }
  }, []);

  // if (map && artList && markers.length === 0) {
  //   let tempMarkers: ArtTypes[] = [];
  //   for (let item of artList) {
  //     const marker = new naver.maps.Marker({
  //       position: new naver.maps.LatLng(item.LOT, item.LAT),
  //       map: map,
  //       icon: {
  //         content: `<img src="/location.svg" width="35" height="35" alt="" className="shadow"/>`,
  //       },
  //     });
  //   }
  // }

  return (
    <>
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
      />

      <div className="w-full h-[100vh]">
        {/* <div className="bg-white w-[360px] h-[100vh] fixed z-[30] shadow-md">
          <Link href="/">
            서울, 오늘의 문화{" "}
            <span className="bg-gray-200 px-3 py-2 text-sm rounded-xl">홈</span>
          </Link>
          <div>추천해요!</div>
        </div> */}
        <div
          // onClick={() => setIsShowMenu(false)}
          ref={mapRef}
          className="w-[100%] h-[100%]"
        ></div>
      </div>
    </>
  );
}
