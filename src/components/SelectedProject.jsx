import Tasks from "./Tasks.jsx";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16 pl-10">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-stone-600 mb-2">
            {project.titel}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-red-400"
          >
            Löschen
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
