function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "medium.com") ||
        dnsDomainIs(host, "grok.com") ||
        dnsDomainIs(host, "x.ai") ||
        dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "googlevideo.com") ||
        dnsDomainIs(host, "ytimg.com") ||
        dnsDomainIs(host, "ggpht.com") ||
        dnsDomainIs(host, "googleapis.com") ||
        dnsDomainIs(host, "anthropic.com") ||
        dnsDomainIs(host, "openai.com") ||
        dnsDomainIs(host, "chat.openai.com") ||
        dnsDomainIs(host, "chatgpt.com") ||
        dnsDomainIs(host, "claude.ai") ||
        dnsDomainIs(host, "preply.com") ||
        dnsDomainIs(host, "linkedin.com") ||
        dnsDomainIs(host, "uizard.io") ||
        dnsDomainIs(host, "jetbrains.com") ||
        dnsDomainIs(host, "jetbrains.space") ||
        dnsDomainIs(host, "jetbrains.community") ||
        dnsDomainIs(host, "jetbrains.net") ||
        dnsDomainIs(host, "jetbrains.team") ||
        dnsDomainIs(host, "jetbrains.io") ||
        dnsDomainIs(host, "jetbrains.help") || 
        dnsDomainIs(host, "cursor.com") ||
        dnsDomainIs(host, "api2.cursor.sh") ||
        dnsDomainIs(host, "cursor.sh") ||
        dnsDomainIs(host, "main.vscode-cdn.net") ||
        dnsDomainIs(host, "clientstream.launchdarkly.com") ||
        dnsDomainIs(host, "www.googleapis.com") ||
        dnsDomainIs(host, "firebaseremoteconfig.googleapis.com") ||
        dnsDomainIs(host, "otel.gitkraken.com") ||
        dnsDomainIs(host, "api.segment.io") ||
        dnsDomainIs(host, "firebaselogging-pa.googleapis.com")
    ) {
        return "PROXY 45.147.102.174:8000";
    }
    return "DIRECT";
}