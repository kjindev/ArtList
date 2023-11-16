"use client";

import { useEffect, useRef, useState } from "react";
import { ArtTypes } from "../../_types/data";
import { useRecoilState } from "recoil";
import { artDataState } from "../../_state/state";
import { getArtData } from "../../_utils/useData";
import "../../_style/css/mapContent.css";

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
        zoom: 15,
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
            content: `<img src="/location.svg" width="36" height="36" alt=""/>`,
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(18, 18),
          },
          DATE: item.DATE,
          END_DATE: item.END_DATE,
          GUNAME: item.GUNAME,
          IS_FREE: item.IS_FREE,
          MAIN_IMG: item.MAIN_IMG,
          ORG_LINK: item.ORG_LINK,
          ORG_NAME: item.ORG_NAME,
          PLACE: item.PLACE,
          TITLE: item.TITLE,
        });
        tempMarkers.push(marker);
      }
      setMarkers(tempMarkers);
    }
  }, [map, artList]);

  useEffect(() => {
    if (markers.length !== 0) {
      markers.map((marker: any) => {
        const content = `<div id="container">
        <div id="title">${marker.TITLE}</div>
        <div id="content"><img src="/location_on.svg" width="15" height="15"/><div>${marker.PLACE}</div></div>
      </div>`;

        const infowindow = new naver.maps.InfoWindow({
          content: content,
          borderWidth: 1,
          borderColor: "#00000050",
          anchorColor: "#ffffff",
          anchorSkew: false,
        });

        naver.maps.Event.addListener(marker, "click", function (e: any) {
          if (infowindow.getMap()) {
            infowindow.close();
          } else {
            infowindow.open(map, marker);
          }
        });
      });
    }
  }, [markers]);

  return (
    <div
      ref={mapRef}
      className="w-[600px] h-[500px] rounded-md shadow-md"
    ></div>
  );
}
