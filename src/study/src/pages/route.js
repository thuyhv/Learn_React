import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OracleTrick from "./database/oracle/trick";
import HightLightCode from "./demo/highlight";
import Home from "./homePage";
import './index.scss';
import ListFileSelected from "./utilities/listFileSelected";
import RepeatText from "./utilities/repeatText";
import ReplaceText from "./utilities/replaceText";

import TinyMCE from "./utilities/tinyMCE";
import ConnectAPI from "./demo/connectAPI";
import NetAngular from "./netAngular";
import NALesson1 from "./netAngular/naLesson1";
import RandomInsertSQL from "./utilities/randomInsertSQL";
import NALesson2 from "./netAngular/naLesson2";
import NALesson3 from "./netAngular/naLesson3";
import NALesson4 from "./netAngular/naLesson4";
import NALesson5 from "./netAngular/naLesson5";

const RoutesRoot = () => {
  return (
    <BrowserRouter basename="/Learn_React">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/demo/connectAPI" element={<ConnectAPI />} />
        <Route path="/demo/highlightcode" element={<HightLightCode />} />
        
        <Route path="/database/oracle" element={<OracleTrick />} />

        <Route path="/utilities/listFileSelected" element={<ListFileSelected />} />
        <Route path="/utilities/randomInsertSQL" element={<RandomInsertSQL />} />
        <Route path="/utilities/repeatText" element={<RepeatText />} />
        <Route path="/utilities/replaceText" element={<ReplaceText />} />
        <Route path="/utilities/tinyMCE" element={<TinyMCE />} />

        <Route path="/tutorial/net-angular" element={<NetAngular />} />
        <Route path="/tutorial/net-angular/lesson1" element={<NALesson1 />} />
        <Route path="/tutorial/net-angular/lesson2" element={<NALesson2 />} />
        <Route path="/tutorial/net-angular/lesson3" element={<NALesson3 />} />
        <Route path="/tutorial/net-angular/lesson4" element={<NALesson4 />} />
        <Route path="/tutorial/net-angular/lesson5" element={<NALesson5 />} />

        <Route path="/demo/connectAPI" element={<ConnectAPI />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;
