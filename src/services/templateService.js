import { useQuery } from "@tanstack/react-query";
import api from "./api";

const fetchTemplates = async () => {
    const { data } = await api.get('/templates');
    return data;
};

const fetchTemplateById = async (id) => {
    const { data } = await api.get(`/templates/${id}`);
    return data;
};

export const useTemplates = () => {
    return useQuery(['templates'], fetchTemplates);
};

export const useTemplate = (id) => {
    return useQuery(['template', id], () => fetchTemplateById(id));
};