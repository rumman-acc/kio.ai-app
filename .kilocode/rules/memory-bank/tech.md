# Technical Context: NestJS Starter Template

## Technology Stack

| Technology   | Version | Purpose                         |
| ------------ | ------- | ------------------------------- |
| NestJS       | 11.x    | Node.js framework               |
| TypeScript   | 5.9.x   | Type-safe JavaScript            |
| Bun          | Latest  | Package manager & runtime       |

## Development Environment

### Prerequisites

- Bun installed (`curl -fsSL https://bun.sh/install | bash`)
- Node.js 20+ (for compatibility)

### Commands

```bash
bun install        # Install dependencies
bun run dev        # Start dev server (http://localhost:3000)
bun run build      # Production build
bun run start      # Start production server
bun lint           # Run ESLint
bun run typecheck  # Run TypeScript type checking
```

## Project Configuration

### NestJS CLI Config (`nest-cli.json`)

- Uses `@nestjs/schematics` for generating files
- Source root set to `src/`

### TypeScript Config (`tsconfig.json`)

- Target: ES2021
- CommonJS module system
- Decorators enabled for NestJS
- Strict mode enabled

## Key Dependencies

### Production Dependencies

```json
{
  "@nestjs/common": "^11.0.0",    // NestJS core
  "@nestjs/core": "^11.0.0",      // NestJS core
  "@nestjs/platform-express": "^11.0.0",  // Express adapter
  "reflect-metadata": "^0.2.2",   // Decorator metadata
  "rxjs": "^7.8.1"                // Reactive extensions
}
```

### Dev Dependencies

```json
{
  "@nestjs/cli": "^11.0.0",       // NestJS CLI
  "@nestjs/schematics": "^11.0.0", // Code generators
  "typescript": "^5.9.3",          // TypeScript
  "@types/node": "^24.10.2",      // Node types
  "eslint": "^9.39.1",            // ESLint
  "@eslint/js": "^9.17.0",        // ESLint JS config
  "typescript-eslint": "^8.19.1" // TypeScript ESLint
}
```

## File Structure

```
/
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── bun.lock                # Bun lockfile
├── nest-cli.json           # NestJS CLI configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.mjs       # ESLint configuration
└── src/                    # Source code
    ├── main.ts             # Application entry point
    ├── app.module.ts       # Root module
    ├── app.controller.ts   # HTTP controller
    └── app.service.ts      # Business logic service
```

## Technical Constraints

### Starting Point

- Minimal structure - expand as needed
- No database by default (use recipe to add)
- No authentication by default (add when needed)

### Node.js Support

- Node.js 20+
- Modern JavaScript features

## Running the Application

### Development Mode

```bash
bun run dev
```

The server starts on `http://localhost:3000` with hot reload enabled.

### Available Endpoints

- `GET /` - Returns hello message
- `GET /version` - Returns version info

## Building for Production

```bash
bun run build   # Compiles to dist/
bun run start   # Runs production build
```
