import IssueCard from "./IssueCard";
import { mockIssues } from "../../data/mockIssues";

export default function IssuesList() {
  return (
    <div className="grid gap-4">
      {mockIssues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
}
