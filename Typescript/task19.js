class RSSFeedSource {
    async fetchArticles() {
        return ["RSS: Article 1", "RSS: Article 2"];
    }
}
class APISource {
    async fetchArticles() {
        return ["API: Article A", "API: Article B"];
    }
}
class MockSource {
    async fetchArticles() {
        return ["MOCK: Test"];
    }
}
class Container {
    static register(name, instance) {
        this.services.set(name, instance);
    }
    static resolve(name) {
        return this.services.get(name);
    }
}
Container.services = new Map();
class NewsAggregator {
    constructor() {
        this.source = Container.resolve("NewsSource");
    }
    async display() {
        const articles = await this.source.fetchArticles();
        console.log(articles);
    }
}
async function runApp() {
    console.log("Using RSS Source");
    Container.register("NewsSource", new RSSFeedSource());
    let app1 = new NewsAggregator();
    await app1.display();
    console.log("\nSwitching to API Source");
    Container.register("NewsSource", new APISource());
    let app2 = new NewsAggregator();
    await app2.display();
    console.log("\nTesting with Mock Source");
    Container.register("NewsSource", new MockSource());
    let testApp = new NewsAggregator();
    await testApp.display();
}
runApp();
