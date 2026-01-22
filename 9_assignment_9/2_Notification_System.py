class Notification:
    def send(self, message):
        pass


class EmailNotification(Notification):
    def send(self, message):
        print("Email sent:", message)


class SMSNotification(Notification):
    def send(self, message):
        print("SMS sent:", message)


class PushNotification(Notification):
    def send(self, message):
        print("Push notification sent:", message)


def notify_user(notification):
    notification.send("Welcome Message Sent to User!!!")


notifications = [EmailNotification(), SMSNotification(), PushNotification()]

for n in notifications:
    notify_user(n)
