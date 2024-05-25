const parseLinkHeader = (linkHeader: string): Record<string, string> => {
  try {
    const links = linkHeader.split(', ');
    const parsedLinks: Record<string, string> = {};
    links.forEach(link => {
      const [url, rel] = link.split('; ');
      const parsedUrl = url.slice(1, -1);
      const parsedRel = rel.split('=')[1].slice(1, -1);
      parsedLinks[parsedRel] = parsedUrl;
    });
    return parsedLinks;
  } catch (error) {
    return {};
  }
};

export const apiUtils = {
  parseLinkHeader,
};
