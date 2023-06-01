import React from "react";
import Button from "react-bootstrap/Button";

export default function HeaderButton() {
  return (
    <div>
      <Button
        variant="primary"
        style={{
          backgroundColor: "#F28D35",
          width: "212px",
          height: "38px",

          border: "none",
          display: "flex",
          justifyContent: "center",
          fontFamily: "inter",
        //   fontSize: "14px",
          color: "white",
          fontWeight: "500",
        }}
      >
        Get free consultation
      </Button>
    </div>
  );
}
