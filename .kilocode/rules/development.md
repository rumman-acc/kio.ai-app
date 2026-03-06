# Development Rules

## Critical Rules

- **Package manager**: Use `bun` (not npm/yarn)
- **Never run** `next dev` or `bun dev` - the sandbox handles this automatically
- **Always commit and push** after completing changes:
  ```bash
  bun typecheck && bun lint && git add -A && git commit -m "descriptive message" && git push
  ```

## Commands

| Command | Purpose |
|---------|---------|
| `bun install` | Install dependencies |
| `bun run dev` | Start dev server with hot reload |
| `bun run build` | Build production app |
| `bun run start` | Start production server |
| `bun lint` | Check code quality |
| `bun typecheck` | Type checking |

## Best Practices

### NestJS Development
- Use modules to organize your code
- Use services for business logic
- Use controllers for HTTP endpoints
- Use DTOs for data validation

### REST API Best Practices
- Return appropriate HTTP status codes
- Handle errors gracefully
- Use proper HTTP methods (GET, POST, PUT, DELETE, PATCH)

### Code Quality
- Run `bun typecheck` before committing
- Run `bun lint` before committing
- Write descriptive commit messages

## Adding New Modules

To add a new feature module:

```bash
nest g module <module-name>
nest g controller <module-name>
nest g service <module-name>
```
