"use client";

import classes from "./Collections.module.scss";
import { useEffect, useRef, useState } from "react";
import { HorizontalScrollButton } from "@/components/ui/HorizontalScrollButton/HorizontalScrollButton";
import { CollectionItem } from "./CollectionItem/CollectionItem";
import { useResize } from "@/hooks/useResize";
import type { Collection } from "@/types/api/collection";
import { Product } from "@/types/api/product";

export function Collections({ collections, products }: { collections: Collection[], products: Product[] }) {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const THRESHOLD = 40;
    const { scrollLeft, scrollWidth, clientWidth } = el;

    const canScroll = scrollWidth > clientWidth + THRESHOLD;

    setIsAtStart(scrollLeft <= THRESHOLD);
    setIsAtEnd(!canScroll || scrollLeft + clientWidth >= scrollWidth - THRESHOLD);
  };

  useResize(scrollRef, handleScroll);

  useEffect(() => {
    if (!collections) return;

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, [collections]);

  useEffect(() => {}, [isAtStart]);

  const scroll = (direction: "left" | "right") => {
    const target = scrollRef.current;
    if (!target) return;

    const style = window.getComputedStyle(target);
    const gap = parseFloat(style.columnGap || style.gap);

    const itemWidth = target.children[0].getBoundingClientRect().width + gap;
    target.scrollBy({ left: direction === "left" ? -itemWidth : +itemWidth });
  };

  return (
    <section className={classes.collectionWrapper}>
      <HorizontalScrollButton
        onClick={() => scroll("left")}
        direction="left"
        disabled={isAtStart}
      />
      <ul className={classes.collection} ref={scrollRef}>
        {(collections || []).map((el) => (
          <CollectionItem key={el.id} collectionItem={el} products={products}/>
        ))}
      </ul>
      <HorizontalScrollButton
        onClick={() => scroll("right")}
        direction="right"
        disabled={isAtEnd}
      />
    </section>
  );
}
