

import AuthLayout from "@/app/admin/auth/components/AuthLayout"
import AuthHeader from "@/app/admin/auth/components/AuthHeader"
import AdminLoginForm from "@/shared/auth/LoginForm"

export default function AdminLoginPage() {
  return (
    <AuthLayout>
      <AuthHeader title="Login" />
      <AdminLoginForm />
    </AuthLayout>
  )
}
