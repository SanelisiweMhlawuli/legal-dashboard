import { CalendarDays } from "lucide-react";
import { Matter } from "@/types/matter";

interface MatterTableProps {
  matters: Matter[];
}

const priorityStyles = {
  High:
    "border border-red-200 bg-red-50 text-red-700",

  Medium:
    "border border-yellow-200 bg-yellow-50 text-yellow-700",

  Low:
    "border border-green-200 bg-green-50 text-green-700",
};

const statusStyles = {
  Open:
    "border border-blue-200 bg-blue-50 text-blue-700",

  "In Progress":
    "border border-orange-200 bg-orange-50 text-orange-700",

  Completed:
    "border border-green-200 bg-green-50 text-green-700",
};

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

  return "text-gray-600";
}

export default function MatterTable({
  matters,
}: MatterTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300">

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto">
        <table className="min-w-full">

          {/* HEADER */}
          <thead className="border-b border-gray-200 bg-gray-50/80 backdrop-blur">
            <tr>

              {/* MATTER COLUMN */}
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wide text-gray-500">
                Matter
              </th>

              {/* STATUS COLUMN */}
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wide text-gray-500">
                Status
              </th>

              {/* PRIORITY COLUMN */}
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wide text-gray-500">
                Priority
              </th>

              {/* ASSIGNEE COLUMN */}
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wide text-gray-500">
                Assigned To
              </th>

              {/* DUE DATE COLUMN */}
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wide text-gray-500">
                Due Date
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {matters.map((matter) => (
              <tr
                key={matter.id}
                className="group cursor-pointer border-b border-gray-100 transition-all duration-200 hover:bg-gray-50/80 hover:shadow-[inset_4px_0_0_0_rgb(79,70,229)]"
              >

                {/* MATTER TITLE */}
                <td className="px-6 py-5">
                  <p className="font-semibold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-indigo-600">
                    {matter.title}
                  </p>
                </td>

                {/* STATUS BADGE */}
                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      statusStyles[matter.status]
                    }`}
                  >
                    {matter.status}
                  </span>
                </td>

                {/* PRIORITY BADGE */}
                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      priorityStyles[matter.priority]
                    }`}
                  >
                    {matter.priority}
                  </span>
                </td>

                {/* ASSIGNED USER */}
                <td className="px-6 py-5 text-sm font-medium text-gray-700">
                  {matter.assignedTo}
                </td>

                {/* DUE DATE */}
                <td className="px-6 py-5">
                  <div
                    className={`flex items-center gap-2 text-sm font-medium ${getDueDateColor(
                      matter.dueDate
                    )}`}
                  >
                    <CalendarDays size={16} />

                    <span>
                      {formatDate(matter.dueDate)}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}