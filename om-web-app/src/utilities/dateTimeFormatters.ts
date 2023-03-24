import { DeliveryTimelineThresholds } from "../store/store-slice/models";

export const formatTimestampToShort = (timestamp: string): string => {
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const formatTimestampToMedium = (timestamp: string): string => {
  const date = new Date(timestamp);
  const monthName = date.toLocaleString("default", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const amPm = date.getHours() < 12 ? "AM" : "PM";
  const formattedHour = (date.getHours() % 12 || 12)
    .toString()
    .padStart(2, "0");
  return `${monthName} ${day} | ${formattedHour}:${minute} ${amPm}`;
};

export const formatTimestampToLong = (timestamp: string): string => {
  const date = new Date(timestamp);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate().toString().padStart(2, "0");
  const hours =
    date.getHours() > 12
      ? (date.getHours() - 12).toString().padStart(2, "0")
      : date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  return `${month} ${day} | ${hours}:${minutes}:${seconds} ${ampm}`;
};

export const getElapsedTime = (timestamp: string): string => {
  const ms = Date.now() - new Date(timestamp).getTime();
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = (minutes % 60).toString().padStart(2, "0");
  const paddedSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};

export const getOrderVariantTimestamp = (
  timestamp: string,
  deliveryTimelineThresholds: DeliveryTimelineThresholds
): "success" | "warning" | "danger" => {
  const date: Date = new Date(timestamp);
  const now: Date = new Date();
  const secondsDiff: number = (now.getTime() - date.getTime()) / 1000; // convert to seconds
  if (
    secondsDiff > deliveryTimelineThresholds.onTime &&
    secondsDiff <= deliveryTimelineThresholds.atRisk
  ) {
    return "success";
  } else if (
    secondsDiff > deliveryTimelineThresholds.atRisk &&
    secondsDiff <= deliveryTimelineThresholds.late
  ) {
    return "warning";
  } else {
    return "danger";
  }
};
