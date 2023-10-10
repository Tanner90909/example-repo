"use client"
import Header from "@/components/Header";
import React from "react";

export default function Home() {
  // js goes here
function clickHandler(e){
  console.log("I have been clicked!");
}

  // html goes below in return
  return (
    <div>
      <Header />
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
}
