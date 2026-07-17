export function assetPath(path: string) {
    const basePath =
        process.env.NODE_ENV === "production"
            ? "/linkfinity-networks"
            : "";

    return `${basePath}${path}`;
}