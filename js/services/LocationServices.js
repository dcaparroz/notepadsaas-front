app.factory('locationServices', ['$http', function($http) {

        function getLocationAPI(callback) {
            return "https://notepaddavid.herokuapp.com";
        }

        return {
            getLocationAPI:getLocationAPI
        };
    }])