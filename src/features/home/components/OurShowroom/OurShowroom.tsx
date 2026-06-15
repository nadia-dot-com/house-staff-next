'use client'

import classes from "./OurShowroom.module.scss";
import { Button } from "@/components/ui/Button/Button";
import { SHOP_GOOGLE_MAPS_LOCATION_URL } from "@/config/shop";
import Image from "next/image";

export function OurShowroom() {
  return (
    <section className={classes.ourshowroomSection}>
      <div className={classes.text}>
        <div>
          <h1 className={classes.title}>Our Showroom</h1>
          <p className={classes.desc}>
            Welcome to ErgoCraft showroom, where style meets comfort and functionality. Step into a
            world where every piece of furniture tells a story of craftsmanship and elegance.
            Transform your living spaces into expressions of your lifestyle. Visit ErgoCraft today
            and let us help you turn your vision for your home or office into a reality. Your dream
            space awaits!
          </p>
        </div>

        <div className={classes.button}>
          <Button
            bgColor="white"
            textColor="black"
            text="• VISIT US"
            onClick={() =>
              window.open(SHOP_GOOGLE_MAPS_LOCATION_URL, "_blank", "noopener,noreferrer")
            }
            ariaLabel="visit us on Google Maps"
          />
        </div>
      </div>

      <Image
        className={classes.img}
        src={"/img/ourshowroom/ourshowroom.webp"}
        alt="ourshowroom"
        width="968"
        height="646"
      />
    </section>
  );
}
