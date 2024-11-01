import express from "express";
import { createApp } from "./app";

createApp().listen(3000, () => {
  console.log("Server is listening on port 3000");
});