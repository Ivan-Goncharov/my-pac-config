function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "medium.com") || 
        dnsDomainIs(host, "grok.com") || 
        dnsDomainIs(host, "x.ai") ||
        dnsDomainIs(host, "youtube.com") || 
        dnsDomainIs(host, "anthropic.com") || 
        dnsDomainIs(host, "openai.com") || 
        dnsDomainIs(host, "claude.ai")) {
        return "PROXY 85.158.61.14:1672";
    }
    return "DIRECT";
}