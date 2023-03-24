export const getClearVariant = (
  str: string
):
  | "success"
  | "warning"
  | "danger"
  | "link"
  | "clearSuccess"
  | "clearWarning"
  | "clearDanger"
  | "plain" => {
  switch (str) {
    case "success":
      return "clearSuccess";
    case "warning":
      return "clearWarning";
    case "danger":
      return "clearDanger";
    default:
      return "plain";
  }
};
