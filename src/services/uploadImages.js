import { supabase } from "../supabase/supabase";

export async function envImagensStorage(nomeDobalde, arquivo) {
  if (!arquivo) return null;

  const fileName = `${Date.now()}-${arquivo.name}`;

  const { data, error } = await supabase.storage
    .from(nomeDobalde)
    .upload(fileName, arquivo);

  if (error) {
    console.error(error);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from(nomeDobalde)
    .getPublicUrl(fileName);

  return publicUrlData.publicUrl;
}