import SideBarAccordion from "@components/layouts/Sidebar/SideBarAccordion/SideBarAccordion";
import { useRouter } from "next/router";
import { useState } from "react";
import Box from '@mui/material/Box';
import * as Icon from 'react-feather';
import NavIcon from "./SideBarAccordion/NavIcon";
import styles from "./sidebar.module.css";

const SIDEBAR_LINKS = [
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5e",
    link: "/dashboard/practice-overview",
    title: "Dashboard",
    slug: "dashboard",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5ee",
    link: "/",
    title: "Image List",
    slug: "image-list",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eee",
    link: "/",
    title: "Technologists List",
    slug: "technologists-list",
    icon: "",
  },
  {
    id: "46f7dc9b-e75d-40e0-8d14-1e7334d16d5eeee",
    link: "/",
    title: "test",
    slug: "test",
    icon: "",
  },
];


export default function SideBar({ setExpSidebar }) {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("46f7dc9b-e75d-40e0-8d14-1e7334d16d5e");
  const handleActiveRoute = (link) => {
    console.log(link);
    setActiveLink(link.id);
    router.push(link.link);
  }

  // to expand sidebar
  const [expandSidebar, setExpandSidebar] = useState(false);
  const handleExpandSidebar = () => {
    setExpandSidebar(!expandSidebar);
    setExpSidebar(!expandSidebar);
  }

  return (
    <Box className={!expandSidebar ? styles["sidebar__normal"] : styles["sidebar__expand"]}>

      <Box
        className={!expandSidebar ? styles["sidebar__brand"] : styles["sidebar__brand__expanded"]}
        onClick={() => handleExpandSidebar()}
      >
        {!expandSidebar ? <img src="/icons/site_logo_short.svg" alt="logo" /> : <img src="/icons/site_logo.svg" alt="logo" />}
      </Box>


      <Box sx={{ alignItems: "center", p: "1rem", borderRadius: "12px", mt: "1rem", cursor: "pointer" }}>
        {!expandSidebar ? <NavIcon /> : <SideBarAccordion />}
      </Box>


      {SIDEBAR_LINKS.map((link) => (
        <Box
          key={link.id}
          className={styles["sidebar__link"] + " " + (activeLink === link.id ? styles["active"] : null)}
          onClick={() => handleActiveRoute(link)}
        >
          <Box className="triangle1"></Box>

          <Box className={styles["sidebar__link_icon"] + " " + (!expandSidebar ? styles["sidebar__link_icon"] : styles["sidebar__link__icon__expanded"])}>

            {link.slug === "dashboard" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <Icon.Home size={25} color={activeLink === link.id ? "black" : "white"} />
                <span className={(!expandSidebar ? "d__none" : styles["side__menu__text"]) + " " + (activeLink === link.id ? styles["side__menu__text__active"] : styles["side__menu__text__inactive"])}>Dashboard</span>
              </span>
            ) : link.slug === "image-list" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <Icon.Image size={25} color={activeLink === link.id ? "black" : "white"} />
                <span className={(!expandSidebar ? "d__none" : styles["side__menu__text"]) + " " + (activeLink === link.id ? styles["side__menu__text__active"] : styles["side__menu__text__inactive"])}>Image List</span>
              </span>
            ) : link.slug === "technologists-list" ? (
              <span style={{ display: "flex", alignItems: "center" }}>
                <Icon.Users size={25} color={activeLink === link.id ? "black" : "white"} />
                <span className={(!expandSidebar ? "d__none" : styles["side__menu__text"]) + " " + (activeLink === link.id ? styles["side__menu__text__active"] : styles["side__menu__text__inactive"])}>Technologists List</span>
              </span>
            ) : null}

          </Box>

          <Box className="triangle2"></Box>
        </Box>
      ))}
    </Box>
  );
}
