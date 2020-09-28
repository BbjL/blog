export function filterRoutes(routes) {
  const filter = routes.filter((item) => !(item.hidden && item.hidden === true));

  return filter;
}
