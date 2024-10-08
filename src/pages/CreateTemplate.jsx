import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const CreateTemplate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createTemplateMutation = useMutation(
    async (data) => {
      const response = await api.post("/templates", data);
      return response.data;
    },
    {
      onSuccess: () => {
        toast.success("Template created successfully!");
        queryClient.invalidateQueries(["templates"]);
        reset();
        navigate("/templates");
      },
      onError: () => {
        toast.error("Failed to create template.");
      },
    }
  );

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
    };

    createTemplateMutation.mutate(formattedData);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Create a New Template</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full border rounded-lg p-2"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Tags (comma-separated)
          </label>
          <input
            {...register("tags")}
            type="text"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            {...register("image")}
            type="text"
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Access</label>
          <select
            {...register("access")}
            className="w-full border rounded-lg p-2"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Create Template
        </button>
      </form>
    </div>
  );
};

export default CreateTemplate;
