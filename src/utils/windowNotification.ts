// https 환경에서만 가능함 :)
export function notificationAskPermission() {
    if (!("Notification" in window)) {
        return;
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification(
                    "안녕하세요 JANDA 입니다.\n 알림을 통해 유용한 정보를 보내 드리겠습니다."
                );
            }
        });
    }
    // 거절됨 ㅠㅠ
}

export const WindowNotification = {
    askPermission: notificationAskPermission,
    // api interface 와 상호작용하는 메서드들을 몇개 만들자 :)
};
