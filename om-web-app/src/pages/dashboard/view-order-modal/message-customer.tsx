import { useTranslation } from "react-i18next";
import Button from "../../../components/button";
import { CommentIcon, EllipseIcon } from "../../../components/icon";

const MessageCustomer = () => {
  const { t } = useTranslation("translation");
  return (
    <Button
      className="flex flex-row items-center justify-center shadow-plain w-full rounded-xl min-h-[58px]"
      aria-label="message customer"
      onClick={() => alert("Message Customer Clicked")}
    >
      <div className="relative mr-2">
        <CommentIcon />
        <EllipseIcon className="absolute top-[-5px] right-[-5px]" />
      </div>
      <p className="text-success font-bold text-xs capitalize">{t("messageCustomer")}</p>
    </Button>
  );
};

export default MessageCustomer;
