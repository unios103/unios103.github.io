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
  const [isEnd, setIsEnd] = useState(false);

  useEffectOnce(() => {
    setTimeout(() => {
      setIsEnd(true);
    }, 4 * 1000);
  });

  const Load = isEnd ? <></> : <Loading />;

  return <>{Load}</>;
};

export default IsLoading;
