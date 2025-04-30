import type { Metadata } from "next";
import "../../globals.css";

export const metadata: Metadata = {
  title: "HME UNSRAT Admin",
  description: "Admin Dashboard for HME UNSRAT",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900">{children}</div>
  );
}