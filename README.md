## Setup Typesafe environment variables

It uses [T3 env](env.t3.gg) package for this setup. This package provides a simple way to define environment variables validation for your app.

### Installation

#### 1. Install dependencies

```bash
bun install @t3-oss/env-core zod
```

#### 2. Create your schema

While defining both the client and server schemas in a single file provides the best developer experience, it also means that your validation schemas for the server variables will be shipped to the client. If you consider the names of your variables sensitive, you should split your schemas into two files.

src/env/server.ts

```
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
});
```

src/env/client.ts

```
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
```

#### 3. Validate schema on build

next.config.ts

```
import "./src/env/server.ts";
```

#### Other dependencies

```bash
bun install -D eslint-plugin-n
```

.eslintrc.json

```
"plugins": ["n", ...],
"n/no-process-env": ["error"],
```
