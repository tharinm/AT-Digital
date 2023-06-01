import React from "react";
import Header from "./Header/Header";
import Footer from "../components/Footer/Footer";
import TopContent from "./Content/TopContent";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="top-content-wrapper ">
        <TopContent />
        <Footer  />
      </div>
    </div>
  );
}
