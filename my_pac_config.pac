function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "medium.com") ||
        // dnsDomainIs(host, "grok.com") ||
        dnsDomainIs(host, "x.ai") ||
        dnsDomainIs(host, "youtube.com")
        // dnsDomainIs(host, "googlevideo.com") ||
        // dnsDomainIs(host, "ytimg.com") ||
        // dnsDomainIs(host, "ggpht.com") ||
        // dnsDomainIs(host, "googleapis.com") ||
        // dnsDomainIs(host, "anthropic.com") ||
        // dnsDomainIs(host, "openai.com") ||
        // dnsDomainIs(host, "chat.openai.com") ||
        // dnsDomainIs(host, "chatgpt.com") ||
        // dnsDomainIs(host, "claude.ai") ||
        // dnsDomainIs(host, "preply.com") ||
        // dnsDomainIs(host, "linkedin.com") ||
        // dnsDomainIs(host, "uizard.io") ||
        // dnsDomainIs(host, "jetbrains.com") ||
        // dnsDomainIs(host, "jetbrains.space") ||
        // dnsDomainIs(host, "jetbrains.community") ||
        // dnsDomainIs(host, "jetbrains.net") ||
        // dnsDomainIs(host, "jetbrains.team") ||
        // dnsDomainIs(host, "jetbrains.io") ||
        // dnsDomainIs(host, "jetbrains.help") ||
        // dnsDomainIs(host, "github.com") ||
        // dnsDomainIs(host, "education.github.com") ||
        // dnsDomainIs(host, "api.github.com") ||
        // dnsDomainIs(host, "raw.githubusercontent.com") ||
        // dnsDomainIs(host, "githubusercontent.com") ||
        // dnsDomainIs(host, "github.io") ||
        // dnsDomainIs(host, "vscode-unpkg.net") ||
        // dnsDomainIs(host, "marketplace.visualstudio.com") ||
        // dnsDomainIs(host, "vscode-unpkg.net") ||
        // dnsDomainIs(host, "*.github.com") ||
        // dnsDomainIs(host, "copilot.githubusercontent.com") ||
        // dnsDomainIs(host, "uizard.io") ||
        // dnsDomainIs(host, "gemini.google.com") ||
        // dnsDomainIs(host, "notebooklm.google.com") ||
        // dnsDomainIs(host, "notebooklm.com") ||
        // dnsDomainIs(host, "notebooklm.googleapis.com") ||
        // dnsDomainIs(host, "*.notebooklm.google.com") ||
        // dnsDomainIs(host, "*.googleusercontent.com") ||
        // dnsDomainIs(host, "*.googleapis.com") ||
        // dnsDomainIs(host, "*.gstatic.com") ||
        // dnsDomainIs(host, "*.augmentcode.com") ||
        // dnsDomainIs(host, "augmentcode.com") ||
        // dnsDomainIs(host, "*app.augmentcode.com") ||
        // dnsDomainIs(host, "app.augmentcode.com") ||
        // dnsDomainIs(host, "d1.api.augmentecode.com")
    ) {
        return "PROXY 85.8.171.235:12323";
    }
    return "DIRECT";
}

