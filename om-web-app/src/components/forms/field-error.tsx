import { ExclamationPointIcon } from "../icon";

const FieldError = ({ error }: { error?: string }) => (
  <>
    {error !== undefined && (
      <div className="mt-2 flex items-center">
        <ExclamationPointIcon />
        <p className="text-sm text-[#EF3E2A]">{error}</p>
      </div>
    )}
  </>
);

export default FieldError;
