//REACT CUSTOM Component
//@author: Israel Abazie
import React from "react";


export function ColorCodeGenerator({ params }) {
  const colorsData = UseColorCode(params);

  return (
    <div style= {{textAlign: "center", padding: "10px", fontSize: "25px",  backgroundColor: "#282c34",
    minHeight: "100vh", color: "white"}}>
      <h1>Instant Color Code Generator</h1>
      <h3>Created by Israel Abazie (@vintage-creator)</h3>
      <h4>
        Follow me:{" "}
        <div>
          <a href="https://www.linkedin.com/in/israel-abazie/" style={{color: "silver"}}>LinkedIn</a>
        </div>
        <div>
          <a href="https://github.com/vintage-creator" style={{color: "silver"}}>Github</a>
        </div>
      </h4>

      <div
        style={{
          width: "90%",
          margin: "0px auto",
          display: "flex",
          textAlign: "center",
          flexWrap: "wrap",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "35px",
          alignItems: "center",
        }}
      >
        {colorsData.map((item) => {
          return (
            <div
              key={item.color}
              style={{
                backgroundColor: `#${item.color}`,
                width: "200px",
                borderRadius: "20px",
                height: "200px",
                border: `1px solid #ffff`,
                padding: "20px",
                margin: "10px",
              }}
            ><div style={{marginTop: "35%"}}>{`#${item.color}`}</div></div>
          );
        })}
      </div>
    </div>
  );
}


function UseColorCode(params) {
  const RandomColor = () => {
    let randomcolors;
    randomcolors = Math.floor(Math.random() * 16777215).toString(16);
    if (randomcolors.length < 6) {
      randomcolors = randomcolors + Math.floor(Math.random() * 7).toString();
    }
    return randomcolors;
  };

  let colorsData = [];
  if (params >= 1) {
    for (let i = 0; i < params; i++) {
      colorsData.push({
        color: RandomColor(),
      });
    }
  } else {
    alert("Please enter a valid number");
    return;
  }

  return colorsData;
}




