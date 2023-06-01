import React from "react";
import Button from "react-bootstrap/Button";

export default function ContentButton({ btn_text }) {
  return (
    <div >
      <Button
        variant="primary"
        style={{
          width: "128px",
          height: "38px",
          backgroundColor: "#F28D35",
          borderRadius: "4px",
          fontFamily: "inter",
          fontSize: "14px",
          border: "none",
          fontWeight: "500",
          lineHeight: "14px",
          marginTop:'5px'
        }}
      >
        {btn_text}
      </Button>
    </div>
  );
}
