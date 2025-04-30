

import AuthLayout from "@/components/auth/AuthLayout"
import AuthHeader from "@/components/auth/AuthHeader"
import AdminLoginForm from "@/components/auth/LoginForm"

export default function AdminLoginPage() {
  return (
    <AuthLayout>
      <AuthHeader title="Login" />
      <AdminLoginForm />
    </AuthLayout>
  )
}
