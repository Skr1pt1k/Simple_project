import { NotificationManager } from 'react-notifications'

class Notifications {
  createNotification(type, message) {
    switch (type) {
      case 'create-success':
        NotificationManager.success('Succesfully created')
        break
      case 'delete-success':
        NotificationManager.success('Succesfully deleted')
        break
      case 'update-success':
        NotificationManager.success('Succesfully updated')
        break

      default:
        break
    }
  }
}

export default new Notifications()
