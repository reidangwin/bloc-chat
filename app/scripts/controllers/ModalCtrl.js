(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        var modal = this;
        modal.addNewRoom = function(){
            Room.add(modal.roomName);
            $uibModalInstance.close();
        };

        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();