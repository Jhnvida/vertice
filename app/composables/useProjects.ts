import { createClient } from "@supabase/supabase-js";
import type { Project } from "~/types/project";

export const useProjects = () => {
  const runtimeConfig = useRuntimeConfig();

  const supabase = createClient(
    runtimeConfig.public.supabaseUrl,
    runtimeConfig.public.supabaseKey,
  );

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*");

    return {
      data: data as Project[] | null,
      error,
    };
  };

  const getImageUrl = (imageName: string | null) => {
    if (!imageName) return null;

    const { data } = supabase.storage
      .from("project-images")
      .getPublicUrl(imageName);

    return data.publicUrl;
  };

  return {
    fetchProjects,
    getImageUrl,
    supabase,
  };
};
