
"use client";

import { SearchX } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import MatterCard from "@/components/matter/MatterCard";
import MatterFilters from "@/components/matter/MatterFilters";
import MatterTable from "@/components/matter/MatterTable";

import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

import { matters } from "@/data/matter";

export default function Home() {

  /*
    ==============
    SEARCH STATE
    ==============
    Loads saved search from localStorage
    so filters persist after refresh.
  */
  const [search, setSearch] =
    useState<string>(() => {
      if (typeof window === "undefined") {
        return "";
      }

      return (
        localStorage.getItem("search") ??
        ""
      );
    });

  /*
    ==================
    DEBOUNCED SEARCH
    ==================
    Improves performance by delaying
    filtering until the user stops typing.
  */
  const [
    debouncedSearch,
    setDebouncedSearch,
  ] = useState<string>(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return (
      localStorage.getItem("search") ??
      ""
    );
  });

  /*
    ===============
    FILTER STATES
    ===============
  */
  const [status, setStatus] =
    useState<string>(() => {
      if (typeof window === "undefined") {
        return "All";
      }

      return (
        localStorage.getItem("status") ??
        "All"
      );
    });

  const [priority, setPriority] =
    useState<string>(() => {
      if (typeof window === "undefined") {
        return "All";
      }

      return (
        localStorage.getItem(
          "priority"
        ) ?? "All"
      );
    });

  /*
    ==============
    SORTING STATE
    ==============
  */
  const [sortBy, setSortBy] =
    useState<string>(() => {
      if (typeof window === "undefined") {
        return "Newest";
      }

      return (
        localStorage.getItem("sortBy") ??
        "Newest"
      );
    });

  /*
    ===============
    LOADING STATE
    ===============
  */
  const [loading, setLoading] =
    useState(true);

  /*
    ========================================
    SAVE FILTERS TO LOCAL STORAGE
    ========================================
    Keeps user preferences persistent.
  */
  useEffect(() => {
    localStorage.setItem(
      "search",
      search
    );

    localStorage.setItem(
      "status",
      status
    );

    localStorage.setItem(
      "priority",
      priority
    );

    localStorage.setItem(
      "sortBy",
      sortBy
    );
  }, [
    search,
    status,
    priority,
    sortBy,
  ]);

  /*
    =========================
    DEBOUNCED SEARCH EFFECT
    =========================
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  /*
    ========================
    CLEAR FILTERS FUNCTION
    ========================
  */
  const clearFilters = () => {
    setSearch("");
    setDebouncedSearch("");
    setStatus("All");
    setPriority("All");
    setSortBy("Newest");

    localStorage.removeItem("search");
    localStorage.removeItem("status");
    localStorage.removeItem("priority");
    localStorage.removeItem("sortBy");
  };

  /*
    ========================================
    FAKE LOADING STATE
    ========================================
    Displays loading skeletons briefly
    for better UX.
  */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  /*
    ========================================
    FILTER + SORT LOGIC
    ========================================
    useMemo optimizes performance by
    avoiding unnecessary recalculations.
  */
  const filteredMatters = useMemo(() => {
    const normalizedSearch =
      debouncedSearch.toLowerCase();

    const filtered = matters
      .filter((matter) => {
        const matchesSearch =
          matter.title
            .toLowerCase()
            .includes(normalizedSearch) ||
          matter.assignedTo
            .toLowerCase()
            .includes(normalizedSearch);

        const matchesStatus =
          status === "All" ||
          matter.status === status;

        const matchesPriority =
          priority === "All" ||
          matter.priority === priority;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesPriority
        );
      })
      .slice();

    /*
      ===============
      SORTING LOGIC
      ===============
    */
    filtered.sort((a, b) => {
      if (sortBy === "Newest") {
        return (
          new Date(
            b.dueDate
          ).getTime() -
          new Date(
            a.dueDate
          ).getTime()
        );
      }

      if (sortBy === "Oldest") {
        return (
          new Date(
            a.dueDate
          ).getTime() -
          new Date(
            b.dueDate
          ).getTime()
        );
      }

      if (sortBy === "Priority") {
        const priorityOrder: Record<
          string,
          number
        > = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        return (
          priorityOrder[
            b.priority
          ] -
          priorityOrder[
            a.priority
          ]
        );
      }

      if (sortBy === "A-Z") {
        return a.title.localeCompare(
          b.title
        );
      }

      return 0;
    });

    return filtered;
  }, [
    debouncedSearch,
    status,
    priority,
    sortBy,
  ]);

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-8">

          {/* PAGE HEADER */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Active matters
            </h2>

            <p className="mt-2 text-base text-gray-500 md:text-lg">
              Track open matters,
              assignments and deadlines
              across the team.
            </p>
          </div>

          {/* FILTER SECTION */}
          <div className="mt-8">
            <MatterFilters
              search={search}
              setSearch={setSearch}
              status={status}
              setStatus={setStatus}
              priority={priority}
              setPriority={setPriority}
              sortBy={sortBy}
              setSortBy={setSortBy}
              total={matters.length}
              filtered={
                filteredMatters.length
              }
              clearFilters={clearFilters}
            />
          </div>

          {/* CONTENT */}
          {loading ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({
                length: 6,
              }).map((_, index) => (
                <LoadingSkeleton
                  key={index}
                />
              ))}
            </div>
          ) : filteredMatters.length ===
            0 ? (
            <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center shadow-sm">

              {/* EMPTY STATE ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <SearchX
                  size={30}
                  className="text-gray-400"
                />
              </div>

              {/* EMPTY TITLE */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                No matters found
              </h3>

              {/* EMPTY DESCRIPTION */}
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                We couldn’t find any
                matters matching your
                current search or filter
                settings.
              </p>

              {/* CLEAR BUTTON */}
              <button
                onClick={clearFilters}
                className="mt-6 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-700 hover:shadow-md"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {/* MOBILE VIEW */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:hidden">
                {filteredMatters.map(
                  (matter) => (
                    <MatterCard
                      key={matter.id}
                      matter={matter}
                    />
                  )
                )}
              </div>

              {/* DESKTOP TABLE */}
              <div className="mt-8 hidden lg:block">
                <MatterTable
                  matters={
                    filteredMatters
                  }
                />
              </div>
            </>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
