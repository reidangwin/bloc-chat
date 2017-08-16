(function () {
    function HomeCtrl(Room, Message, $uibModal) {
        this.currentRoom = {$id:'-Kre_ag8XTs11RdfaE-h'};
        this.allRooms = Room.all;

        this.newDate = function (dateString) {
          return new Date(dateString);
        };

        this.newRoom = function () {
            $uibModal.open({
                templateUrl: 'templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };

        this.changeRoom = function (roomId) {
            this.currentRoom = roomId;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();