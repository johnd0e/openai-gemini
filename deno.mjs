import {serve} from "https://deno.land/std/http/mod.ts"
import worker from "./src/worker.mjs";

//Deno.
serve(worker.fetch);
