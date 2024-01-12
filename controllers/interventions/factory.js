angular.module('app')
    .factory('interventionsFactory', function ($http, CONSTANTS) {
        var factory = {};

        // Read all interventions
        factory.readInterventions = function () {
            return $http({
                method: 'GET',
                url: CONSTANTS.API_URL + '/interventions'

            });
        };

        // Create intervention
        factory.createIntervention = function ($scope) {
            var dateString = validateDate($scope.date_of_intervention)

            return $http({
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                data: {
                    'wording': $scope.wording,
                    'description': $scope.description,
                    'name': $scope.name,
                    'speaker': $scope.speaker,
                    'location': $scope.location,
                    'date_of_intervention': dateString
                },
                url: CONSTANTS.API_URL + '/interventions'

            });
        };

        // Read one intervention
        factory.readOneIntervention = function (id) {
            return $http({
                method: 'GET',
                url: CONSTANTS.API_URL + '/interventions/' + id

            });
        };

        // Update intervention
        factory.updateIntervention = function ($scope, id) {
            var dateString = validateDate($scope.date_of_intervention)
            return $http({
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                data: {
                    'id': $scope.id,
                    'wording': $scope.wording,
                    'description': $scope.description,
                    'name': $scope.name,
                    'speaker': $scope.speaker,
                    'location': $scope.location,
                    'date_of_intervention': dateString
                },
                url: CONSTANTS.API_URL + '/interventions/' + id
            });
        };

        function validateDate(date_of_intervention) {
            if (!date_of_intervention) {
                return null;
            }

            if (typeof date_of_intervention === 'string') {
                return date_of_intervention.split('T')[0];
            }

            if (date_of_intervention instanceof Date) {
                return date_of_intervention.toISOString().split('T')[0];
            }

            return null;
        }

        // Delete intervention
        factory.deleteIntervention = function (id) {
            return $http({
                method: 'DELETE',
                url: CONSTANTS.API_URL + '/interventions/' + id
            });
        };

        // Search all interventions
        factory.searchInterventions = function (keywords) {
            var filters = [
                {"name": "location", "op": "like", "val": "%" + keywords + "%"},
                {"name": "name", "op": "like", "val": "%" + keywords + "%"},
                {"name": "speaker", "op": "like", "val": "%" + keywords + "%"},
            ];

            var query = {"filters": filters};
            return $http({
                method: 'GET',
                url: CONSTANTS.API_URL + '/interventions',
                params: {"q": JSON.stringify(query)}
            });
        };

        return factory;
    });
