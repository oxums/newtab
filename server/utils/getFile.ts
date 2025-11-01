import { useStorage } from "#imports";

export default async function getFile(name: string) {
  const storage = useStorage("assets:files");
  const file = await storage.getItem(name);

  return file;
}
