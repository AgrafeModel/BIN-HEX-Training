import clsx from "clsx";
import { binaryExos } from "../exos/list";
import { Link } from "../components/Link";

export function ExoListPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ExoList />
      </div>
    </div>
  );
}

function ExoList() {
  return binaryExos.map((exo) => {
    return (
      <Link
        to={`/exo/${exo.id}`}
        id={`exo-${exo.id}`}
        className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
      >
        <p className="text-lg font-semibold text-gray-800 mb-2">{exo.title}</p>
        <p className="text-sm text-gray-600 mb-2">{exo.description}</p>
        <p
          className={clsx(
            "text-sm font-medium mb-2",
            exo.difficulty == "easy"
              ? "text-green-600"
              : exo.difficulty == "medium"
                ? "text-yellow-600"
                : "text-red-600",
          )}
        >
          {exo.difficulty}
        </p>
        <div className="flex flex-wrap gap-2">
          {exo.tags.map((tag) => {
            return (
              <p className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                {tag}
              </p>
            );
          })}
        </div>
      </Link>
    );
  });
}
