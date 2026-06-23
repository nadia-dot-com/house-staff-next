import classes from "./Footer.module.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import {
  SHOP_ADDRESS,
  SHOP_EMAIL,
  SHOP_GOOGLE_MAPS_LOCATION_URL,
  SHOP_PHONE,
  SHOP_PHONE_TEL,
  SHOP_SOCIALS,
  SHOP_WORKING_HOURS,
} from "@/config/shop";
import Link from "next/link";
import { routes } from "@/constants/navigation/routes";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.info}>
        <li>
          <FaPhoneAlt />
          <a href={`tel:${SHOP_PHONE_TEL}`}>{SHOP_PHONE}</a>
        </li>
        <li>
          <MdOutlineAlternateEmail />
          <a href="mailto:housestaffcontact@gmail.com">{SHOP_EMAIL}</a>
        </li>
        <li className={classes.time}>
          <IoIosTime />
          {SHOP_WORKING_HOURS}
        </li>
        <li>
          <MdPlace />
          <a href={SHOP_GOOGLE_MAPS_LOCATION_URL} target="_blank" rel="noopener noreferrer">
            {SHOP_ADDRESS}
          </a>
        </li>
      </ul>
      <div className={classes.socials}>
        <a
          href={SHOP_SOCIALS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaSquareFacebook />
        </a>
        <a
          href={SHOP_SOCIALS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaSquareInstagram />
        </a>
      </div>
      <div className={classes.contact}>
        <Link href={routes.contact}>
          More Contact
          <HiOutlineExternalLink />
        </Link>
      </div>
      <div className={classes.rights}>All rights reserved &copy;</div>
    </footer>
  );
}
