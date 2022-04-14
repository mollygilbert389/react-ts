type Options = {
  body?: string;
  method: string;
  headers: {
    [key: string]: string;
  };
};

export const mockFetch = (callback: (url: string, options: Options) => any) => {
  return (url: string, options: Options) => {
    return new Promise((resolve) => {
      resolve({
        ok: true,
        json: () => {
          return new Promise((resolveJSON) => {
            return resolveJSON(callback(url, options));
          });
        }
      });
    });
  };
};