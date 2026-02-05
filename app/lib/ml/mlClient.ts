// This will later point to Python ML server
const ML_SERVER = "http://localhost:8000";

export async function sendToML(endpoint: string, payload: any) {
  const res = await fetch(`${ML_SERVER}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return res.json();
}
