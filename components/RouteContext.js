import React, { useState, createContext } from "react";
import starterRoutes from "./StarterRoutes";

export const RouteContext = createContext();

export const RouteProvider = props => {
  const [routes, setRoutes] = useState({
    activeRoutes: starterRoutes,
    cachedRoutes: []
  });
  return (
    <RouteContext.Provider value={[routes, setRoutes]}>
      {props.children}
    </RouteContext.Provider>
  );
};