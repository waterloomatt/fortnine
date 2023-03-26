export function formatter() {
    return new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
    });
}
