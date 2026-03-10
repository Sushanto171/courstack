import CreateAdminForm from "@/components/modules/superadmin/CreateAdminForm";
import { Info } from "lucide-react";

export default function SuperAdminCreateAdminPage() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Add New Administrative User
          </h2>
          <p className="text-muted-foreground mt-2">
            Provision a new account with delegated access to the Courstack management platform.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-sm border overflow-hidden">
          <CreateAdminForm />
        </div>

        <div className="mt-8 flex items-center gap-4 p-4 rounded-xl border bg-muted/40">

          <Info className="h-8 w-8 text-primary" />

          <p className="text-xs text-muted-foreground leading-relaxed">
            Security Note: Administrators have significant control over the platform.
            Ensure the email address is correct and belongs to a trusted team member.
            You can revoke access at any time from the User Management dashboard.
          </p>

        </div>

      </div>
    </div>
  );
}