const http = require("http");

http.get("http://localhost:3000/health", res => {
  if (res.statusCode !== 200) {
    console.error("Health check failed");
    process.exit(1);
  }
  console.log("Health check passed ✅");
});
