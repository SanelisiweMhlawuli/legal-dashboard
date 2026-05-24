import { CalendarDays } from "lucide-react";

import { Matter } from "@/types/matter";

interface MatterCardProps {
  matter: Matter;
}

/*
  ========================================
  PRIORITY BADGE STYLES
  ========================================
  Uses color-coded badges to visually
  separate matter urgency levels.
*/
const priorityStyles = {
  High:
    "border border-red-200 bg-red-50 text-red-600",

  Medium:
    "border border-yellow-200 bg-yellow-50 text-yellow-700",

  Low:
    "border border-green-200 bg-green-50 text-green-700",
};

/*
  ========================================
  STATUS BADGE STYLES
  ========================================
  Each status has its own color system
  for faster visual recognition.
*/
const statusStyles = {
  Open:
    "border border-blue-200 bg-blue-50 text-blue-700",

  "In Progress":
    "border border-orange-200 bg-orange-50 text-orange-700",

  Completed:
    "border border-green-200 bg-green-50 text-green-700",
};

/*
  ========================================
  GENERATED USER INITIALS
  ========================================
  Converts full names into avatar initials.
*/
function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/*
  ========================================
  DATE FORMATTER
  ========================================
  Formats dates into:
  Jan 12, 2026
*/
function formatDate(date: string) {
  return new Date(date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );
}

/*
  ========================================
  DUE DATE COLOR LOGIC
  ========================================
  Dynamically changes date colors:
  
  - Red     -> overdue
  - Gray    -> normal
*/
function getDueDateColor(date: string) {
  const today = new Date();
  const dueDate = new Date(date);

  const diffTime =
    dueDate.getTime() - today.getTime();

  const diffDays = Math.ceil(
    diffTime / (1000 * 60 * 60 * 24)
  );

  if (diffDays < 0) {
    return "text-red-600";
  }

  if (diffDays <= 3) {
    return "text-orange-600";
  }

  return "text-gray-500";
}

export default function MatterCard({
  matter,
}: MatterCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-200
        hover:shadow-lg
      "
    >
      {/* 
        ========================================
        CARD HEADER
        ========================================
        Displays title + priority badge
      */}
      <div className="flex items-start justify-between gap-4">
        
        {/* MATTER TITLE */}
        <h3
          className="
            text-xl
            font-semibold
            tracking-tight
            text-gray-900
            transition-colors
            duration-200
            group-hover:text-indigo-600
          "
        >
          {matter.title}
        </h3>

        {/* PRIORITY BADGE */}
        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wide
            ${
              priorityStyles[
                matter.priority
              ]
            }
          `}
        >
          {matter.priority}
        </span>
      </div>

      {/* 
        ========================================
        STATUS + DATE SECTION
        ========================================
      */}
      <div className="mt-6 flex items-center justify-between">
        
        {/* STATUS BADGE */}
        <span
          className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-3
            py-1
            text-sm
            font-medium
            ${
              statusStyles[
                matter.status
              ]
            }
          `}
        >
          <span className="h-2 w-2 rounded-full bg-current" />

          {matter.status}
        </span>

        {/* DUE DATE */}
        <div
          className={`
            flex
            items-center
            gap-2
            text-sm
            font-medium
            ${getDueDateColor(
              matter.dueDate
            )}
          `}
        >
          <CalendarDays size={16} />

          <span>
            {formatDate(
              matter.dueDate
            )}
          </span>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-5 border-t border-gray-100" />

      {/* 
        ========================================
        ASSIGNED USER SECTION
        ========================================
      */}
      <div className="flex items-center gap-3">
        
        {/* USER AVATAR */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-indigo-100
            text-sm
            font-semibold
            text-indigo-700
          "
        >
          {getInitials(
            matter.assignedTo
          )}
        </div>

        {/* USER NAME */}
        <p className="text-sm font-medium text-gray-700">
          {matter.assignedTo}
        </p>
      </div>
    </div>
  );
}