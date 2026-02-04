import IssuesFilter from "../Components/issues/IssuesFilterBar";
import IssuesList from "../Components/issues/IssuesList";

export default function IssuesPage() {
  return (
    <main className="p-4 md:p-6 lg:p-8 max-w-4xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-4">
        City Issues
      </h1>

      <IssuesFilter />
      <IssuesList />
    </main>
  );
}
