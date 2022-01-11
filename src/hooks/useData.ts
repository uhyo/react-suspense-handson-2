import { Loadable } from "../utils/Loadable";

const dataMap: Map<string, Loadable<unknown>> = new Map();

export function useData<T>(cacheKey: string, fetch: () => Promise<T>): T {
  const cachedData = dataMap.get(cacheKey) as Loadable<T> | undefined;
  if (cachedData === undefined) {
    const [loadable, promise] = Loadable.newAndGetPromise(fetch());
    dataMap.set(cacheKey, loadable);
    throw promise;
  }
  return cachedData.getOrThrow();
}
