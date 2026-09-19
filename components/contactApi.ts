export type NEXBuildContactData = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

export async function submitNEXBuildContact(data: NEXBuildContactData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Unable to send inquiry.");
  }

  return result;
}
