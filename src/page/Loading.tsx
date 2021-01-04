import * as React from "react";
import { FC, useState } from "react";
import { useEffectOnce } from "react-use";

import "../sass/page/loading.sass";

const Loading: FC = () => (
  <div className="loading">
    <div className="outer">
      <div className="child"></div>
      <div className="child"></div>
      <div className="child"></div>
      <p className="text">Loading...</p>
    </div>
  </div>
);

const IsLoading: FC = () => {
  // useEffectOnce(() => {
  //   const timer = setInterval(() => {}, 20);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // });
  return <Loading />;
};

export default IsLoading;
