import SideNav from '@/app/ui/sidebar/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="w-full flex-none md:w-64">
        <SideNav />
      </aside>
      <section className="flex-grow px-8 pt-12 overflow-auto bg-gray-50">
        {children}
      </section>
    </div>
  );
}