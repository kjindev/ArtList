import Polaroid from "../../_common/Polaroid";

export function StageNow() {
  return (
    <div className="flex flex-col justify-center items-center pc:w-[900px] h-[100vh]">
      <div className="flex flex-col justify-center self-start mt-9 mb-5">
        <p className="justify-self-start text-4xl font-bold mb-1">
          뮤지컬, 오페라는 어때요?
        </p>
        <p className="text-gray-700 pl-[0.15rem]">공연으로 추억을 남겨봐요</p>
      </div>
      <div className="flex flex-wrap pt-5 pb-10">
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={3}
          >
            hello
          </Polaroid>
        </div>
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={-2}
          >
            hello
          </Polaroid>
        </div>
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={-1.5}
          >
            hello
          </Polaroid>
        </div>
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={2}
          >
            hello
          </Polaroid>
        </div>
      </div>
    </div>
  );
}
