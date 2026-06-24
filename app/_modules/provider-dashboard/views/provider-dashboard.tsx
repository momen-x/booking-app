import Link from "next/link";
import { ProviderNavs } from "../provider-dashboard-navs";

const ProviderDashboardView = () => {
  return (
       <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>🏠</span>
            <span>/</span>
            <span>Provider Dashboard</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Provider Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your platform from one place
          </p>
        </div>

    

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ProviderNavs.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.path} href={`/admin-dashboard/${item.path}`}>
                <div className="group   rounded-xl border p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/50 hover:-translate-y-0.5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Manage {item.label.toLowerCase()}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

    
      </div>
    </div>
  );
};

export default ProviderDashboardView;
