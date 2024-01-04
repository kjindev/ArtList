import ArtDetailContent from "../_component/map/ArtDetailContent";
import MapContent from "../_component/map/MapContent";
import MapContent2 from "../_component/map/MapContent2";

export default function Map() {
  return (
    // <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col  justify-center items-center">
      <div className="pt-[60px] w-full pc:w-[900px] h-[100vh] flexjustify-between items-center">
        <MapContent2 />
      </div>
    </div>
    // </div>
    // <div className="flex justify-center items-center">
    //   <div className="w-full pc:w-[900px] h-[100vh] flex justify-between items-center">
    //     <MapContent />
    //     <ArtDetailContent />
    //   </div>
    // </div>
  );
}
