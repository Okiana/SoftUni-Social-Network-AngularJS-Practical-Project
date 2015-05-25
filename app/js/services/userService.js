SocialNetwork.factory('userService',
    function ($http, baseServiceUrl, authService, authentication) {
        return {

            getMyProfile: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/me',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            editUserProfile: function (data ,success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/me',
                    headers: authentication.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },
            editUserPassword: function (data ,success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + 'me/changepassword',
                    headers: authentication.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },
            getFrDetailFriendsList: function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/' + $routeParams.username + '/friends',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getFrFriendsPreview : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/' + $routeParams.username + '/friends/preview',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getMyFriendsPreview : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + 'me/friends/preview',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getMyFriendsList  : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl  + '/me/friends',
                    headers: authentication.getAuthHeaders()
                 };
                $http(request).success(success).error(error);
            },
            getMyFriendsRequest  : function (headers, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl  + '/me/requests',
                    headers: authentication.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            sendFriendRequest  : function (headers, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl  + '/me/requests',
                    headers: authentication.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            }

    }});


