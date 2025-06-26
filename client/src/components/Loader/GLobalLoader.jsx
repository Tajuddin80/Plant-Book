import React from "react";
import { useNavigation } from "react-router";
import Loader from "./Loader";

const GlobalLoader = () => {
  const navigation = useNavigation();

  return navigation.state === "loading" ? <Loader /> : null;
};

export default GlobalLoader;
