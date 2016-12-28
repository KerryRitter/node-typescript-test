export class TestDataService {
    public async getData(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve("Hey!");
        });
    }
}