"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./animation.css";
import { ArtTypes } from "../component/types/data";
import location from "../assets/location.svg";

export default function Map() {
  const [data, setData] = useState<ArtTypes[]>([]);
  const mapRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<any>();
  const [markers, setMarkers] = useState<any>([]);
  const [isShowMenu, setIsShowMenu] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setData(data.artList));
  }, []);

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
        maxBounds: new naver.maps.LatLngBounds(sw, ne),
        disableKineticPan: false,
        mapDataControl: false,
        scaleControl: false,
        tileSpare: 4,
      });
      setMap(map);
    }
  }, []);

  useEffect(() => {
    const { naver } = window;
    if (map && data.length !== 0) {
      // marker api 코드
      let tempMarkers = [];
      for (let item of data) {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item.LOT, item.LAT),
          map: map,
          // icon: location,
        });
        tempMarkers.push(marker);
      }
      setMarkers(tempMarkers);
    }
  }, [map, data]);

  return (
    <div className="w-full h-[100vh]">
      <div className="z-10 fixed flex justify-bewteen items-center w-[100%] p-5">
        <Link
          href="/"
          className="w-[10%] bg-white p-3 rounded-xl shadow-md text-sm mx-2 text-center hover:bg-slate-100 "
        >
          홈
        </Link>
        <form className="w-[90%]" onChange={(e) => console.log(e)}>
          <input
            placeholder="주소, 이름으로 검색해보세요"
            className="py-3 rounded-xl px-4 text-sm w-[100%] shadow-md"
          />
        </form>
      </div>
      <div
        onClick={() => setIsShowMenu(!isShowMenu)}
        className={`${
          isShowMenu ? "menuUp" : "menuDown"
        } z-10 fixed bottom-0 bg-white w-[100%] h-[80%] rounded-t-2xl shadow-inner hover:cursor-pointer`}
      >
        <div className="flex flex-col items-center mt-4">
          <div className="w-[80px] h-[5px] bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div
        onClick={() => setIsShowMenu(false)}
        ref={mapRef}
        className="w-[100%] h-[100%]"
      ></div>
    </div>
  );
}
