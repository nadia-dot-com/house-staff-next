"use client";

import { Button } from "@/components/ui/Button/Button";
import { categoriesGroups } from "@/constants/categories";
import classes from "./Sale.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { routes } from "@/constants/navigation/routes";

export function Sale() {
  const route = useRouter();

  return (
    <section className={classes.saleSection}>
      <div
        className={classes.bg}
        style={{
          backgroundImage: `url("/img/sale/sale-bg.webp")`,
        }}
      />

      <div className={classes.products}>
        <div className={classes.contentLimit}>
          <div className={classes.chair}>
            <Image src="/img/sale/sale-chair.webp" alt="sale-chair" width="390" height="454" />
            <span className={classes.percent}>-10%</span>
          </div>

          <div className={classes.table}>
            <Image src="/img/sale/table-sale.webp" alt="sale-table" width="320" height="492" />
            <span className={classes.percent}>-20%</span>
          </div>
          <div className={classes.vase}>
            <Image src="/img/sale/sale-vase.webp" alt="sale-vase" width="140" height="259" />
            <span className={classes.percent}>-20%</span>
          </div>
        </div>
      </div>

      <div className={classes.text}>
        <h1 className={classes.title}>Spring Sale</h1>
        <h2 className={classes.desc}>
          Enjoy up to <span style={{ color: "red" }}>40%</span> off a selection of furniture, decor,
          and more.
        </h2>
        <Button
          bgColor="#ca3500"
          textColor="white"
          onClick={() => route.push(routes.category(categoriesGroups.sale))}
          ariaLabel="go to the discount products category"
          text={"• SHOP NOW"}
        />
      </div>
    </section>
  );
}
