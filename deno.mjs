import worker from "./src/worker.mjs";

Deno.serve(worker.fetch);
