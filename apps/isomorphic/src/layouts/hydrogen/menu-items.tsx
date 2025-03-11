import { DUMMY_ID } from '@/config/constants';
import { routes } from '@/config/routes';
import AffiliateIcon from '@core/components/icons/affiliate';
import CrmDashIcon from '@core/components/icons/crm-icon';
import ProjectWriteIcon from '@core/components/icons/project-write';
import {
  PiAirplaneTiltDuotone,
  PiArrowsOut,
  PiArrowsOutLineHorizontalBold,
  PiBellSimpleRingingDuotone,
  PiBinocularsDuotone,
  PiBriefcaseDuotone,
  PiBrowserDuotone,
  PiCalendarDuotone,
  PiCalendarPlusDuotone,
  PiCaretCircleUpDownDuotone,
  PiChartBarDuotone,
  PiChartLineUpDuotone,
  PiChatCenteredDotsDuotone,
  PiCityLight,
  PiCodesandboxLogoDuotone,
  PiCoinDuotone,
  PiCreditCardDuotone,
  PiCurrencyCircleDollarDuotone,
  PiCurrencyDollarDuotone,
  PiEnvelopeDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiEyedropperSample,
  PiFeatherDuotone,
  PiFolder,
  PiFolderLockDuotone,
  PiGridFourDuotone,
  PiHammerDuotone,
  PiHeadsetDuotone,
  PiHourglassSimpleDuotone,
  PiHouseLineDuotone,
  PiListNumbersDuotone,
  PiLockKeyDuotone,
  PiMapPinLineDuotone,
  PiNewspaperClippingDuotone,
  PiNoteBlankDuotone,
  PiNuclearPlant,
  PiPackageDuotone,
  PiPushPinDuotone,
  PiRocketLaunchDuotone,
  PiShapesDuotone,
  PiShieldCheckDuotone,
  PiShootingStarDuotone,
  PiShoppingCartDuotone,
  PiSparkleDuotone,
  PiSquaresFourDuotone,
  PiStepsDuotone,
  PiStorefront,
  PiTableDuotone,
  PiUserCircleDuotone,
  PiUserDuotone,
  PiUserGearDuotone,
  PiUserPlusDuotone,
  PiWarehouseLight,
  PiWarning,
} from 'react-icons/pi';
import { GiWaterGallon } from "react-icons/gi";
import { SiFuturelearn } from "react-icons/si";
import { CiMap, CiReceipt } from "react-icons/ci";
import { GrUserWorker } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

const can = (moduleId: number) => ({ moduleId });

export interface MenuItem {
  moduleId: number;
  name: string;
  href: string;
  icon: JSX.Element;
  dropdownItems: MenuItem[];
  badge: string
}
// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: 'Overview',
    ...can(1)
  },
  // label end
  // {
  //   name: 'Sample',
  //   href: '/sample/list',
  //   icon: <PiEyedropperSample />,
  //   ...can(101)
  // },
  {
    name: 'Plant',
    href: '#',
    icon: <PiNuclearPlant />,
    ...can(6),
    dropdownItems: [
      {
        name: 'List',
        href: '/plant/list',
        icon: <PiNuclearPlant />,
        ...can(3)
      },
      {
        name: 'Roles & Permissions',
        href: routes.rolesPermissions,
        icon: <PiFolderLockDuotone />,
        ...can(2)
      },
      {
        name: 'Employee',
        href: '/employee/list',
        icon: <GrUserWorker />,
        ...can(10)
      },

    ],
  },
  {
    name: 'Warehouse',
    href: '/warehouse/list',
    icon: <PiWarehouseLight />,
    ...can(4),
    dropdownItems: [
      {
        name: 'List',
        href: '/warehouse/list',
        icon: <PiWarehouseLight />,
        ...can(4)
      },
      {
        name: 'Roles & Permissions',
        href: routes.rolesPermissionsWarehouse,
        icon: <PiFolderLockDuotone />,
        ...can(2)
      },
      {
        name: 'Employee',
        href: '/warehouse-employee/list',
        icon: <GrUserWorker />,
        ...can(10)
      },

    ],
  },
  {
    name: 'Store',
    href: '/store/list',
    icon: <PiStorefront />,
    ...can(4),
    dropdownItems: [
      {
        name: 'City',
        href: '/city/list',
        icon: <PiCityLight />,
        ...can(3)
      },
      {
        name: 'Sector',
        href: '/sector/list',
        icon: <CiMap />,
        ...can(3)
      },
      {
        name: 'Store',
        href: '/store/list',
        icon: <PiStorefront />,
        ...can(5)
      },
    ],
  },



  {
    name: 'Water Can',
    href: '#',
    icon: <GiWaterGallon />,
    ...can(6),
    dropdownItems: [
      {
        name: 'Batch',
        href: routes.waterCan.batch,
        ...can(6)
      },
      {
        name: 'Cans',
        href: routes.waterCan.cans,
        ...can(7)
      },
    ],
  },
  {
    name: 'Deliveries',
    href: '#',
    icon: <TbTruckDelivery />,
    ...can(6),
    dropdownItems: [
      {
        name: 'Drivers',
        href: routes.deliveries.driver,
        ...can(6)
      },
      {
        name: 'Vehicles',
        href: routes.deliveries.vehicle,
        ...can(7)
      },
    ],
  },
  {
    name: 'Forecast',
    href: '/forecast/list',
    icon: <SiFuturelearn />,
    ...can(8)
  },

  {
    name: 'Order',
    href: '/order/list',
    icon: <CiReceipt />,
    ...can(9)
  },
  {
    name: 'Complaints',
    href: '/complaint/list',
    icon: <PiWarning />,
    ...can(5)
  },



  // // label start
  // {
  //   name: 'Other',
  //   ...can(101)
  // },
  // // label end

  // {
  //   name: 'File Manager',
  //   href: '/',
  //   icon: <PiFolder />,
  //   ...can(101)
  // },

  // {
  //   name: 'Appointment',
  //   href: routes.appointment.dashboard,
  //   icon: <PiCalendarDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Executive',
  //   href: routes.executive.dashboard,
  //   icon: <PiBriefcaseDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Project',
  //   href: routes.project.dashboard,
  //   icon: <ProjectWriteIcon />,
  //   ...can(102)
  // },
  // {
  //   name: 'CRM',
  //   href: routes.crm.dashboard,
  //   icon: <CrmDashIcon />,
  //   ...can(102)
  // },
  // {
  //   name: 'Affiliate',
  //   href: routes.affiliate.dashboard,
  //   icon: <AffiliateIcon />,
  //   badge: 'NEW',
  //   ...can(102)
  // },
  // {
  //   name: 'Social Media',
  //   href: routes.socialMedia.dashboard,
  //   icon: <PiSparkleDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Job Board',
  //   href: routes.jobBoard.dashboard,
  //   icon: <PiShapesDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Financial',
  //   href: routes.financial.dashboard,
  //   icon: <PiCurrencyCircleDollarDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Logistics',
  //   href: routes.logistics.dashboard,
  //   icon: <PiPackageDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'E-Commerce',
  //   href: routes.eCommerce.dashboard,
  //   icon: <PiShoppingCartDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Analytics',
  //   href: routes.analytics,
  //   icon: <PiChartBarDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Support',
  //   href: routes.support.dashboard,
  //   icon: <PiHeadsetDuotone />,
  //   ...can(102)
  // },

  // // label start
  // {
  //   name: 'Apps Kit',
  // },
  // // label end
  // {
  //   name: 'E-Commerce',
  //   href: '#',
  //   icon: <PiShoppingCartDuotone />,
  //   ...can(102),
  //   dropdownItems: [
  //     {
  //       name: 'Products',
  //       href: routes.eCommerce.products,
  //       badge: '',
  //       ...can(102)
  //     },
  //     {
  //       name: 'Product Details',
  //       href: routes.eCommerce.productDetails(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Create Product',
  //       href: routes.eCommerce.createProduct,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Edit Product',
  //       href: routes.eCommerce.ediProduct(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Categories',
  //       href: routes.eCommerce.categories,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Create Category',
  //       href: routes.eCommerce.createCategory,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Edit Category',
  //       href: routes.eCommerce.editCategory(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Orders',
  //       href: routes.eCommerce.orders,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Order Details',
  //       href: routes.eCommerce.orderDetails(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Create Order',
  //       href: routes.eCommerce.createOrder,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Edit Order',
  //       href: routes.eCommerce.editOrder(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Reviews',
  //       href: routes.eCommerce.reviews,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Shop',
  //       href: routes.eCommerce.shop,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Cart',
  //       href: routes.eCommerce.cart,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Checkout & Payment',
  //       href: routes.eCommerce.checkout,
  //       ...can(102)
  //     },
  //   ],
  // },
  // {
  //   name: 'Support',
  //   href: '#',
  //   icon: <PiHeadsetDuotone />,
  //   ...can(102),
  //   dropdownItems: [
  //     {
  //       name: 'Inbox',
  //       href: routes.support.inbox,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Snippets',
  //       href: routes.support.snippets,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Templates',
  //       href: routes.support.templates,
  //       ...can(102)
  //     },
  //   ],
  // },
  // {
  //   name: 'Invoice',
  //   href: '#',
  //   icon: <PiCurrencyDollarDuotone />,
  //   ...can(102),
  //   dropdownItems: [
  //     {
  //       name: 'List',
  //       href: routes.invoice.home,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Details',
  //       href: routes.invoice.details(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Create',
  //       href: routes.invoice.create,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Edit',
  //       href: routes.invoice.edit(DUMMY_ID),
  //       ...can(102)
  //     },
  //   ],
  // },
  // {
  //   name: 'Logistics',
  //   href: '#',
  //   icon: <PiPackageDuotone />,
  //   ...can(102),
  //   dropdownItems: [
  //     {
  //       name: 'Shipment List',
  //       href: routes.logistics.shipmentList,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Shipment Details',
  //       href: routes.logistics.shipmentDetails(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Create Shipment',
  //       href: routes.logistics.createShipment,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Edit Shipment',
  //       href: routes.logistics.editShipment(DUMMY_ID),
  //       ...can(102)
  //     },
  //     {
  //       name: 'Customer Profile',
  //       href: routes.logistics.customerProfile,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Tracking',
  //       href: routes.logistics.tracking(DUMMY_ID),
  //       ...can(102)
  //     },
  //   ],
  // },
  // {
  //   name: 'Job Feeds',
  //   href: routes.jobBoard.jobFeed,
  //   icon: <PiShapesDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Appointment',
  //   href: routes.appointment.appointmentList,
  //   icon: <PiCalendarDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'File Manager',
  //   href: routes.file.manager,
  //   icon: <PiFolder />,
  //   ...can(102)
  // },
  // {
  //   name: 'Event Calendar',
  //   href: routes.eventCalendar,
  //   icon: <PiCalendarPlusDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Point of Sale',
  //   href: routes.pos.index,
  //   icon: <PiCreditCardDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Invoice Builder',
  //   href: routes.invoice.builder,
  //   icon: <PiNewspaperClippingDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Image Viewer',
  //   href: routes.imageViewer,
  //   icon: <PiCodesandboxLogoDuotone />,
  //   badge: 'NEW',
  //   ...can(102)
  // },
  // // label start
  // {
  //   name: 'Search & Filters',
  // },
  // {
  //   name: 'Real Estate',
  //   href: routes.searchAndFilter.realEstate,
  //   icon: <PiHouseLineDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Flight Booking',
  //   href: routes.searchAndFilter.flight,
  //   icon: <PiAirplaneTiltDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'NFT',
  //   href: routes.searchAndFilter.nft,
  //   icon: <PiCoinDuotone />,
  //   ...can(102)
  // },
  // // label end
  // // label start
  // {
  //   name: 'Widgets',
  // },
  // // label end
  // {
  //   name: 'Cards',
  //   href: routes.widgets.cards,
  //   icon: <PiSquaresFourDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Icons',
  //   href: routes.widgets.icons,
  //   icon: <PiFeatherDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Charts',
  //   href: routes.widgets.charts,
  //   icon: <PiChartLineUpDuotone />,
  //   ...can(102)
  // },
  // // {
  // //   name: 'Banners',
  // //   href: routes.widgets.banners,
  // //   icon: <PiImageDuotone />,
  // // },
  // {
  //   name: 'Maps',
  //   href: routes.widgets.maps,
  //   icon: <PiMapPinLineDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Email Templates',
  //   href: routes.emailTemplates,
  //   icon: <PiEnvelopeDuotone />,
  //   ...can(102)
  // },
  // // label start
  // {
  //   name: 'Forms',
  // },
  // // label end
  // {
  //   name: 'Account Settings',
  //   href: routes.forms.profileSettings,
  //   icon: <PiUserGearDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Notification Preference',
  //   href: routes.forms.notificationPreference,
  //   icon: <PiBellSimpleRingingDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Personal Information',
  //   href: routes.forms.personalInformation,
  //   icon: <PiUserDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Newsletter',
  //   href: routes.forms.newsletter,
  //   icon: <PiEnvelopeSimpleOpenDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Multi Step',
  //   href: routes.multiStep,
  //   icon: <PiStepsDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Payment Checkout',
  //   href: routes.eCommerce.checkout,
  //   icon: <PiCreditCardDuotone />,
  //   ...can(102)
  // },
  // // label start
  // {
  //   name: 'Tables',
  //   ...can(102)
  // },
  // // label end
  // {
  //   name: 'Basic',
  //   href: routes.tables.basic,
  //   icon: <PiGridFourDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Collapsible',
  //   href: routes.tables.collapsible,
  //   icon: <PiCaretCircleUpDownDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Enhanced',
  //   href: routes.tables.enhanced,
  //   icon: <PiTableDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Sticky Header',
  //   href: routes.tables.stickyHeader,
  //   icon: <PiBrowserDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Pagination',
  //   href: routes.tables.pagination,
  //   icon: <PiListNumbersDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Search',
  //   href: routes.tables.search,
  //   icon: <PiHourglassSimpleDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Resizable',
  //   href: routes.tables.resizable,
  //   icon: <PiArrowsOutLineHorizontalBold />,
  //   ...can(102)
  // },
  // {
  //   name: 'Pinning',
  //   href: routes.tables.pinning,
  //   icon: <PiPushPinDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Drag & Drop',
  //   href: routes.tables.dnd,
  //   icon: <PiArrowsOut />,
  //   ...can(102)
  // },
  // // label start
  // {
  //   name: 'Pages',
  //   ...can(102)
  // },
  // {
  //   name: 'Profile',
  //   href: routes.profile,
  //   icon: <PiUserCircleDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Welcome',
  //   href: routes.welcome,
  //   icon: <PiShootingStarDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Coming soon',
  //   href: routes.comingSoon,
  //   icon: <PiRocketLaunchDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Access Denied',
  //   href: routes.accessDenied,
  //   icon: <PiFolderLockDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Not Found',
  //   href: routes.notFound,
  //   icon: <PiBinocularsDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Maintenance',
  //   href: routes.maintenance,
  //   icon: <PiHammerDuotone />,
  //   ...can(102)
  // },
  // {
  //   name: 'Blank',
  //   href: routes.blank,
  //   icon: <PiNoteBlankDuotone />,
  //   ...can(102)
  // },

  // // label start
  // {
  //   name: 'Authentication',
  //   ...can(102)
  // },
  // // label end
  // {
  //   name: 'Sign Up',
  //   href: '#',
  //   icon: <PiUserPlusDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Modern Sign up',
  //       href: routes.auth.signUp1,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Vintage Sign up',
  //       href: routes.auth.signUp2,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Trendy Sign up',
  //       href: routes.auth.signUp3,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Elegant Sign up',
  //       href: routes.auth.signUp4,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Classic Sign up',
  //       href: routes.auth.signUp5,
  //       ...can(102)
  //     },
  //   ],
  // },
  // {
  //   name: 'Sign In',
  //   href: '#',
  //   icon: <PiShieldCheckDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Modern Sign in',
  //       href: routes.auth.signIn1,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Vintage Sign in',
  //       href: routes.auth.signIn2,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Trendy Sign in',
  //       href: routes.auth.signIn3,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Elegant Sign in',
  //       href: routes.auth.signIn4,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Classic Sign in',
  //       href: routes.auth.signIn5,
  //       ...can(102)
  //     },
  //   ],
  // },
  // {
  //   name: 'Forgot Password',
  //   href: '#',
  //   icon: <PiLockKeyDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Modern Forgot password',
  //       href: routes.auth.forgotPassword1,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Vintage Forgot password',
  //       href: routes.auth.forgotPassword2,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Trendy Forgot password',
  //       href: routes.auth.forgotPassword3,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Elegant Forgot password',
  //       href: routes.auth.forgotPassword4,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Classic Forgot password',
  //       href: routes.auth.forgotPassword5,
  //       ...can(102)
  //     },
  //   ],
  // },
  // {
  //   name: 'OTP Pages',
  //   href: '#',
  //   icon: <PiChatCenteredDotsDuotone />,
  //   dropdownItems: [
  //     {
  //       name: 'Modern OTP page',
  //       href: routes.auth.otp1,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Vintage OTP page',
  //       href: routes.auth.otp2,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Trendy OTP page',
  //       href: routes.auth.otp3,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Elegant OTP page',
  //       href: routes.auth.otp4,
  //       ...can(102)
  //     },
  //     {
  //       name: 'Classic OTP page',
  //       href: routes.auth.otp5,
  //       ...can(102)
  //     },
  //   ],
  // },
];
