/**
 * 职位的数据
 * **/
import $http from "@/util/axios-ajax"
import url from "@/config/url"
const companyModel={
  //token test
  "getCompany":function(filter,cb)
  {
    var callback=cb,
        data=[
          {
            title:"web前端",
            experience:"1-3年",
            place:"广州天河",
            prize:"1.1k-2k",
            company:"预备科技",
            id:1,
            record:"大专",
            wanted:5,
            videoimg:"https://hbimg.huabanimg.com/e220cc1c1ddb915ac99ddcbe8b855e997b9300ced2fe-Tqn8oH_fw658",
            logo:"https://hbimg.huabanimg.com/e6a314b8e568662af5d2add8cc2e0bf063175a361e167e-GZTsCd_fw658",
            time:"2010-10-10"
          },
          {
            title:"PHP后台工程师",
            experience:"1-3年",
            place:"广州天河",
            prize:"2k-3k",
            company:"预备科技",
            id:2,
            record:"大专",
            wanted:5,
            videoimg:"https://hbimg.huabanimg.com/e27767f8cc1d8b079c1eb611d99cb19594007320c280-9gsE1f_fw658",
            logo:"https://hbimg.huabanimg.com/e6a314b8e568662af5d2add8cc2e0bf063175a361e167e-GZTsCd_fw658",

            time:"2010-10-10"
          },
          {
            title:"java权杖",
            experience:"1-3年",
            place:"广州天河",
            prize:"1.1k-2k",
            company:"预备科技",
            id:3,
            record:"大专",
            wanted:5,
            videoimg:"",
            logo:"https://hbimg.huabanimg.com/e6a314b8e568662af5d2add8cc2e0bf063175a361e167e-GZTsCd_fw658",
            time:"2010-10-10"
          },
          {
            title:"web前端",
            experience:"1-3年",
            place:"广州天河",
            prize:"1.1k-2k",
            company:"预备科技",
            id:4,
            record:"大专",
            wanted:5,
            videoimg:"",
            logo:"https://hbimg.huabanimg.com/e6a314b8e568662af5d2add8cc2e0bf063175a361e167e-GZTsCd_fw658",
            time:"2010-10-10"
          },
          {
            title:"web前端",
            experience:"1-3年",
            place:"广州天河",
            prize:"1.1k-2k",
            company:"预备科技",
            id:5,
            record:"大专",
            wanted:5,
            videoimg:"https://hbimg.huabanimg.com/e220cc1c1ddb915ac99ddcbe8b855e997b9300ced2fe-Tqn8oH_fw658",
            logo:"https://hbimg.huabanimg.com/e6a314b8e568662af5d2add8cc2e0bf063175a361e167e-GZTsCd_fw658",
            time:"2010-10-10"
          }
        ]
    if(filter.p===5)
    {
      data=[];
    }
    console.log(filter)
    setTimeout(function()
    {
      callback(data)
    },1000)
    /*$http.get(url.token_test,{},function(ret,err)
    {
      callback(ret,err)
    })*/
  }
}
export default companyModel
