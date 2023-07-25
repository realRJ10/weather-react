import React from "react";

export default function Degree(props) {
  return (
    <h2>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        id="icon"
        width="85px"
      />
      <span id="temp">{props.Temp}</span>
      <small id="degree">
        <a href="#" id="toC">
          °C
        </a>
        |
        <a href="#" id="toF">
          °F
        </a>
      </small>
    </h2>
  );
}
