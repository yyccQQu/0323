
angular.module("services.mainEngine", []).service("MainEngineService", MainEngineService);

MainEngineService.$inject = ['APP_CONFIG', 'httpSvc'];

	function MainEngineService(APP_CONFIG, httpSvc) {
	    return {
	    	getMainEngineList:getMainEngineList,
	    	getMainEngineArea:getMainEngineArea,
	        getMainEngineRoom:getMainEngineRoom,
	        getMainEngineCabinet:getMainEngineCabinet,
	        
 			putHostStatus:putHostStatus,
 			getHostRadomId:getHostRadomId,
 			addHostInfo:addHostInfo,
    	};
    	
    /**
     * 获取主机列表
    */
    function getMainEngineList(postData){
        return httpSvc.get(APP_CONFIG.apiUrls.MAINENGINE.list,postData).then(function(res){
            return res;
        }).catch(function(error){
            console.log('XHR Failed for getAvengers.' + error);
        });
    }
    	
    /**
     * 获取主机区域下拉框
    */
    function getMainEngineArea(){
    	return httpSvc.get(APP_CONFIG.apiUrls.MAINENGINE.area).then(function(res){
    		return res;
    	}).catch(function(error){
    		console.log('XHR Failed for getAvengers.' + error);
    	});
    }
    /**
     * 获取主机机房下拉框
    */
    function getMainEngineRoom(){
    	return httpSvc.get(APP_CONFIG.apiUrls.MAINENGINE.room).then(function(res){
    		return res;
    	}).catch(function(error){
    		console.log('XHR Failed for getAvengers.' + error);
    	});
    }
    /**
     * 获取主机机柜下拉框
    */
    function getMainEngineCabinet(){
    	return httpSvc.get(APP_CONFIG.apiUrls.MAINENGINE.cabinet).then(function(res){
    		return res;
    	}).catch(function(error){
    		console.log('XHR Failed for getAvengers.' + error);
    	});
    }
    
    /**
     * 更改主机状态
    */
    function putHostStatus(postData){
        return httpSvc.put(APP_CONFIG.apiUrls.MAINENGINE.status,postData).then(function(res){
            return res;
        }).catch(function(error){
            console.log('XHR Failed for getAvengers.' + error);
        });
    }
    /**
     * 获取添加主机时的 主机ID
     * @param {Object} postData
     */
    function getHostRadomId(postData){
    	return httpSvc.get(APP_CONFIG.apiUrls.MAINENGINE.hostId,postData).then(function(res){
            return res;
        }).catch(function(error){
            console.log('XHR Failed for getAvengers.' + error);
        });
    }
    
    function addHostInfo(postData) {
    	return httpSvc.post(APP_CONFIG.apiUrls.MAINENGINE.addHost,postData).then(function(res){
            return res;
        }).catch(function(error){
            console.log('XHR Failed for getAvengers.' + error);
        });
    }
    
    
    
    
}

 	