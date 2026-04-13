interface NewsSource {
    fetchArticles(): Promise<string[]>;
}
class RSSFeedSource implements NewsSource {
    async fetchArticles(): Promise<string[]> {
        return ["RSS: Article 1", "RSS: Article 2"];
    }
}
class APISource implements NewsSource {
    async fetchArticles(): Promise<string[]> {
        return ["API: Article A", "API: Article B"];
    }
}
class MockSource implements NewsSource {
    async fetchArticles(): Promise<string[]> {
        return ["MOCK: Test"];
    }
}
class Container {
    private static services: Map<string, any> = new Map();
    static register(name: string, instance: any): void {
        this.services.set(name, instance);
    }
    static resolve<T>(name: string): T {
        return this.services.get(name);
    }
}

class NewsAggregator {
    private source: NewsSource;
    constructor() {
        this.source = Container.resolve<NewsSource>("NewsSource");
    }
    async display(): Promise<void> {
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
//tsc task19.ts --target ES2017