import React, { useEffect } from "react";
import { useState } from "react";

ProgressLineSingle.defaultProps = {
  label: "",
  width: "0%",
  size: "small",
  type: "horizontal",
  reverse: false,
  bgColor: "",
};

export default function ProgressLineSingle(props) {
  const [widthOfElement, setWidthOfElement] = useState("0%");
  const [heightOfElement, setHeightOfElement] = useState("8px");

  useEffect(() => {
    setWidthOfElement(props.width + "%");
    if (props.size === "medium") {
      setHeightOfElement("0.75rem");
    }
  }, [props]);

  const progressTypeHorizontal = (
    <div style={containerStyleTypeOne}>
      <div style={labelStyleTypeOne}>
        <span className="text-primary-400">{props.label}</span>
        <div>
          <span className="fw-semi-bold">{widthOfElement}</span>
        </div>
      </div>
      <div
        style={{
          background: "#F5F6F8",
          height: heightOfElement,
          margin: "10px 0",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <div
          style={{
            width: widthOfElement,
            background: "linear-gradient(180deg, #6993FC 0%, #86A8FF 100.01%)",
            opacity: 1,
            height: heightOfElement,
            borderRadius: "0 8px 8px 0 ",
            transition: "width 2s",
          }}
        ></div>
      </div>
    </div>
  );
  const progressTypeVertical = (
    <div style={{ ...containerStyleTypeTwo, flexDirection: props.reverse ? "row-reverse" : "row" }}>
      {props.label ? <div>{props.label}</div> : null}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexDirection: props.reverse ? "row-reverse" : "row",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#EFEFEF",
            height: heightOfElement,
            margin: "10px 0",
            width: "50%",
            borderRadius: "0 4px 4px 0 ",
            transform: props.reverse ? "rotate(-180deg)" : "rotate(0deg)",
          }}
        >
          <div
            style={{
              width: widthOfElement,
              backgroundColor: "#DF6666",
              opacity: 1,
              height: heightOfElement,
              borderRadius: "0 4px 4px 0 ",
              transition: "width 2s",
            }}
          ></div>
        </div>
        <div>
          <strong>{widthOfElement}</strong>
        </div>
      </div>
    </div>
  );

  return <>{props.type === "vertical" ? progressTypeVertical : progressTypeHorizontal}</>;
}

const containerStyleTypeOne = {
  textAlign: "left",
};
const containerStyleTypeTwo = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};
const labelStyleTypeOne = {
  display: "flex",
  justifyContent: "space-between",
};
