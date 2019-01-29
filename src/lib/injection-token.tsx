class Token {
    constructor(private description?: string) {}
}

export function InjectionToken(description?: string) {
    return new Token(description);
}
