import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type {
  PlantAdminAuthData,
  PlantRoleData,
  PlantAdminData,
  ModuleData,
  PlantData,
  StoreData,
  WaterCanData,
  ForecastData,
  OrderData,
  ExampleData,
  WaterCanBatchData,
} from './models';

export class PlantAdminAuthService {
  /**
   * @returns any Login Response
   * @throws ApiError
   */
  public static login(
    data: PlantAdminAuthData['payloads']['Login']
  ): CancelablePromise<PlantAdminAuthData['responses']['Login']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/admin/auth/login',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any me Response
   * @throws ApiError
   */
  public static me(
    data: PlantAdminAuthData['payloads']['Me'] = {}
  ): CancelablePromise<PlantAdminAuthData['responses']['Me']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/admin/auth/me',
      headers: {},
    });
  }
}

export class PlantRoleService {
  /**
   * @returns any Roles list response
   * @throws ApiError
   */
  public static list(
    data: PlantRoleData['payloads']['List']
  ): CancelablePromise<PlantRoleData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/roles/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Roles create response
   * @throws ApiError
   */
  public static create(
    data: PlantRoleData['payloads']['Create']
  ): CancelablePromise<PlantRoleData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/roles/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Roles update response
   * @throws ApiError
   */
  public static update(
    data: PlantRoleData['payloads']['Update']
  ): CancelablePromise<PlantRoleData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/roles/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Roles delete response
   * @throws ApiError
   */
  public static delete(
    data: PlantRoleData['payloads']['Delete']
  ): CancelablePromise<PlantRoleData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/roles/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class PlantAdminService {
  /**
   * @returns any admins Response
   * @throws ApiError
   */
  public static adminList(
    data: PlantAdminData['payloads']['AdminList']
  ): CancelablePromise<PlantAdminData['responses']['AdminList']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/admins/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any admins Response
   * @throws ApiError
   */
  public static adminCreate(
    data: PlantAdminData['payloads']['AdminCreate']
  ): CancelablePromise<PlantAdminData['responses']['AdminCreate']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/admins/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any admins Response
   * @throws ApiError
   */
  public static adminUpdate(
    data: PlantAdminData['payloads']['AdminUpdate']
  ): CancelablePromise<PlantAdminData['responses']['AdminUpdate']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/admins/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any admins Response
   * @throws ApiError
   */
  public static adminDelete(
    data: PlantAdminData['payloads']['AdminDelete']
  ): CancelablePromise<PlantAdminData['responses']['AdminDelete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/admins/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class ModuleService {
  /**
   * @returns any Module Response
   * @throws ApiError
   */
  public static moduleList(
    data: ModuleData['payloads']['ModuleList']
  ): CancelablePromise<ModuleData['responses']['ModuleList']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/modules/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class PlantService {
  /**
   * @returns any Plants list response
   * @throws ApiError
   */
  public static list(
    data: PlantData['payloads']['List']
  ): CancelablePromise<PlantData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/plants/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Plants create response
   * @throws ApiError
   */
  public static create(
    data: PlantData['payloads']['Create']
  ): CancelablePromise<PlantData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/plants/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Plants update response
   * @throws ApiError
   */
  public static update(
    data: PlantData['payloads']['Update']
  ): CancelablePromise<PlantData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/plants/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Plants delete response
   * @throws ApiError
   */
  public static delete(
    data: PlantData['payloads']['Delete']
  ): CancelablePromise<PlantData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/plants/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class StoreService {
  /**
   * @returns any Stores list response
   * @throws ApiError
   */
  public static list(
    data: StoreData['payloads']['List']
  ): CancelablePromise<StoreData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/stores/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Stores create response
   * @throws ApiError
   */
  public static create(
    data: StoreData['payloads']['Create']
  ): CancelablePromise<StoreData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/stores/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Stores update response
   * @throws ApiError
   */
  public static update(
    data: StoreData['payloads']['Update']
  ): CancelablePromise<StoreData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/stores/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Stores delete response
   * @throws ApiError
   */
  public static delete(
    data: StoreData['payloads']['Delete']
  ): CancelablePromise<StoreData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/stores/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class WaterCanService {
  /**
   * @returns any WaterCans list response
   * @throws ApiError
   */
  public static list(
    data: WaterCanData['payloads']['List']
  ): CancelablePromise<WaterCanData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/water-can/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any WaterCans create response
   * @throws ApiError
   */
  public static create(
    data: WaterCanData['payloads']['Create']
  ): CancelablePromise<WaterCanData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/water-can/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any WaterCans update response
   * @throws ApiError
   */
  public static update(
    data: WaterCanData['payloads']['Update']
  ): CancelablePromise<WaterCanData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/water-can/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any WaterCans delete response
   * @throws ApiError
   */
  public static delete(
    data: WaterCanData['payloads']['Delete']
  ): CancelablePromise<WaterCanData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/water-can/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class ForecastService {
  /**
   * @returns any Forecast list response
   * @throws ApiError
   */
  public static list(
    data: ForecastData['payloads']['List']
  ): CancelablePromise<ForecastData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/forecast/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Forecast create response
   * @throws ApiError
   */
  public static create(
    data: ForecastData['payloads']['Create']
  ): CancelablePromise<ForecastData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/forecast/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Forecast update response
   * @throws ApiError
   */
  public static update(
    data: ForecastData['payloads']['Update']
  ): CancelablePromise<ForecastData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/forecast/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Forecast delete response
   * @throws ApiError
   */
  public static delete(
    data: ForecastData['payloads']['Delete']
  ): CancelablePromise<ForecastData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/forecast/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Forecast update response
   * @throws ApiError
   */
  public static createOrder(
    data: ForecastData['payloads']['CreateOrder']
  ): CancelablePromise<ForecastData['responses']['CreateOrder']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/forecast/order',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class OrderService {
  /**
   * @returns any Order list response
   * @throws ApiError
   */
  public static list(
    data: OrderData['payloads']['List']
  ): CancelablePromise<OrderData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/orders/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Order create response
   * @throws ApiError
   */
  public static create(
    data: OrderData['payloads']['Create']
  ): CancelablePromise<OrderData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/orders/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Order update response
   * @throws ApiError
   */
  public static update(
    data: OrderData['payloads']['Update']
  ): CancelablePromise<OrderData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/orders/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Order delete response
   * @throws ApiError
   */
  public static delete(
    data: OrderData['payloads']['Delete']
  ): CancelablePromise<OrderData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/orders/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class ExampleService {
  /**
   * @returns any Example list response
   * @throws ApiError
   */
  public static list(
    data: ExampleData['payloads']['List']
  ): CancelablePromise<ExampleData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/example/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Example create response
   * @throws ApiError
   */
  public static create(
    data: ExampleData['payloads']['Create']
  ): CancelablePromise<ExampleData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/example/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Example update response
   * @throws ApiError
   */
  public static update(
    data: ExampleData['payloads']['Update']
  ): CancelablePromise<ExampleData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/example/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Example delete response
   * @throws ApiError
   */
  public static delete(
    data: ExampleData['payloads']['Delete']
  ): CancelablePromise<ExampleData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/example/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class WaterCanBatchService {
  /**
   * @returns any WaterCansBatch list response
   * @throws ApiError
   */
  public static list(
    data: WaterCanBatchData['payloads']['List']
  ): CancelablePromise<WaterCanBatchData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/plant/water-can-batch/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any WaterCansBatch create response
   * @throws ApiError
   */
  public static create(
    data: WaterCanBatchData['payloads']['Create']
  ): CancelablePromise<WaterCanBatchData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/plant/water-can-batch/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any WaterCansBatch delete response
   * @throws ApiError
   */
  public static delete(
    data: WaterCanBatchData['payloads']['Delete']
  ): CancelablePromise<WaterCanBatchData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/plant/water-can-batch/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any WaterCansBatch re run response
   * @throws ApiError
   */
  public static reRun(
    data: WaterCanBatchData['payloads']['ReRun']
  ): CancelablePromise<WaterCanBatchData['responses']['ReRun']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/plant/water-can-batch/re-run',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}
