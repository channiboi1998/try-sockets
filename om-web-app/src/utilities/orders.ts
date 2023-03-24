import { Order } from "../store/order/model";

export const getButtonLabel = (status: string) => {
  if (status === "open") {
    return "confirm";
  } else if (status === "confirmed") {
    return "ready";
  }
  return "";
};

export const getStatusLabel = (status: string) => {
  switch (status) {
    case "open":
      return "Open";
    case "confirmed":
      return "In the Kitchen";
    case "advancing":
      return "On the Road";
    default:
      break;
  }
  return "";
};

export const getNextStatus = (currentStatus: string) => {
  if (currentStatus === "open") {
    return "confirmed";
  } else if (currentStatus === "confirmed") {
    return "advancing";
  }
  return "";
};

export const sortOrdersByCreatedAtAsc = (arr: Order[]): Order[] => {
  if (arr) {
    arr.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
  }
  return arr;
};

export const formatPhoneNumber = (number: string): string => {
  // Check if the number is a string and has 10 digits
  if (typeof number === "string" && number.length === 10) {
    // Format the number using substring and concatenation
    return (
      "+63 " +
      number.substring(0, 3) +
      " " +
      number.substring(3, 6) +
      " " +
      number.substring(6, 10)
    );
  } else {
    // If the number is not a string with 10 digits, just return the number parameter along with +63
    return "+63 " + number;
  }
};
