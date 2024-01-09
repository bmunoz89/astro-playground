import type { APISpaceXResponse, Doc } from "@types-api";

const BASE = "https://api.spacexdata.com/v5";

export async function getLaunchBy({ id }: { id: string }): Promise<Doc> {
  const res = await fetch(`${BASE}/launches/${id}`);
  return await res.json();
}

export async function getLaunches(
  currentPage: number,
  limit: number = 12,
): Promise<APISpaceXResponse> {
  const res = await fetch(`${BASE}/launches/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        offset: (currentPage - 1) * limit,
        limit,
      },
    }),
  });

  return await res.json();
}
