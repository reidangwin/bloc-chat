(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        this.addNewRoom = function(roomName){
            Room.add(this.roomName);
            $uibModalInstance.close();
        };

        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();