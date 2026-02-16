import { redirect } from "next/navigation";
import AdminEditor from "@/components/admin/AdminEditor";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export default async function AdminPage() {
  const allowed = await isAdminAuthenticated();

  if (!allowed) {
    redirect("/admin/login");
  }

  return <AdminEditor />;
}
