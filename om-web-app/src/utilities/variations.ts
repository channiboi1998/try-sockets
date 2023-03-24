type Variation = {
  backgroundColor: string;
  boxShadow: string;
  iconFillHex: string;
  textColor: string;
};

export const variations: Record<string, Variation> = {
  success: {
    backgroundColor: "bg-success",
    boxShadow: "shadow-successLeftShadow",
    iconFillHex: "#00AC24",
    textColor: "text-success",
  },
  warning: {
    backgroundColor: "bg-warning",
    boxShadow: "shadow-warningLeftShadow",
    iconFillHex: "#F36021",
    textColor: "text-warning",
  },
  danger: {
    backgroundColor: "bg-danger",
    boxShadow: "shadow-dangerLeftShadow",
    iconFillHex: "#DC252F",
    textColor: "text-danger",
  },
};
