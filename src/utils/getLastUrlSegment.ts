export const getLastUrlSegment = (url: string): string => {
  const removeTrailingSlash = url.endsWith('/') ? url.slice(0, -1) : url;
  return removeTrailingSlash.substring(removeTrailingSlash.lastIndexOf('/') + 1);
};

export default getLastUrlSegment;
