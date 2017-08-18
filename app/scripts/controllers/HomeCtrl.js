(function () {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {

        var home = this;

        home.currentRoom = {$id:'-Kre_ag8XTs11RdfaE-h'};
        home.allRooms = Room.all;
        home.currentUser = $cookies.get('blocChatCurrentUser');

        home.newDate = function (dateString) {
          return new Date(dateString);
        };

        this.newRoom = function () {
            $uibModal.open({
                templateUrl: 'templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };

        home.changeRoom = function (roomId) {
            home.currentRoom = roomId;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
        };

        home.sendMessage = function () {
            home.newMessage.roomId = this.currentRoom.$id;
            home.newMessage.username = home.currentUser;
            Message.send(home.newMessage);
            home.newMessage = null;
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();