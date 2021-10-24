/**
 * The Builder pattern is a well-known pattern in TypeScript world.
 * It’s especially useful when you need to create an object with lots of possible configuration options.
 */

/**
 * Represents a product created by the builder
 */
class APIProduct {
  public url: string = "";
  public method: string = "";
  public options?: TOptions;

  public stringifyOptions(): string {
    return JSON.stringify(this.options);
  }

  public printAPI(): void {
    console.log(
      `URL: ${this.url}, Method: ${
        this.method
      }, Options: ${this.stringifyOptions()}`
    );
  }
}

/**
 * The builder abstraction
 */
interface IAPIBuilder {
  setURL(url: string): void;
  setMethod(url: string): void;
  returnAPI(): APIProduct;
}

/**
 * Concrete builder implementation
 */
class APIBuilder implements IAPIBuilder {
  private _api: APIProduct;

  /**
   * A fresh builder instance should contain a blank product object, which is
   * used in further assembly.
   */
  constructor() {
    this.reset();
  }

  public reset(): void {
    this._api = new APIProduct();
    this._api.url = "http://localhost";
    this._api.method = "GET";
  }

  /**
   * All production steps work with the same product instance.
   */
  public setURL(url: string) {
    this._api.url = url;
  }

  public setMethod(method: string) {
    this._api.method = method;
  }

  public setOptions(options: TOptions) {
    this._api.options = options;
  }

  public returnAPI(): APIProduct {
    return this._api;
  }
}

/**
 * The director
 */
class APIDirector {
  private _builder: IAPIBuilder;

  constructor(builder?: IAPIBuilder) {
    if (builder) {
      this._builder = builder;
    }
  }

  public setBuilder(builder: APIBuilder) {
    this._builder = builder;
  }

  createGetRequest(url: string) {
    this._builder.setURL(url);
  }

  createPostRequest(url: string) {
    this._builder.setURL(url);
    this._builder.setMethod("POST");
  }
}

// Usage
function usageCode(director: APIDirector) {
  const builder = new APIBuilder();
  director.setBuilder(builder);

  console.log("Default Get request");
  director.createGetRequest("http://dummyUrl.com");
  builder.returnAPI().printAPI();

  console.log("build Post requesy");
  director.createPostRequest("http://dummyUrl.com");
  builder.returnAPI().printAPI();

  // Remember, the Builder pattern can be used without a Director class.
  console.log("Custom product:");
  builder.setURL("http://myNewUrl.com");
  builder.setMethod("PUT");
  builder.setOptions({ id: 1 });
  builder.returnAPI().printAPI();
}

const director = new APIDirector();
usageCode(director);

type TOptions = { [key: string]: string | number | object };
