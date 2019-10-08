import Events from '_views/events/'
import EventsDetailContainer from '_views/events/detail'
import AddEventsContainer from '_views/events/add'
import SettingContainer from '_views/setting'
import UsersContainer from '_views/users'
import UpdateUsersContainer from '_views/users/detail'
import AddUsersContainer from '_views/users/add'
import FeedbackContainer from '_views/feedback/'
import TermOfServiceContainer from '_views/termOfService'
import NotFoundContainer from '_views/404'
import CityContainer from '_views/cityActivity'
import announcementContainer from '_views/announcement'
import announcementAddContainer from '_views/announcement/add'
import announcementDetailContainer from '_views/announcement/detail'

const dashboardRoutes = [
  {
    path: '/events',
    name: 'Events',
    icon: 'pe-7s-date',
    component: Events,
    layout: '/admin',
    isSidebar: true
  },
  {
    path: '/event/add',
    name: 'Add New Events',
    component: AddEventsContainer,
    isSidebar: false,
    layout: '/admin'
  },
  {
    path: '/event/:eventId',
    name: 'Events Detail',
    component: EventsDetailContainer,
    isSidebar: false,
    layout: '/admin'
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersContainer,
    icon: 'pe-7s-users',
    isSidebar: true,
    layout: '/admin'
  },
  {
    path: '/user/add',
    name: 'Create User',
    component: AddUsersContainer,
    icon: 'pe-7s-users',
    isSidebar: false,
    layout: '/admin'
  },
  {
    path: '/user/:id',
    name: 'Update User',
    component: UpdateUsersContainer,
    icon: 'pe-7s-users',
    isSidebar: false,
    layout: '/admin'
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundContainer,
    icon: '',
    isSidebar: false,
    layout: '/admin'
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: FeedbackContainer,
    icon: 'pe-7s-mail-open',
    isSidebar: true,
    layout: '/admin'
  },
  {
    path: '/setting',
    name: 'Setting',
    component: SettingContainer,
    icon: 'pe-7s-settings',
    isSidebar: true,
    layout: '/admin'
  },
  {
    path: '/termOfService',
    name: 'Term Of Service',
    component: TermOfServiceContainer,
    icon: 'pe-7s-note2',
    isSidebar: true,
    layout: '/admin'
  },
  {
    path: '/city-activity',
    name: 'City and Activity',
    component: CityContainer,
    icon: 'pe-7s-map-2',
    isSidebar: true,
    layout: '/admin'
  },
  {
    path: '/announcements',
    name: 'Announcement',
    component: announcementContainer,
    icon: 'pe-7s-play',
    isSidebar: true,
    layout: '/admin'
  },
  {
    path: '/announcement/add',
    name: 'Announcement',
    component: announcementAddContainer,
    icon: 'pe-7s-map-2',
    isSidebar: false,
    layout: '/admin'
  },
  {
    path: '/announcement/:id',
    name: 'Announcement',
    component: announcementDetailContainer,
    icon: 'pe-7s-map-2',
    isSidebar: false,
    layout: '/admin'
  },
  {
    path: '/',
    name: 'Events',
    icon: 'pe-7s-date',
    component: Events,
    layout: '/admin',
    isSidebar: false
  }
]

export default dashboardRoutes
