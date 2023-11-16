"use client";

import { useEffect, useRef, useState } from "react";
import { ArtTypes } from "../../_types/data";
import { useRecoilState } from "recoil";
import { artDataState } from "../../_state/state";
import { getArtData } from "../../_utils/useData";
import Script from "next/script";

export default function MapContent() {
  const mapRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<any>(null);
  const [markers, setMarkers] = useState<any>([]);
  const [artData, setArtData] = useRecoilState(artDataState);
  const [artList, setArtList] = useState<ArtTypes[] | null>(null);
  const { naver } = window;

  useEffect(() => {
    if (naver) {
      const location = new naver.maps.LatLng(37.3595704, 127.105399);
      const sw = new naver.maps.LatLng(37.4533862, 126.8025048);
      const ne = new naver.maps.LatLng(37.6599625, 127.1719201);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 14,
        minZoom: 11,
        maxZoom: 16,
        enableWheelZoom: true,
        maxBounds: new naver.maps.LatLngBounds(sw, ne),
        disableKineticPan: false,
        mapDataControl: false,
        scaleControl: false,
      });
      setMap(map);
    }
  }, [naver]);

  useEffect(() => {
    if (!artData) {
      getArtData().then((data) => {
        setArtData(data);
        setArtList(data);
      });
    } else {
      setArtList(artData);
    }

    if (map && artList) {
      let tempMarkers: ArtTypes[] = [];
      for (let item of artList) {
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(item.LOT, item.LAT),
          map: map,
          icon: {
            content: `<img src="/location.svg" width="35" height="35" alt="" className="shadow"/>`,
          },
        });
        tempMarkers.push(marker);
      }
      setMarkers(tempMarkers);
    }
  }, [map, artList]);

  return (
    <div
      ref={mapRef}
      className="w-[600px] h-[500px] rounded-md shadow-md"
    ></div>
  );
}
