# Najoomi Monorepo

This monorepo contains:
- `apps/frontend`: Next.js frontend
- `apps/backend`: Nest.js backend

## Development

1. Make sure Docker is installed.
2. Build and start both apps:

```sh
docker-compose up --build
```

- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Structure

- `apps/frontend`: Next.js app source
- `apps/backend`: Nest.js app source
- `docker/`: Dockerfiles
- `docker-compose.yml`: Orchestrates both apps

## Deployment

You can use the same Docker setup for production by adjusting the `CMD` and environment variables in Dockerfiles.
