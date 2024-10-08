import { useParams } from "react-router-dom";
import { useTemplate } from "../services/templateService";
import Spinner from "../components/Spinner";

const FormPage = () => {
  const { id } = useParams();
  const { data: template, error, isLoading } = useTemplate(id);

  if (isLoading) return <Spinner />;
  if (error) return <p>Failed to load template</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{template.title}</h1>
      <p className="mt-4">{template.description}</p>
      <h2 className="mt-8 text-2xl font-semibold">Forms</h2>
      {template.Forms?.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {template.Forms.map((form) => (
            <li key={form.id} className="border p-4 rounded-lg">
              Form ID: {form.id}
            </li>
          ))}
        </ul>
      ) : (
        <p>No forms associated with this template.</p>
      )}
    </div>
  );
};

export default FormPage;
