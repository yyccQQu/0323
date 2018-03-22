angular.module('app.MainEngine').controller('MainEngineEditCtrl', function($scope, popupSvc, $LocalStorage, $rootScope, APP_CONFIG, MainEngineService, $state,$window) {
	
	$scope.json = APP_CONFIG.option;
	
	/*get param 获取url参数*/
	function get_params (href, paraName) {
	    var index = href.indexOf("?"),
	        search = href.substring(index + 1),
	        result = "";
	    angular.forEach(search.split("&"), function (value) {
	        var t = value.split("=");
	        if (t.length > 0) {
	            if (t[0] == paraName) {
	                result = t[1]
	            }
	        }
	    });
	    return result;
	}
	
	if(get_params(location.href,'id')){
		$scope.type = 2;//修改
	}else {
		$scope.type = 1;//新增
	}
	$scope.ID = localStorage.getItem("hostId");
	/**
	 * 菜单展开与关闭
	 */
	$(".smart-accordion-default .panel-title>a>:first-child").show();
	$(".panel-heading").on('click',function(){
		var _this = $(this);
		var dom = $(this).next();
		dom.slideToggle(function(){
			if(dom.css('display')==='none'){
				_this.find('a>i').removeClass('fa-angle-up').addClass("fa-angle-down");
			}else {
				_this.find('a>i').removeClass('fa-angle-down').addClass("fa-angle-up");
			}
		});

	})
	
	/**
	 * 添加硬盘
	 */
	var oldObj = {};
	$scope.hardDiskArr = [];
	$scope.showColumn = false;
	
	$scope.addHardDisk = function() {
		$scope.hardDiskObj = {
			'hdCapacity':"",
			'hdType':'1'
		};
		$scope.showColumn = true;
	}
	/**
	 * 确定添加硬盘
	 * @param {Object} dt
	 */
	$scope.sureaddHardDisk = function(dt) {
		$scope.hardDiskArr.push(dt);
		$scope.showColumn = false;
		console.log($scope.hardDiskArr);
		$scope.hardDiskArr.map(function(v,i){
			v.showEditAndDel = true;
			v.disabled = true;
			return v;
		})
		console.log($scope.hardDiskArr);
	}
	/**
	 * 取消添加硬盘
	 */
	$scope.cancelHardDisk = function() {
		popupSvc.smartMessageBox($rootScope.getWord("确定取消吗？"), function(){
			$scope.hardDiskObj = {
				'hdCapacity':"",
				'hdType':'1'
			};
			$scope.showColumn = false;
		});
		
	}
	/**
	 * 编辑硬盘信息
	 */
	$scope.editHardDisk = function(hd) {
		oldObj = hd;
		hd.disabled = false;//可以编辑
		hd.showEditAndDel = false;//显示确定和取消
	}
	/**
	 * 删除硬盘
	 * @param {Object} dt
	 */
	$scope.deleteHardDisk = function(index,dt) {
		popupSvc.smartMessageBox($rootScope.getWord("确定删除该项吗？"), function(){
			$scope.hardDiskArr.splice(index,1);
		});
		
	}
	/**
	 * 确定编辑信息
	 */
	$scope.sureEditHardDisk = function(hd) {
		popupSvc.smartMessageBox($rootScope.getWord("确定编辑好了吗？"), function(){
			hd.disabled = true;//不可编辑
			hd.showEditAndDel = true;//显示编辑和删除
		});
		
	}
	/**
	 * 取消编辑硬盘信息
	 */
	$scope.cancelEditHardDisk = function(hd,index) {
		console.log($scope.hardDiskArr[index]);
		console.log(oldObj);
		popupSvc.smartMessageBox($rootScope.getWord("确定取消编辑吗？"), function(){
			$scope.hardDiskArr[index] = oldObj; 
			hd.disabled = true;//不可编辑
			hd.showEditAndDel = true;//显示编辑和删除
		});
		
	}
	
	
	
	/**
	 * 保存新增/修改信息
	 * @param {Object} data
	 */
	$scope.saveInfo = function(data) {
		console.log(data);
		MainEngineService.addHostInfo(data).then(function(res){
			if (res.code) {
                popupSvc.smallBox("fail", res.msg);
            } else {
                popupSvc.smallBox("success", "添加成功");
                $window.history.go(-1);
            }
		})
	}
	
});