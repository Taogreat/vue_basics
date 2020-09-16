(function(window){
    let MyPlugin={}
    MyPlugin.install = function (Vue, options) {

        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
          console.log('myGlobalMethod')
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', function(el,binding){
            el.innerText=binding.value.toUpperCase()
        })
      
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          console.log('$myMethod')
        }
      }
      window.MyPlugin=MyPlugin
})(window)