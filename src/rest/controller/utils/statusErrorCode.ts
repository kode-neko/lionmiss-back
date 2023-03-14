function statusErrorCode(name: string): number {
  return name === "ValidationError" ? 406 : 500;
}

export { statusErrorCode };
