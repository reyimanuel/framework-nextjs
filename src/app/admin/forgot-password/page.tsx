import AuthLayout from "@/components/auth/AuthLayout"
import AuthHeader from "@/components/auth/AuthHeader"
import ForgotPasswordForm from "@/components/auth/ForgotPassword"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthHeader title="Lupa Password" />
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
