'use client'

import classes from "./PresentationItem.module.scss";
import { PresentationProps } from "@/types/presentation";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button/Button";
import { PRESENTATION } from "../data/presentation";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

export function PresentationItem({ item }: { item: PresentationProps }) {
const router = useRouter();

  return (
    <motion.div
      className={classes.slide}
      key={item.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <motion.img
        src={item.img}
        alt={item.title}
        className={classes.image}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
        width="1760"
        height="600"
        fetchPriority="high"
      />
      <div className={cn(classes.content, item === PRESENTATION[0] && classes.contentColor1)}>
        <h1 className={classes.title}>{item.title}</h1>
        <p className={classes.desc}>{item.desc}</p>
        <Button
          bgColor="white"
          textColor="black"
          onClick={() => router.push(routes.category(item.category))}
          text={"• SHOP NOW"}
          ariaLabel={`Go to ${item.category}`}
        />
      </div>
    </motion.div>
  );
}
