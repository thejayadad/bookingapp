import AccountNavbar from "@/components/AccountNavbar";

export default function DashboardLayout({ children }) {
    return <section className="max-w-screen-lg	mx-auto mt-8 px-4">
        <AccountNavbar />
        {children}

        </section>
  }