import AdminDashboard from "@/components/pageweb/Admin/AdminDashboard";

export default function AdminDashboardPage() {
 return (
  <div
   className="flex justify-center items-center bg-cover bg-center min-h-screen"
   style={{ backgroundImage: "url('/images/phot_bib.jpg')" }}
  >
   <div>
    <AdminDashboard />
   </div>
  </div>
 );
}
