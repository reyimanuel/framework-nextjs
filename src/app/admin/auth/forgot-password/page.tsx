import AuthLayout from "@/app/admin/auth/components/AuthLayout"
import AuthHeader from "@/app/admin/auth/components/AuthHeader"
import ForgotPasswordForm from "@/app/admin/auth/components/ForgotPassword"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthHeader title="Lupa Password" />
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
