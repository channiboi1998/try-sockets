import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/model";
import { signIn } from "../../store/user/thunks";
import { FieldFormatValidator } from "../../utilities/validator";
import Button from "../../components/button";
import InputField from "../../components/forms/input-field";
import PasswordField from "../../components/forms/password-field";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("custom/login");
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<UserCredentials>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const submit: SubmitHandler<any> = (credentials) => {
    dispatch(signIn(credentials))
      .unwrap()
      .catch(() => {
        setError("email", { message: "API Error" });
      });
  };

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <p className="bg-error-200 text-error-500 mb-4 rounded-lg bg-[#FFEDED] py-2.5 text-center text-base text-[#EB5757]">
          {t("validation.invalidCredentials")}
        </p>
      )}
      <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
        <InputField
          className="mb-4 text-sm"
          label={`${t("field.email.label")}`}
          placeholder={`${t("field.email.placeholder")}`}
          requiredIndicator={true}
          register={register("email", {
            required: true,
            pattern: FieldFormatValidator.email,
            onChange: () => {
              if (Object.keys(errors).length > 0) {
                clearErrors("email");
                clearErrors("password");
              }
            },
          })}
        />
        <PasswordField
          className="mb-4"
          label={`${t("field.password.label")}`}
          placeholder={`${t("field.password.placeholder")}`}
          requiredIndicator={true}
          register={register("password", {
            required: true,
            onChange: () => {
              if (Object.keys(errors).length > 0) {
                clearErrors("email");
                clearErrors("password");
              }
            },
          })}
        />
        <Button className="mt-2 md:text-sm md:h-[38px] 2xl:text-base 2xl:h-[47px]" variant="success" type="submit" aria-label="login-button">
          {t("submitBtn")}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
