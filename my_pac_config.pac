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
        dnsDomainIs(host, "claude.ai") ||
        dnsDomainIs(host, "preply.com") ||
        dnsDomainIs(host, "linkedin.com") ||
        dnsDomainIs(host, "uizard.io")
    ) {
        return "PROXY 45.147.102.174:8000";
    }
    return "DIRECT";
}