import { routes } from "@/constants/routes";
import classes from "./PopularCategory.module.scss";
import { Category } from "@/types/api/category";
import Link from "next/link";
import Image from "next/image";

export function PopularCategory({ category }: { category: Category }) {
  return (
    <li className={classes.categoryItem}>
      <Link href={routes.category(category.name)}>
        <Image
          src={category.imageUrl}
          alt={category.name}
          className={classes.img}
          width="284"
          height="350"
        />
        <span className={classes.title}>{category.name}</span>
      </Link>
    </li>
  );
}
