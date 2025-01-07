export type PlantAdminAuthData = {
  payloads: {
    Login: {
      authorization?: string;
      requestBody: {
        phone: string;
        password: string;
      };

      query?: {};
    };
    Me: {
      authorization?: string;

      query?: {};
    };
  };

  responses: {
    Login: {
      status: boolean;
      message: string;
      data: {
        _id?: string;
        phone?: string;
        password?: string;
        token?: string;
        name?: string;
        email?: string;
        password_changed?: boolean;
        super_admin?: boolean;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
        };
        children_count?: number;
        admin_create_limit?: number;
        createdAt?: string;
        updatedAt?: string;
        ip?: string;
      };
    };
    Me: {
      status: boolean;
      message: string;
      data: {
        _id?: string;
        phone?: string;
        password?: string;
        token?: string;
        name?: string;
        email?: string;
        password_changed?: boolean;
        super_admin?: boolean;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
        };
        children_count?: number;
        admin_create_limit?: number;
        createdAt?: string;
        updatedAt?: string;
        ip?: string;
      };
    };
  };
};

export type PlantRoleData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
        permissions: unknown;
        super_admin?: boolean;
        order: string | number;
        color: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        permissions: unknown;
        super_admin?: boolean;
        order: string | number;
        color: string;
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        name: string;
        permissions: Record<string, unknown>;
        order: string | number;
        super_admin: boolean;
        color: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        permissions: Record<string, unknown>;
        order: string | number;
        super_admin: boolean;
        color: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        permissions: Record<string, unknown>;
        order: string | number;
        super_admin: boolean;
        color: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        permissions: Record<string, unknown>;
        order: string | number;
        super_admin: boolean;
        color: string;
      };
    };
  };
};

export type PlantAdminData = {
  payloads: {
    AdminList: {
      authorization?: string;

      query: {
        page: string;
        requestType?: string;
        search?: string;
        size: string;
      };
    };
    AdminCreate: {
      authorization?: string;
      requestBody: {
        name: string;
        phone: string;
        email: string;
        password_unhashed: string;
        password?: string;
        role: string;
        parent?: string;
        expire_at?: string | number;
        admin_create_limit?: string | number;
        permissions?: unknown;
      };

      query?: {};
    };
    AdminUpdate: {
      authorization?: string;
      requestBody: {
        name: string;
        phone: string;
        email: string;
        password_unhashed: string;
        password?: string;
        role: string;
        expire_at?: string | number;
        admin_create_limit?: string | number;
        permissions?: unknown;
      };

      query: {
        id: string;
      };
    };
    AdminDelete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    AdminList: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        name: string;
        permissions: unknown;
        super_admin: boolean;
        phone?: string;
        email?: string;
        password?: string;
        password_unhashed?: string;
        token?: string;
        parent: unknown;
        createdAt: string;
        updatedAt: string;
        expire_at: string;
        children_count: number;
        children: unknown;
        admins: Array<{
          _id: string;
          name: string;
          permissions: unknown;
          super_admin: boolean;
          phone?: string;
          password?: string;
          token?: string;
          parent: unknown;
          createdAt: string;
          updatedAt: string;
          expire_at: string;
          children_count: number;
          children: unknown;
          role: {
            _id: string;
            name: string;
            permissions: Record<string, unknown>;
            order: string | number;
            super_admin: boolean;
            color: string;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
        };
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    AdminCreate: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        permissions: unknown;
        super_admin: boolean;
        phone?: string;
        email?: string;
        password?: string;
        password_unhashed?: string;
        token?: string;
        parent: unknown;
        createdAt: string;
        updatedAt: string;
        expire_at: string;
        children_count: number;
        children: unknown;
        admins: Array<{
          _id: string;
          name: string;
          permissions: unknown;
          super_admin: boolean;
          phone?: string;
          password?: string;
          token?: string;
          parent: unknown;
          createdAt: string;
          updatedAt: string;
          expire_at: string;
          children_count: number;
          children: unknown;
          role: {
            _id: string;
            name: string;
            permissions: Record<string, unknown>;
            order: string | number;
            super_admin: boolean;
            color: string;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
        };
      };
    };
    AdminUpdate: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        permissions: unknown;
        super_admin: boolean;
        phone?: string;
        email?: string;
        password?: string;
        password_unhashed?: string;
        token?: string;
        parent: unknown;
        createdAt: string;
        updatedAt: string;
        expire_at: string;
        children_count: number;
        children: unknown;
        admins: Array<{
          _id: string;
          name: string;
          permissions: unknown;
          super_admin: boolean;
          phone?: string;
          password?: string;
          token?: string;
          parent: unknown;
          createdAt: string;
          updatedAt: string;
          expire_at: string;
          children_count: number;
          children: unknown;
          role: {
            _id: string;
            name: string;
            permissions: Record<string, unknown>;
            order: string | number;
            super_admin: boolean;
            color: string;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
        };
      };
    };
    AdminDelete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        permissions: unknown;
        super_admin: boolean;
        phone?: string;
        email?: string;
        password?: string;
        password_unhashed?: string;
        token?: string;
        parent: unknown;
        createdAt: string;
        updatedAt: string;
        expire_at: string;
        children_count: number;
        children: unknown;
        admins: Array<{
          _id: string;
          name: string;
          permissions: unknown;
          super_admin: boolean;
          phone?: string;
          password?: string;
          token?: string;
          parent: unknown;
          createdAt: string;
          updatedAt: string;
          expire_at: string;
          children_count: number;
          children: unknown;
          role: {
            _id: string;
            name: string;
            permissions: Record<string, unknown>;
            order: string | number;
            super_admin: boolean;
            color: string;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
        };
      };
    };
  };
};

export type ModuleData = {
  payloads: {
    ModuleList: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
  };

  responses: {
    ModuleList: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        name: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
  };
};

export type PlantData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type StoreData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type WaterCanData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        status: string;
        plant: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        status: string;
        plant: string;
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        id: number;
        qr_url: string;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: number;
        qr_url: string;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: number;
        qr_url: string;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: number;
        qr_url: string;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type ForecastData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        watercans: number;
        date: string;
        store: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        password: string;
        plant: string;
        status: string;
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
    CreateOrder: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        watercans: number;
        date: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        watercans: number;
        date: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        watercans: number;
        date: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        watercans: number;
        date: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    CreateOrder: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        watercans: number;
        date: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type OrderData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        watercans: number;
        date: string;
        store: string;
        forecast: string;
        status: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        watercans: number;
        date: string;
        status: string;
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        watercans: number;
        date: string;
        status: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        watercans: number;
        date: string;
        status: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        watercans: number;
        date: string;
        status: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        watercans: number;
        date: string;
        status: string;
        store: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type ExampleData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
        age: number;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        age: number;
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        name: string;
        age: number;
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        age: number;
        createdAt: string;
        updatedAt: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        age: number;
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        age: number;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type EmployeeData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
        password: string;
        plant: string;
        status: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        password: string;
        plant: string;
        status: string;
      };

      query: {
        id: string;
      };
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        id: string;
        name: string;
        password: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: string;
        name: string;
        password: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: string;
        name: string;
        password: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: string;
        name: string;
        password: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type WaterCanBatchData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        watercans: number;
        status?: string;
        plant: string;
      };

      query?: {};
    };
    Delete: {
      authorization?: string;

      query: {
        id: string;
      };
    };
    ReRun: {
      authorization?: string;

      query: {
        id: string;
      };
    };
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        id: number;
        watercans: number;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      }>;
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
    Create: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: number;
        watercans: number;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: number;
        watercans: number;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    ReRun: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: number;
        watercans: number;
        status: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};
