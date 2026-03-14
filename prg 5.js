import React from "react";
import Slider from "./Slider";

const images = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1019/800/400"
];
function App() {
  return (
    <div>
      <h1>Simple Image Slider</h1>
      <Slider images={images} />
    </div>
  );
}
export default App;

