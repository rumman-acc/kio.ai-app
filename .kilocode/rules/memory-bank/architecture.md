# System Patterns: NestJS Starter Template

## Architecture Overview

```
src/
├── main.ts                 # Application entry point
├── app.module.ts           # Root module
├── app.controller.ts       # HTTP controller
└── app.service.ts         # Business logic service
    └── (expand as needed)
        ├── users/         # Feature modules
        │   ├── users.module.ts
        │   ├── users.controller.ts
        │   └── users.service.ts
        ├── products/
        └── ...
```

## Key Design Patterns

### 1. Module Pattern

NestJS uses a modular architecture:
```typescript
// Users module
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
```

### 2. Controller Pattern

Controllers handle HTTP requests:
```typescript
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
```

### 3. Service Pattern

Services contain business logic:
```typescript
@Injectable()
export class UsersService {
  private users = [];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }
}
```

### 4. Dependency Injection

NestJS uses constructor-based DI:
```typescript
constructor(private readonly usersService: UsersService) {}
```

## File Naming Conventions

- Modules: PascalCase (`users.module.ts`)
- Controllers: PascalCase (`users.controller.ts`)
- Services: PascalCase (`users.service.ts`)
- DTOs: PascalCase (`create-user.dto.ts`)
- Entities: PascalCase (`user.entity.ts`)

## State Management

For NestJS:
- Services are singletons by default (shared state)
- Use `Scope` decorator for request-scoped services
- Use modules to organize and share state

## REST API Best Practices

### Status Codes
- 200 - OK
- 201 - Created
- 400 - Bad Request
- 404 - Not Found
- 500 - Internal Server Error

### HTTP Methods
- GET - Retrieve resources
- POST - Create resources
- PATCH - Update partial
- PUT - Update full
- DELETE - Remove resources
