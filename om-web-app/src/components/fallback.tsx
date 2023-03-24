import { ReactNode } from "react";

type FallbackProps = {
  header?: ReactNode;
  description?: ReactNode;
};

const Fallback = ({ header, description }: FallbackProps) => {
  return (
    <div className="fixed inset-0 z-50 flex  flex-col items-center justify-center bg-white bg-opacity-30">
      {header && header}
      <img alt="pizza loader" width={200} src={`/images/brand/loader.gif`} />

      {description ? (
        description
      ) : (
        <p className="text-lg font-semibold text-success">
          {description || "Loading, please wait."}
        </p>
      )}
    </div>
  );
};
export default Fallback;
