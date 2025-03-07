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
          type: number;
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
          type: number;
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
        type?: number;
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
        type: number;
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
        type: number;
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
        type: number;
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
        type: number;
      };
    };
  };
};

export type WareHouseRoleData = {
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
        type?: number;
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
        type: number;
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
        type: number;
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
        type: number;
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
        type: number;
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
        type?: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
      };
    };
  };
};

export type WareHouseAdminData = {
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
        type?: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
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
            type: number;
          };
        }>;
        role: {
          _id: string;
          name: string;
          permissions: Record<string, unknown>;
          order: string | number;
          super_admin: boolean;
          color: string;
          type: number;
        };
        plants: number;
        type: number;
      };
    };
  };
};

export type AdminPlantRelationData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        admin: string;
        page: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        admin: string;
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
  };

  responses: {
    List: {
      status: boolean;
      message: string;
      data: Array<{
        _id: string;
        admin: {
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
            type: number;
          };
          children_count?: number;
          admin_create_limit?: number;
          createdAt?: string;
          updatedAt?: string;
          ip?: string;
        };
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
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
        admin: {
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
            type: number;
          };
          children_count?: number;
          admin_create_limit?: number;
          createdAt?: string;
          updatedAt?: string;
          ip?: string;
        };
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
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
        admin: {
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
            type: number;
          };
          children_count?: number;
          admin_create_limit?: number;
          createdAt?: string;
          updatedAt?: string;
          ip?: string;
        };
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
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
        type?: number;
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
        type: number;
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
        type: number;
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
        type: number;
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
        type: number;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type DriverData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        search?: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
        phone: string;
        employment_type: string;
        status: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        phone: string;
        employment_type: string;
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
        phone: string;
        employment_type: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
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
        phone: string;
        employment_type: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
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
        phone: string;
        employment_type: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
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
        phone: string;
        employment_type: string;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
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

export type DeliveryVehicleData = {
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
        type: string;
        capacity_ltr: number;
        capacity_cans: number;
        driver: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        type: string;
        capacity_ltr: number;
        capacity_cans: number;
        driver: string;
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
        type: string;
        capacity_ltr: number;
        capacity_cans: number;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        driver: {
          _id: string;
          id: string;
          name: string;
          phone: string;
          employment_type: string;
          plant: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        current_location: string;
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
        type: string;
        capacity_ltr: number;
        capacity_cans: number;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        driver: {
          _id: string;
          id: string;
          name: string;
          phone: string;
          employment_type: string;
          plant: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        current_location: string;
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
        type: string;
        capacity_ltr: number;
        capacity_cans: number;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        driver: {
          _id: string;
          id: string;
          name: string;
          phone: string;
          employment_type: string;
          plant: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        current_location: string;
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
        type: string;
        capacity_ltr: number;
        capacity_cans: number;
        plant: {
          _id: string;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        driver: {
          _id: string;
          id: string;
          name: string;
          phone: string;
          employment_type: string;
          plant: {
            _id: string;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        status: string;
        current_location: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type StatsData = {
  payloads: {
    Stats: {
      authorization?: string;

      query?: {};
    };
  };

  responses: {
    Stats: {
      status: boolean;
      message: string;
      data: {
        can_stats: {
          totalCans: number;
          atPlant: number;
          atWarehouse: number;
          atStore: number;
          inTransit: number;
          onWayStore: number;
          outForReturn: number;
          damaged: number;
          decommissioned: number;
        };
      };
      meta: {
        pages: number;
        total: number;
        page: number;
        size: number;
      };
    };
  };
};

export type WarehouseData = {
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
        type?: number;
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
        type: number;
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
        type: number;
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
        type: number;
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
        type: number;
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
        search?: string;
        sectors?: string;
        size: string;
        source?: string;
        sourceValue?: unknown;
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
        sector: string;
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
        sector: string;
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
    Detail: {
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
        id?: number;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        code?: string;
        createdAt: string;
        updatedAt: string;
        sector: {
          _id: string;
          name: string;
          city: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
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
        id?: number;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        code?: string;
        createdAt: string;
        updatedAt: string;
        sector: {
          _id: string;
          name: string;
          city: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id?: number;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        code?: string;
        createdAt: string;
        updatedAt: string;
        sector: {
          _id: string;
          name: string;
          city: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    Delete: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id?: number;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        code?: string;
        createdAt: string;
        updatedAt: string;
        sector: {
          _id: string;
          name: string;
          city: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
    Detail: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id?: number;
        name: string;
        address: string;
        coordinate: {
          lat: number;
          long: number;
        };
        code?: string;
        createdAt: string;
        updatedAt: string;
        sector: {
          _id: string;
          name: string;
          city: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
          };
          createdAt: string;
          updatedAt: string;
        };
      };
    };
  };
};

export type StoreCityData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        search?: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
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
    Detail: {
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
        createdAt: string;
        updatedAt: string;
      };
    };
    Detail: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type StoreSectorData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        cities?: string;
        page: string;
        search?: string;
        size: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        name: string;
        city: string;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        name: string;
        city: string;
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
    Detail: {
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
        city: {
          _id: string;
          name: string;
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
        name: string;
        city: {
          _id: string;
          name: string;
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
        name: string;
        city: {
          _id: string;
          name: string;
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
        name: string;
        city: {
          _id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    Detail: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        name: string;
        city: {
          _id: string;
          name: string;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type StoreComplaintData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
      };
    };
    Update: {
      authorization?: string;
      requestBody: {
        status: string;
        remark: string;
        plant_admin?: string;
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
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        order: {
          _id: string;
          watercans: number;
          date: string;
          status: string;
          store: {
            _id: string;
            id?: number;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            code?: string;
            createdAt: string;
            updatedAt: string;
            sector: {
              _id: string;
              name: string;
              city: {
                _id: string;
                name: string;
                createdAt: string;
                updatedAt: string;
              };
              createdAt: string;
              updatedAt: string;
            };
          };
          forecast: {
            _id: string;
            watercans: number;
            date: string;
            store: {
              _id: string;
              id?: number;
              name: string;
              address: string;
              coordinate: {
                lat: number;
                long: number;
              };
              code?: string;
              createdAt: string;
              updatedAt: string;
              sector: {
                _id: string;
                name: string;
                city: {
                  _id: string;
                  name: string;
                  createdAt: string;
                  updatedAt: string;
                };
                createdAt: string;
                updatedAt: string;
              };
            };
            status: string;
            store_admin_approval: boolean;
            createdAt: string;
            updatedAt: string;
          };
          employee: {
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
              type: number;
              createdAt: string;
              updatedAt: string;
            };
            status: string;
            createdAt: string;
            updatedAt: string;
          };
          delivered_at: string;
          out_at: string;
          scanned_outside: boolean;
          remark: string;
          images: Array<string>;
          createdAt: string;
          updatedAt: string;
        };
        store_employee: {
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
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        store_admin: {
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
        plant_admin: {
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
            type: number;
          };
          children_count?: number;
          admin_create_limit?: number;
          createdAt?: string;
          updatedAt?: string;
          ip?: string;
        };
        type: string;
        watercans: number;
        status: string;
        description: string;
        images: Array<string>;
        store_admin_approval: boolean;
        remark: string;
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
    Update: {
      status: boolean;
      message: string;
      data: {
        _id: string;
        id: number;
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        order: {
          _id: string;
          watercans: number;
          date: string;
          status: string;
          store: {
            _id: string;
            id?: number;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            code?: string;
            createdAt: string;
            updatedAt: string;
            sector: {
              _id: string;
              name: string;
              city: {
                _id: string;
                name: string;
                createdAt: string;
                updatedAt: string;
              };
              createdAt: string;
              updatedAt: string;
            };
          };
          forecast: {
            _id: string;
            watercans: number;
            date: string;
            store: {
              _id: string;
              id?: number;
              name: string;
              address: string;
              coordinate: {
                lat: number;
                long: number;
              };
              code?: string;
              createdAt: string;
              updatedAt: string;
              sector: {
                _id: string;
                name: string;
                city: {
                  _id: string;
                  name: string;
                  createdAt: string;
                  updatedAt: string;
                };
                createdAt: string;
                updatedAt: string;
              };
            };
            status: string;
            store_admin_approval: boolean;
            createdAt: string;
            updatedAt: string;
          };
          employee: {
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
              type: number;
              createdAt: string;
              updatedAt: string;
            };
            status: string;
            createdAt: string;
            updatedAt: string;
          };
          delivered_at: string;
          out_at: string;
          scanned_outside: boolean;
          remark: string;
          images: Array<string>;
          createdAt: string;
          updatedAt: string;
        };
        store_employee: {
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
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        store_admin: {
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
        plant_admin: {
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
            type: number;
          };
          children_count?: number;
          admin_create_limit?: number;
          createdAt?: string;
          updatedAt?: string;
          ip?: string;
        };
        type: string;
        watercans: number;
        status: string;
        description: string;
        images: Array<string>;
        store_admin_approval: boolean;
        remark: string;
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
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        order: {
          _id: string;
          watercans: number;
          date: string;
          status: string;
          store: {
            _id: string;
            id?: number;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            code?: string;
            createdAt: string;
            updatedAt: string;
            sector: {
              _id: string;
              name: string;
              city: {
                _id: string;
                name: string;
                createdAt: string;
                updatedAt: string;
              };
              createdAt: string;
              updatedAt: string;
            };
          };
          forecast: {
            _id: string;
            watercans: number;
            date: string;
            store: {
              _id: string;
              id?: number;
              name: string;
              address: string;
              coordinate: {
                lat: number;
                long: number;
              };
              code?: string;
              createdAt: string;
              updatedAt: string;
              sector: {
                _id: string;
                name: string;
                city: {
                  _id: string;
                  name: string;
                  createdAt: string;
                  updatedAt: string;
                };
                createdAt: string;
                updatedAt: string;
              };
            };
            status: string;
            store_admin_approval: boolean;
            createdAt: string;
            updatedAt: string;
          };
          employee: {
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
              type: number;
              createdAt: string;
              updatedAt: string;
            };
            status: string;
            createdAt: string;
            updatedAt: string;
          };
          delivered_at: string;
          out_at: string;
          scanned_outside: boolean;
          remark: string;
          images: Array<string>;
          createdAt: string;
          updatedAt: string;
        };
        store_employee: {
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
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        store_admin: {
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
        plant_admin: {
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
            type: number;
          };
          children_count?: number;
          admin_create_limit?: number;
          createdAt?: string;
          updatedAt?: string;
          ip?: string;
        };
        type: string;
        watercans: number;
        status: string;
        description: string;
        images: Array<string>;
        store_admin_approval: boolean;
        remark: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};

export type StoreTimeData = {
  payloads: {
    List: {
      authorization?: string;

      query: {
        page: string;
        size: string;
        store: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
        store: string;
        from: number;
        to: number;
      };

      query?: {};
    };
    Update: {
      authorization?: string;
      requestBody: {
        store: string;
        from: number;
        to: number;
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
        store: string;
        from: number;
        to: number;
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
        store: string;
        from: number;
        to: number;
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
        store: string;
        from: number;
        to: number;
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
        store: string;
        from: number;
        to: number;
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
        batches?: string;
        page: string;
        select?: string;
        size: string;
        watercans?: string;
      };
    };
    Create: {
      authorization?: string;
      requestBody: {
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
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        rotations: number;
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
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        rotations: number;
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
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        store: {
          _id: string;
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        rotations: number;
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
        store_admin_approval?: boolean;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        status: string;
        store_admin_approval: boolean;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        status: string;
        store_admin_approval: boolean;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        status: string;
        store_admin_approval: boolean;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        status: string;
        store_admin_approval: boolean;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        status: string;
        store_admin_approval: boolean;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            id?: number;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            code?: string;
            createdAt: string;
            updatedAt: string;
            sector: {
              _id: string;
              name: string;
              city: {
                _id: string;
                name: string;
                createdAt: string;
                updatedAt: string;
              };
              createdAt: string;
              updatedAt: string;
            };
          };
          status: string;
          store_admin_approval: boolean;
          createdAt: string;
          updatedAt: string;
        };
        employee: {
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
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        delivered_at: string;
        out_at: string;
        scanned_outside: boolean;
        remark: string;
        images: Array<string>;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            id?: number;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            code?: string;
            createdAt: string;
            updatedAt: string;
            sector: {
              _id: string;
              name: string;
              city: {
                _id: string;
                name: string;
                createdAt: string;
                updatedAt: string;
              };
              createdAt: string;
              updatedAt: string;
            };
          };
          status: string;
          store_admin_approval: boolean;
          createdAt: string;
          updatedAt: string;
        };
        employee: {
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
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        delivered_at: string;
        out_at: string;
        scanned_outside: boolean;
        remark: string;
        images: Array<string>;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            id?: number;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            code?: string;
            createdAt: string;
            updatedAt: string;
            sector: {
              _id: string;
              name: string;
              city: {
                _id: string;
                name: string;
                createdAt: string;
                updatedAt: string;
              };
              createdAt: string;
              updatedAt: string;
            };
          };
          status: string;
          store_admin_approval: boolean;
          createdAt: string;
          updatedAt: string;
        };
        employee: {
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
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        delivered_at: string;
        out_at: string;
        scanned_outside: boolean;
        remark: string;
        images: Array<string>;
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
          id?: number;
          name: string;
          address: string;
          coordinate: {
            lat: number;
            long: number;
          };
          code?: string;
          createdAt: string;
          updatedAt: string;
          sector: {
            _id: string;
            name: string;
            city: {
              _id: string;
              name: string;
              createdAt: string;
              updatedAt: string;
            };
            createdAt: string;
            updatedAt: string;
          };
        };
        forecast: {
          _id: string;
          watercans: number;
          date: string;
          store: {
            _id: string;
            id?: number;
            name: string;
            address: string;
            coordinate: {
              lat: number;
              long: number;
            };
            code?: string;
            createdAt: string;
            updatedAt: string;
            sector: {
              _id: string;
              name: string;
              city: {
                _id: string;
                name: string;
                createdAt: string;
                updatedAt: string;
              };
              createdAt: string;
              updatedAt: string;
            };
          };
          status: string;
          store_admin_approval: boolean;
          createdAt: string;
          updatedAt: string;
        };
        employee: {
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
            type: number;
            createdAt: string;
            updatedAt: string;
          };
          status: string;
          createdAt: string;
          updatedAt: string;
        };
        delivered_at: string;
        out_at: string;
        scanned_outside: boolean;
        remark: string;
        images: Array<string>;
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
          type: number;
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
          type: number;
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
          type: number;
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
          type: number;
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
    List1: {
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
          type: number;
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
          type: number;
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
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
    List1: {
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
          type: number;
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
          type: number;
          createdAt: string;
          updatedAt: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  };
};
