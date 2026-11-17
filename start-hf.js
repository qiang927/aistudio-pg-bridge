'use strict';

// Hugging Face deployment entrypoint.
// Do not persist Google cookies: the upstream account store stays in memory.
delete process.env.COOKIES_DIR;

if (!process.env.RELAY_API_KEY || process.env.RELAY_API_KEY.length < 32) {
  console.error('[HF] Missing/weak RELAY_API_KEY. Set a random secret (32+ chars) in Space Settings.');
  process.exit(1);
}
if (!process.env.PROOF_SERVER_URL || !/^https?:\/\//i.test(process.env.PROOF_SERVER_URL)) {
  console.error('[HF] Set PROOF_SERVER_URL to a reachable external WAA Proof Server URL.');
  process.exit(1);
}

process.env.RELAY_HOST = '0.0.0.0';
process.env.RELAY_PORT = '7860';

require('./bin/start-relay.js');
