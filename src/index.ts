import { app, PORT } from "./server";

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
