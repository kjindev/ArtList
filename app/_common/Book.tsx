// import "../_style/css/book.css";

interface DataType {
  width: number;
  height: number;
  color: string;
  children: any;
}
export default function Book({ width, height, color, children }: DataType) {
  return (
    <>
      <style>{style}</style>
      <div id="container">
        <div className="book">
          <div
            className="bookCover"
            style={{
              width: width,
              height: height,
              backgroundColor: color,
              // backgroundColor: "linear-gradient(to bottom right, #57a3f2, #3c86ec)",
            }}
          >
            {/* <div className="binder"></div> */}
            {/* <div className="title"></div> */}
            {/* <div className="text">A</div> */}
            {/* <div>{children}</div> */}
            {/* <img
              src="https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover w-[100%] h-[100%] fixed z-[1]"
            /> */}
          </div>
          <div
            className="bookSide"
            style={{ width: 20, height: height - 10 }}
          ></div>
          <div
            className="bookBack"
            style={{
              width: width,
              height: height - 10,
              backgroundColor: color,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

const style = `
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text{
  font-size: 100px;
  font-weight: 600;
  background: linear-gradient(to bottom right, #ffffff, #b7b7b7);
  -webkit-background-clip: text;
  color: linear-gradient(to bottom right, #ffffff, #b7b7b7);
  text-shadow : 2px 2px 7px rgba(0, 0, 0, 0.2),
  2px 2px 6px rgba(0, 0, 0, 0.2);
}

.book {
  display: flex;
  align-items: center;
  position: relative;
}

.book:hover {
  cursor: pointer;
}

.book .bookCover {
  background: linear-gradient(
    to bottom right,
    rgb(142, 189, 47),
    rgb(119, 161, 35)
  );
  box-shadow: inset 2px 2px 7px rgba(255, 255, 255, 0.2),
  2px 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  border-radius: 12px;
  transition: transform 0.5s ease-in-out;
  transform: perspective(300px) rotateY(0deg);
  padding-right: 20px;
  display: flex;
  justify-content: center;
  padding: 18px;
}

.book:hover .bookCover {
  transition: transform 0.5s ease-in-out;
  transform: perspective(300px) rotateY(-5deg);
}

.book .bookCover .binder {
  width: 15%;
  /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1); */
  box-shadow: inset 2px 2px 7px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.book .title {
  width: 100%;
  height: 50%;
  background: linear-gradient(
    to bottom right,
    rgb(142, 189, 47),
    rgb(119, 161, 35)
  );
  border-radius: 12px;
  box-shadow: inset 2px 2px 7px rgba(255, 255, 255, 0.2),
    2px 2px 6px rgba(0, 0, 0, 0.2);
}
.book .bookSide {
  z-index: 5;
  position: absolute;
  right: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: linear-gradient(to left, white, #e2e2e2a7);
  transition: transform 0.5s ease-in-out;
  transform: perspective(300px) rotateY(90deg) translateX(20px);
}

.book:hover .bookSide {
  animation: transform 0.5s ease-in-out;
  transform: perspective(300px) rotateY(30deg) translateX(20px);
}

.book .bookBack {
  position: absolute;
  right: 0;
  border-radius: 12px;
  width: 200px;
  height: 230px;
  transition: transform 0.5s ease-in-out;
  transform: perspective(300px) rotateY(0deg);
  padding-right: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.23);
}

.book:hover .bookBack {
  transition: transform 0.5s ease-in-out;
  transform: perspective(300px) rotateY(-5deg) translateX(20px);
}
`;
