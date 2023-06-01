import React from "react";
import Content from "../../components/Content/Content";
import lap from "../../assets/images/lap.png";
import searchImage from "../../assets/images/search.png";

export default function TopContent() {
  const topDetails = [
    {
      id: 1,
      title: "Web & Mobile App Development",
      desc: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
      img: lap,
      btn_text: "EARN MORE",
    },
    {
      id: 2,
      title: "Digital Strategy Consulting",
      desc: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
      img: searchImage,
      btn_text: "LEARN MORE",
    },
  ];
  return (
    <div style={{marginBottom:'80px'}}>
      {topDetails.map((val, key) => {
        return (
          <div key={val.id} style={{padding:'8px'}}>
            <Content
              img={val.img}
              title={val.title}
              desc={val.desc}
              id={val.id}
              btn_text={val.btn_text}
            />
          </div>
        );
      })}
    </div>
  );
}
