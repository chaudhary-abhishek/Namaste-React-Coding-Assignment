import { useEffect, useState } from "react";
import { MENU_LNK } from "./constants";
const useRestaurentMenu = (id) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchRestaurentMenu();
  }, []);

  const fetchRestaurentMenu = async () => {
    const data = await fetch(MENU_LNK + id);
    const json = await data.json();
    console.log(json);
    setMenu(json.data);
  };
  return menu;
};

export default useRestaurentMenu;
