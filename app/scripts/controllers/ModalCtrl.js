(function () {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var modal = this;
        modal.addNewRoom = function(){
            Room.add(modal.roomName);
            $uibModalInstance.close();
        };

        modal.createNewUser = function(){
            $cookies.put('blocChatCurrentUser', modal.username);
            $uibModalInstance.close();
        };

        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl])
})();