const repository = 'https://bendiksolheim.github.io/landevei.bike-data';
const routes = `${repository}/routes.json`;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function getRoutes() {
  return fetch(routes)
    .then(checkStatus)
    .then(response => response.json());
}

function getRoute(route) {
  return fetch(`${repository}/${route}`)
    .then(checkStatus)
    .then(response => response.json());
}

export default { getRoutes, getRoute };
