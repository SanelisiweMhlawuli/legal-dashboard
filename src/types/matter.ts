export type MatterStatus =
  | "Open"
  | "In Progress"
  | "Completed";

export type MatterPriority =
  | "Low"
  | "Medium"
  | "High";

export interface Matter {
  id: number;
  title: string;
  status: MatterStatus;
  priority: MatterPriority;
  assignedTo: string;
  dueDate: string;
}