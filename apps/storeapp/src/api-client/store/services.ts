import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';
import type {
  StoreAdminAuthData,
  StoreRoleData,
  StoreAdminData,
  ModuleData,
  StoreData,
  ForecastData,
  EmployeeData,
  OrderData,
  WaterCanData,
} from './models';

export class StoreAdminAuthService {
  /**
   * @returns any Login Response
   * @throws ApiError
   */
  public static login(
    data: StoreAdminAuthData['payloads']['Login']
  ): CancelablePromise<StoreAdminAuthData['responses']['Login']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/store/admin/auth/login',
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
    data: StoreAdminAuthData['payloads']['Me'] = {}
  ): CancelablePromise<StoreAdminAuthData['responses']['Me']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/store/admin/auth/me',
      headers: {},
    });
  }
}

export class StoreRoleService {
  /**
   * @returns any Roles list response
   * @throws ApiError
   */
  public static list(
    data: StoreRoleData['payloads']['List']
  ): CancelablePromise<StoreRoleData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/store/roles/',
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
    data: StoreRoleData['payloads']['Create']
  ): CancelablePromise<StoreRoleData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/store/roles/',
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
    data: StoreRoleData['payloads']['Update']
  ): CancelablePromise<StoreRoleData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/store/roles/',
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
    data: StoreRoleData['payloads']['Delete']
  ): CancelablePromise<StoreRoleData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/store/roles/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class StoreAdminService {
  /**
   * @returns any admins Response
   * @throws ApiError
   */
  public static adminList(
    data: StoreAdminData['payloads']['AdminList']
  ): CancelablePromise<StoreAdminData['responses']['AdminList']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/store/admins/',
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
    data: StoreAdminData['payloads']['AdminCreate']
  ): CancelablePromise<StoreAdminData['responses']['AdminCreate']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/store/admins/',
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
    data: StoreAdminData['payloads']['AdminUpdate']
  ): CancelablePromise<StoreAdminData['responses']['AdminUpdate']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/store/admins/',
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
    data: StoreAdminData['payloads']['AdminDelete']
  ): CancelablePromise<StoreAdminData['responses']['AdminDelete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/store/admins/',
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
      url: '/store/modules/',
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
      url: '/store/stores/',
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
      url: '/store/stores/',
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
      url: '/store/stores/',
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
      url: '/store/stores/',
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
      url: '/store/forecast/',
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
      url: '/store/forecast/',
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
      url: '/store/forecast/',
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
      url: '/store/forecast/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}

export class EmployeeService {
  /**
   * @returns any Employee list response
   * @throws ApiError
   */
  public static list(
    data: EmployeeData['payloads']['List']
  ): CancelablePromise<EmployeeData['responses']['List']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'GET',
      url: '/store/employees/',
      headers: {},
      query: {
        ...query,
      },
    });
  }

  /**
   * @returns any Employee create response
   * @throws ApiError
   */
  public static create(
    data: EmployeeData['payloads']['Create']
  ): CancelablePromise<EmployeeData['responses']['Create']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'POST',
      url: '/store/employees/',
      headers: {},
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Employee update response
   * @throws ApiError
   */
  public static update(
    data: EmployeeData['payloads']['Update']
  ): CancelablePromise<EmployeeData['responses']['Update']> {
    const { query, requestBody, authorization } = data;
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/store/employees/',
      headers: {},
      query: {
        ...query,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Employee delete response
   * @throws ApiError
   */
  public static delete(
    data: EmployeeData['payloads']['Delete']
  ): CancelablePromise<EmployeeData['responses']['Delete']> {
    const { query, authorization } = data;
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/store/employees/',
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
      url: '/store/orders/',
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
      url: '/store/water-can/',
      headers: {},
      query: {
        ...query,
      },
    });
  }
}
