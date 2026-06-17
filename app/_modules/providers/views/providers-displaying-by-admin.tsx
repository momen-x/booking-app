"use client";
import { useState } from "react";
import { LayoutGrid, Table2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Provider } from "../entity/provider";
import ProviderTable from "./providers-table";
import ProviderList from "./provider-list";
const ProvidersDisplayingByAdmin = ({
  providers,
}: {
  providers: Provider[];
}) => {
  const [view, setView] = useState<"table" | "cards">("table");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">My Services</h2>
          <p className="text-sm text-muted-foreground">
            `${providers?.length ?? 0} providers$
            {providers?.length !== 1 ? "s" : ""}`
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-muted">
          {(["table", "cards"] as const).map((v) => (
            <Button
              key={v}
              onClick={() => setView(v)}
              className={`p-2 rounded-lg transition-colors ${
                view === v
                  ? "bg-black  text-white  shadow-sm dark:bg-black dark:text-white"
                  : "bg-white text-black hover:text-foreground dark:bg-white dark:text-black"
              }`}
              title={v === "table" ? "Table view" : "Grid view"}
            >
              {v === "table" ? (
                <Table2 className="h-4 w-4" />
              ) : (
                <LayoutGrid className="h-4 w-4" />
              )}
            </Button>
          ))}
        </div>
      </div>

      {!providers?.length ? (
        <div className="flex flex-col items-center justify-center py-16 rounded-2xl border border-dashed border-border text-center gap-2">
          <LayoutGrid className="h-8 w-8 text-muted-foreground/50" />
          <p className="text-sm font-medium text-foreground">No services yet</p>
          <p className="text-xs text-muted-foreground">
            Your services will appear here once added.
          </p>
        </div>
      ) : view === "table" ? (
        <ProviderTable providers={providers} />
      ) : (
        <ProviderList providers={providers} />
      )}
    </div>
  );
};

export default ProvidersDisplayingByAdmin;
