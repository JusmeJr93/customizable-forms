import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useTemplates } from "../services/templateService";

const TemplateList = () => {
  const { data: templates, error, isLoading } = useTemplates();

  if (isLoading) return <Spinner />;
  if (error) return <p>Failed to load templates</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Templates</h1>
      <Link
        to="/templates/create"
        className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg mb-4"
      >
        Create New Template
      </Link>

      <ul className="mt-4 space-y-2">
        {templates.map((template) => (
          <li key={template.id} className="border p-4 rounded-lg">
            <Link
              to={`/templates/${template.id}`}
              className="text-blue-500 hover:underline"
            >
              {template.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;
