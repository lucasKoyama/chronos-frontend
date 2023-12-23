import SideNav from '@/app/ui/sidebar/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="w-full flex-none md:w-64">
        <SideNav />
      </aside>
      <section className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-50">{children}</section>
    </div>
  );
}