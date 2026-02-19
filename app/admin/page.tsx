import { redirect } from "next/navigation";
import AdminClientPage from "./AdminClientPage";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export default async function AdminPage() {
  const isAllowed = await isAdminAuthenticated();

  if (!isAllowed) {
    redirect("/admin/login");
  }

  return <AdminClientPage />;
}
