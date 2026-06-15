import classes from "./PopularCategories.module.scss";
import { Category } from "@/types/api/category";
import { PopularCategory } from "./PopularCategory/PopularCategory";

export function PopularCategories({categories}: {categories: Category[]}) {
  return (
      <section className={classes.categoriesWrapper}>
        <div className={classes.popular}>Popular categories</div>
        <ul className={classes.categories}>
          {(categories || []).map((category) => (
            <PopularCategory key={category.name} category={category} />
          ))}
        </ul>
      </section>
  );
}
