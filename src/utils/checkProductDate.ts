import { NEW_PRODUCT_THRESHOLD_DAYS } from "@/config";

export function checkProductDate(createdAt: string) {
  const currentTime = new Date();
  const productCreatedDate = new Date(createdAt);
  const newThresholdMs = NEW_PRODUCT_THRESHOLD_DAYS * 24 * 60 * 60 * 1000;

  const productAgeMs = currentTime.getTime() - productCreatedDate.getTime();

  return newThresholdMs > productAgeMs;
}
