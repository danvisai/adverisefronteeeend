import React from "react";
import { Component } from "../../components/Component";
import { IonSearchCircle } from "../../components/IonSearchCircle";
import "./style.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="div">
        <div className="overlap-group">
          <img
            className="page-bg"
            alt="Page bg"
            src="https://generation-sessions.s3.amazonaws.com/ea1c03040630aabada62d791d57b0fdf/img/page-1-bg.png"
          />
          <Component className="component-1" property1="frame-1" />
          <img
            className="img"
            alt="Page bg"
            src="https://generation-sessions.s3.amazonaws.com/ea1c03040630aabada62d791d57b0fdf/img/page-2-bg.png"
          />
          <h1 className="text-wrapper">Our Work</h1>
          <div className="group">
            <IonSearchCircle className="ion-search-circle-instance" />
          </div>
        </div>
        <img
          className="team-page"
          alt="Team page"
          src="https://generation-sessions.s3.amazonaws.com/ea1c03040630aabada62d791d57b0fdf/img/team-page-1.png"
        />
      </div>
    </div>
  );
};
