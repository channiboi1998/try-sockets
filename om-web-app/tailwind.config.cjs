/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        success: "#00AC24",
        warning: "#F36021",
        danger: "#DC252F",
        granite: "#CED5E0",
        dust: "#BDBDBD",
        dark: "#4F4F4F",
        evergreen: "#458D41",
        ash: "#828282"
      },
      backgroundColor: {
        success: "#00AC24",
        warning: "#F36021",
        danger: "#DC252F",
        ice: "#F7FAFF",
        babyGreen: "#F2FFF5",
        hoverClearSuccess: "#EBFFEF",
        hoverClearWarning: "#FFF1EB",
        hoverClearDanger: "#FFECED",
        activeClearSuccess: "#C2F6CD",
        activeClearWarning: "#FFD7C6",
        activeClearDanger: "#FFCCCF"
      },
      backgroundImage: {
        "success-gradient": "linear-gradient(180deg, #00ac24 0%, #019620 100%)",
        "warning-gradient": "linear-gradient(180deg, #f36021 0%, #c4430b 100%)",
        "danger-gradient": "linear-gradient(180deg, #dc252f 0%, #ba0912 100%)",
        "hover-success-gradient":
          "linear-gradient(180deg, #00C229 0%, #00A422 100%);",
        "hover-warning-gradient":
          "linear-gradient(180deg, #FE793F 0%, #E24400 100%);",
        "hover-danger-gradient":
          "linear-gradient(180deg, #ED252F 0%, #D3010C 100%);",
        "active-success-gradient":
          "linear-gradient(139.48deg, #019620 23.04%, #00AC24 135.71%);",
        "active-warning-gradient":
          "linear-gradient(180deg, #B43803 0%, #E95718 100%);",
        "active-danger-gradient":
          "linear-gradient(180deg, #BA0912 0%, #DC252F 100%);",
      },
      boxShadow: {
        plain: "0px 4px 23px rgba(0, 0, 0, 0.1)",
        newOrderShadow: "0px 0px 30px #9bffb0, inset 4px 0px 0px #299834",
        successLeftShadow: "0px 0px 10px rgba(35, 35, 35, 0.09), inset 4px 0px 0px #299834",
        warningLeftShadow: "0px 0px 10px rgba(35, 35, 35, 0.09), inset 4px 0px 0px #f36021",
        dangerLeftShadow: "0px 0px 10px rgba(35, 35, 35, 0.09), inset 4px 0px 0px #dc252f"
      },
      maxHeight: {
        scrollable: "calc(100% - 80px)"
      }
    },
    fontFamily: {
      sans: ["Source Sans Pro"],
    },
  },
  plugins: [],
};
