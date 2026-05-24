import {
  ChevronDown,
  Search,
  X,
} from "lucide-react";

interface MatterFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  priority: string;
  setPriority: (value: string) => void;

  sortBy: string;
  setSortBy: (value: string) => void;

  total: number;
  filtered: number;

  clearFilters: () => void;
}

export default function MatterFilters({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
  sortBy,
  setSortBy,
  total,
  filtered,
  clearFilters,
}: MatterFiltersProps) {
  const hasActiveFilters =
    search !== "" ||
    status !== "All" ||
    priority !== "All" ||
    sortBy !== "Newest";

  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md">

      {/* TOP BAR */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* SEARCH */}
        <div className="relative flex-1">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200"
          />

          <input
            type="text"
            placeholder="Search by title or assignee..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-sm font-medium text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>

        {/* FILTERS */}
        <div className="grid gap-4 md:grid-cols-3 lg:min-w-[620px]">

          {/* STATUS */}
          <div className="relative">
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="h-12 w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            >
              <option value="All">
                All statuses
              </option>

              <option value="Open">
                Open
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* PRIORITY */}
          <div className="relative">
            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
              className="h-12 w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            >
              <option value="All">
                All priorities
              </option>

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* SORT */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="h-12 w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 outline-none transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            >
              <option value="Newest">
                Newest
              </option>

              <option value="Oldest">
                Oldest
              </option>

              <option value="Priority">
                Priority
              </option>

              <option value="A-Z">
                A-Z
              </option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

        {/* RESULTS */}
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filtered}
          </span>{" "}
          of {total} matters
        </p>

        {/* CLEAR BUTTON */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-2 self-start rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 hover:shadow-sm active:scale-[0.98]"
          >
            <X size={16} />

            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}