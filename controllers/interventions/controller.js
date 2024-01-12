angular.module('app')
    .controller('InterventionController', function ($scope, $mdDialog, $mdToast, interventionsFactory) {

        // Read interventions
        $scope.readInterventions = function () {
            interventionsFactory.readInterventions().then(function successCallback(response) {
                $scope.interventions = response.data.objects;
            }, function errorCallback(response) {
                $scope.showToast("Unable to read interventions.");
            });

            $scope.propertyName = 'date_of_interventions';
            $scope.reverse = true;
            // $scope.interventions = friends;;

            $scope.sortBy = function (propertyName) {
                $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
                $scope.propertyName = propertyName;
            };
        };

        // Show 'create intervention form' in dialog box
        $scope.showCreateInterventionForm = function (event) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: '../../views/interventions/create_intervention.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true,
                fullscreen: true
            });
        };


        // methods for dialog box
        function DialogController($scope, $mdDialog) {
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
        }

        // Create new intervention
        $scope.createIntervention = function () {
            $scope.date_of_intervention = new Date();
            interventionsFactory.createIntervention($scope).then(function successCallback(response) {
                $scope.showToast("Intervention created!");
                $scope.clearInterventionForm();
                $scope.readInterventions();
                $scope.cancel();
            }, function errorCallback(response) {
                $scope.showToast("Unable to create intervention.");
                $scope.clearInterventionForm();
            });
        };


        // clear variable / form values
        $scope.clearInterventionForm = function () {
            $scope.id = "";
            $scope.name = "";
            $scope.description = "";
            $scope.wording = "";
            $scope.speaker = "";
            $scope.location = "";
            $scope.date_of_intervention = "";
            $scope.status = "";
        }

        // show toast message
        $scope.showToast = function (message) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent(message)
                    .hideDelay(3000)
                    .position("top right")
            );
        }


        // retrieve intervention to fill out the form
        $scope.readOneIntervention = function (id) {
            interventionsFactory.readOneIntervention(id).then(function successCallback(response) {
                // put the values in the form
                $scope.id = response.data.id;
                $scope.wording = response.data.wording;
                $scope.description = response.data.description;
                $scope.name = response.data.name;
                $scope.speaker = response.data.speaker;
                $scope.location = response.data.location;
                $scope.date_of_intervention = response.data.date_of_intervention;
                $scope.status = response.data.status;

                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '../../views/interventions/read_one_intervention.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    scope: $scope,
                    preserveScope: true,
                    fullscreen: true
                }).then(
                    function () {
                    },
                    // user clicked 'Cancel'
                    function () {
                        // clear modal content
                        $scope.clearInterventionForm();
                    }
                );
            }, function errorCallback(response) {
                $scope.showToast("Unable to retrieve intervention.");
            });
        };


        // retrieve intervention to fill out the form
        $scope.showUpdateInterventionForm = function (id) {
            interventionsFactory.readOneIntervention(id).then(function successCallback(response) {
                // put the values in the form
                $scope.id = response.data.id;
                $scope.wording = response.data.wording;
                $scope.description = response.data.description;
                $scope.name = response.data.name;
                $scope.speaker = response.data.speaker;
                $scope.location = response.data.location;
                $scope.date_of_intervention = response.data.date_of_intervention;

                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: '../../views/interventions/update_intervention.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose: true,
                    scope: $scope,
                    preserveScope: true,
                    fullscreen: true
                }).then(
                    function () {
                    },
                    // user clicked 'Cancel'
                    function () {
                        // clear modal content
                        $scope.clearInterventionForm();
                    }
                );
            }, function errorCallback(response) {
                $scope.showToast("Unable to retrieve intervention.");
            });
        };

        // update intervention record / save changes
        $scope.updateIntervention = function () {
            interventionsFactory.updateIntervention($scope, $scope.id).then(function successCallback(response) {
                // tell the user intervention record was updated
                $scope.showToast("Record was updated");

                // refresh the intervention list
                $scope.readInterventions();

                // close dialog
                $scope.cancel();

                // clear modal content
                $scope.clearInterventionForm();

            }, function errorCallback(response) {
                $scope.showToast("Unable to update record.");
            });
        };

        // confirmDeleteProduct will be here
        // cofirm product deletion
        $scope.confirmDeleteIntervention = function (event, id) {

            // set id of record to delete
            $scope.id = id;

            // dialog settings
            var confirm = $mdDialog.confirm()
                .title('Are you sure?')
                .textContent('Product will be deleted.')
                .targetEvent(event)
                .ok('Yes')
                .cancel('No');

            // show dialog
            $mdDialog.show(confirm).then(
                // 'Yes' button
                function () {
                    // if user clicked 'Yes', delete product record
                    $scope.deleteIntervention();
                },

                // 'No' button
                function () {
                    // hide dialog
                }
            );
        }


        // delete intervention
        $scope.deleteIntervention = function (event) {
            interventionsFactory.deleteIntervention($scope.id).then(function successCallback(response) {
                // tell the user intervention was deleted
                $scope.showToast("Intervention was deleted!");

                // refresh the list
                $scope.readInterventions();

            }, function errorCallback(response) {
                $scope.showToast("Unable to delete record.");
            });
        };

        $scope.searchInterventions = function () {
            // use products factory
            interventionsFactory.searchInterventions($scope.intervention_search_keywords).then(function successCallback(response) {
                $scope.interventions = response.data.objects;
            }, function errorCallback(response) {
                $scope.showToast("Unable to read record.");
            });
        }
    });
