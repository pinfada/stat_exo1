{"filter":false,"title":"modalCommercelist.js","tooltip":"/app/assets/partials/controllers/modalCommercelist.js","undoManager":{"mark":78,"position":78,"stack":[[{"start":{"row":0,"column":22},"end":{"row":0,"column":39},"action":"remove","lines":["modalRegistration"],"id":2},{"start":{"row":0,"column":22},"end":{"row":0,"column":39},"action":"insert","lines":["modalCommercelist"]}],[{"start":{"row":8,"column":0},"end":{"row":18,"column":6},"action":"remove","lines":["    $scope.signIn = function () {","        $log.log('Submiting user info.'); // kinda console logs this statement","        $log.log($scope.credentials);","        Auth.login($scope.credentials).then(function(user) {","            $uibModalInstance.close('cancel');","            $route.reload();","        }, function(error) {","            console.info('Error in authenticating user!');","            alert('Error in signing in user!');","        });","    };"],"id":3}],[{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"remove","lines":["",""],"id":4}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":53},"action":"remove","lines":["    $scope.credentials = { email: '', password: '' };"],"id":5}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":6}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":7}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":8}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "],"id":10}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":74},"action":"insert","lines":["$log.log('Submiting user info.'); // kinda console logs this statement"],"id":11}],[{"start":{"row":0,"column":99},"end":{"row":0,"column":100},"action":"insert","lines":[" "],"id":12}],[{"start":{"row":0,"column":100},"end":{"row":0,"column":102},"action":"insert","lines":["''"],"id":13}],[{"start":{"row":0,"column":101},"end":{"row":0,"column":113},"action":"insert","lines":["commercenear"],"id":14}],[{"start":{"row":0,"column":114},"end":{"row":0,"column":115},"action":"insert","lines":[","],"id":15}],[{"start":{"row":0,"column":172},"end":{"row":0,"column":173},"action":"insert","lines":[","],"id":16}],[{"start":{"row":0,"column":173},"end":{"row":0,"column":174},"action":"insert","lines":[" "],"id":17}],[{"start":{"row":0,"column":174},"end":{"row":0,"column":186},"action":"insert","lines":["commercenear"],"id":18}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":35},"action":"remove","lines":["'Submiting user info.'"],"id":19},{"start":{"row":2,"column":13},"end":{"row":2,"column":25},"action":"insert","lines":["commercenear"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "],"id":20}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":21},"action":"insert","lines":["$scope.myVal = A;"],"id":21}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"remove","lines":["A"],"id":22}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":31},"action":"insert","lines":["commercenear"],"id":23}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"remove","lines":["l"],"id":24}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"remove","lines":["a"],"id":25}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["V"],"id":26}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["y"],"id":27}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["m"],"id":28}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":23},"action":"insert","lines":["commercenear"],"id":29}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":64},"action":"remove","lines":["    $log.log(commercenear); // kinda console logs this statement"],"id":30}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":31}],[{"start":{"row":2,"column":39},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["c"],"id":33}],[{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["o"],"id":34}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["m"],"id":35}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["m"],"id":36}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["e"],"id":37}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["e"],"id":38}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"remove","lines":["m"],"id":39}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"remove","lines":["m"],"id":40}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["n"],"id":41}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["s"],"id":42}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["o"],"id":43}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["l"],"id":44}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["e"],"id":45}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["."],"id":46}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["l"],"id":47}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["o"],"id":48}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["g"],"id":49}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":15},"action":"remove","lines":["log"],"id":50},{"start":{"row":3,"column":12},"end":{"row":3,"column":17},"action":"insert","lines":["log()"]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":35},"action":"insert","lines":["$scope.commercenear"],"id":51}],[{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":[";"],"id":52}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":23},"action":"remove","lines":["mmercenear"],"id":53},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["t"],"id":54}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["e"],"id":55}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["n"],"id":56}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["t"],"id":57}],[{"start":{"row":3,"column":23},"end":{"row":3,"column":35},"action":"remove","lines":["commercenear"],"id":58},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["c"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["o"],"id":59}],[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["n"],"id":60}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["t"],"id":61}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["e"],"id":62}],[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["n"],"id":63}],[{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["t"],"id":64}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["."],"id":65}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["l"],"id":66}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["i"],"id":67}],[{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["s"],"id":68}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["t"],"id":69}],[{"start":{"row":3,"column":31},"end":{"row":3,"column":35},"action":"remove","lines":["list"],"id":70},{"start":{"row":3,"column":31},"end":{"row":3,"column":43},"action":"insert","lines":["listcommerce"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":45},"action":"remove","lines":["    console.log($scope.content.listcommerce);"],"id":71}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""],"id":72}],[{"start":{"row":0,"column":115},"end":{"row":0,"column":116},"action":"insert","lines":[" "],"id":73}],[{"start":{"row":0,"column":116},"end":{"row":0,"column":122},"action":"insert","lines":["ngCart"],"id":74}],[{"start":{"row":0,"column":122},"end":{"row":0,"column":123},"action":"insert","lines":["'"],"id":75}],[{"start":{"row":0,"column":116},"end":{"row":0,"column":117},"action":"insert","lines":["'"],"id":76}],[{"start":{"row":0,"column":124},"end":{"row":0,"column":125},"action":"insert","lines":[","],"id":77}],[{"start":{"row":0,"column":196},"end":{"row":0,"column":197},"action":"insert","lines":[","],"id":78}],[{"start":{"row":0,"column":197},"end":{"row":0,"column":198},"action":"insert","lines":[" "],"id":79}],[{"start":{"row":0,"column":198},"end":{"row":0,"column":204},"action":"insert","lines":["ngCart"],"id":80}],[{"start":{"row":2,"column":34},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":81},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":2,"column":34},"end":{"row":2,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1554069580593,"hash":"3909a60078101c7b26d5a425df751ba97e0cc011"}