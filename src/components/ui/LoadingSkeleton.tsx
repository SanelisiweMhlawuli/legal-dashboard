export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300">

      {/* 
        WALKTHROUGH:
        This component creates a loading placeholder
        while matter data is being prepared.
        I used skeleton UI blocks to improve
        perceived performance and user experience.
      */}

      {/* TOP SECTION */}
      <div className="flex items-start justify-between gap-4">

        {/* TITLE PLACEHOLDER */}
        <div className="h-6 w-2/3 rounded-xl bg-gray-200" />

        {/* PRIORITY BADGE PLACEHOLDER */}
        <div className="h-7 w-16 rounded-full bg-gray-200" />
      </div>

      {/* STATUS + DATE */}
      <div className="mt-6 flex items-center justify-between">

        {/* STATUS BADGE */}
        <div className="h-6 w-28 rounded-full bg-gray-200" />

        {/* DATE SECTION */}
        <div className="flex items-center gap-2">

          {/* ICON PLACEHOLDER */}
          <div className="h-4 w-4 rounded bg-gray-200" />

          {/* DATE TEXT */}
          <div className="h-4 w-24 rounded bg-gray-200" />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-5 border-t border-gray-100" />

      {/* USER SECTION */}
      <div className="flex items-center gap-3">

        {/* USER AVATAR */}
        <div className="h-10 w-10 rounded-full bg-gray-200" />

        {/* USER DETAILS */}
        <div className="space-y-2">

          {/* USER NAME */}
          <div className="h-4 w-32 rounded bg-gray-200" />

          {/* SECONDARY TEXT */}
          <div className="h-3 w-20 rounded bg-gray-100" />
        </div>
      </div>
    </div>
  );
}