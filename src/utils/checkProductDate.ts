import { NEW_PRODUCT_THRESHOLD_DAYS } from "@/config/env";

export function checkProductDate(createdAt: string) {
  const currentTime = new Date();
  const productCreatedDate = new Date(createdAt);

  const days =
    typeof NEW_PRODUCT_THRESHOLD_DAYS === "number"
      ? NEW_PRODUCT_THRESHOLD_DAYS
      : Number(NEW_PRODUCT_THRESHOLD_DAYS ?? 0);

  const newThresholdMs = days * 24 * 60 * 60 * 1000;

  const productAgeMs = currentTime.getTime() - productCreatedDate.getTime();

  if (isNaN(productCreatedDate.getTime())) return false;

  return newThresholdMs > productAgeMs;
}
