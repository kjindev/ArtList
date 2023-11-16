import ArtDetailContent from "../_component/map/ArtDetailContent";
import MapContent from "../_component/map/MapContent";

export default function Map() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full pc:w-[900px] h-[100vh] flex justify-between items-center">
        <MapContent />
        <ArtDetailContent />
      </div>
    </div>
  );
}
