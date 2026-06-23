import classes from "./WishlistButton.module.scss";
import Lottie from "lottie-react";
import likeLoading from "@/animations/insider-loading.json";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { memo } from "react";
import { cn } from "@/utils/cn";

type WishlistButton = {
  isLoading: boolean;
  liked: boolean;
  toggleLike: () => void;
  className?: string;
};

export const WishlistButton = memo(
  ({ isLoading, liked, toggleLike, className }: WishlistButton) => {
    return (
      <button
        className={cn(classes.wishlistContainer, className)}
        aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        onClick={toggleLike}
      >
        {isLoading ? (
          <Lottie
            animationData={likeLoading}
            style={{
              width: 80,
              height: 80,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0.8,
            }}
          />
        ) : liked ? (
          <IoIosHeart className={classes.icon} />
        ) : (
          <IoIosHeartEmpty className={classes.icon} />
        )}
      </button>
    );
  },
);
