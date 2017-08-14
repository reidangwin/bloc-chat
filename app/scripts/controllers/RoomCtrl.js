(function () {
    function RoomCtrl(Room) {
       this.allRooms = Room.all;
        // this.allRooms = [1,2,3];
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl])
})();