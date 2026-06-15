export const roleConfig: Record<
  string,
  { label: string; classes: string; dotClass: string }
> = {
  ADMIN: {
    label: "Admin",
    classes:
      "bg-red-50 text-red-600 border border-red-200 dark:bg-red-950/60 dark:text-red-400 dark:border-red-800/50",
    dotClass: "bg-red-500",
  },
  PROVIDER: {
    label: "Provider",
    classes:
      "bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-400 dark:border-amber-800/50",
    dotClass: "bg-amber-500",
  },
  USER: {
    label: "User",
    classes:
      "bg-zinc-100 text-zinc-500 border border-zinc-200 dark:bg-zinc-800/60 dark:text-zinc-400 dark:border-zinc-700/50",
    dotClass: "bg-zinc-400",
  },
};