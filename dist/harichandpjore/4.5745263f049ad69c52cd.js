(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{G6fN:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),a=u("gIcY"),i=u("AJ6+"),r=function(){function l(l,n,u){this.router=l,this.fb=n,this.adminService=u,this.errorMessage=null,this.token=null,this.userCreatd=null,this.userId=null,this.role=null}return l.prototype.ngOnInit=function(){if(this.initilizeForm(),this.token=localStorage.getItem("token"),null!=this.token){var l=JSON.parse(window.atob(this.token.split(".")[1]));this.userId=l.userId,this.role=l.role}},l.prototype.initilizeForm=function(){this.loginForm=this.fb.group({Email:[null,a.o.required],Password:[null,a.o.required]}),this.signUpForm=this.fb.group({FullName:[null,a.o.required],Email:[null,a.o.required],Password:[null,a.o.required],ConfirmPassword:[null,a.o.required]})},l.prototype.submitForm=function(l,n){var u=this;"login"==n?this.adminService.post("Account/Login",l).subscribe(function(l){localStorage.setItem("token",l.value),u.token=localStorage.getItem("token"),u.errorMessage=null,u.initilizeForm(),window.location.reload()},function(l){u.errorMessage=l.error}):this.adminService.post("Account/Register",l).subscribe(function(l){u.userCreatd="Account Registered! Please Login!",u.errorMessage=null,u.initilizeForm()},function(l){u.errorMessage=l.error})},l.prototype.initilizeMessage=function(){this.errorMessage=null,this.userCreatd=null,this.initilizeForm()},l.prototype.logOut=function(){this.token=null,localStorage.removeItem("token"),window.location.reload()},l.prototype.toComponent=function(l){"dashboard"==l&&this.router.navigate(["/admin/dashboard"]),"user"==l&&this.router.navigate(["/admin/user"]),"farmer"==l&&this.router.navigate(["/admin/farmer"]),"machine"==l&&this.router.navigate(["/admin/machine"]),"equip"==l&&this.router.navigate(["/admin/equipment"]),"seed"==l&&this.router.navigate(["/admin/seedbeed"]),"sow"==l&&this.router.navigate(["/admin/sowing"]),"ferti"==l&&this.router.navigate(["/admin/fertilizer"]),"inter"==l&&this.router.navigate(["/admin/interculture"]),"plant"==l&&this.router.navigate(["/admin/plantprotection"]),"irri"==l&&this.router.navigate(["/admin/irrigation"]),"harvest"==l&&this.router.navigate(["/admin/harvest"]),"product"==l&&this.router.navigate(["/admin/production"])},l}(),s=u("ZYCi"),c=t.nb({encapsulation:0,styles:[[".bg-light[_ngcontent-%COMP%]{background-color:#fff!important}.bg-light[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding-left:2px;padding-right:2px;color:#dc3545}.container-fluid[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:#dc3545;margin-left:70px;font-size:25px;font-weight:700}.bg-light[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:70px;margin-top:10px;padding-top:0;padding-bottom:0}.link2[_ngcontent-%COMP%]{margin-left:25px!important}.bg-light[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{font-size:19px;font-weight:700;border-bottom:3px solid #e91e63;transition:.2s}"]],data:{}});function d(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,13,"nav",[["class","navbar navbar-expand-lg navbar-light bg-light"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,12,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"a",[["class","navbar-brand logo"],["href","#"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Harichand Sevasangh"])),(l()(),t.pb(4,0,null,null,1,"button",[["aria-controls","navbarSupportedContent"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler"],["data-bs-target","#navbarSupportedContent"],["data-bs-toggle","collapse"],["type","button"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,7,"div",[["class","collapse navbar-collapse"],["id","navbarSupportedContent"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,6,"ul",[["class","navbar-nav me-auto mb-2 mb-lg-0"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,1,"a",[["aria-current","page"],["class","nav-link "],["href","#"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Home"])),(l()(),t.pb(11,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"a",[["class","nav-link link2"],["href","#"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Link"]))],null,null)}var b=function(){function l(){}return l.prototype.exportAsExcelFile=function(l,n){},l.prototype.saveAsExcelFile=function(l,n){new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"})},l}(),p=function(){function l(l,n){this.excelService=l,this.adminService=n}return l.prototype.ngOnInit=function(){},l.prototype.downloadSurway=function(){var l=this;this.adminService.getAll("Account/DownloadSurway",null).subscribe(function(n){l.excelService.exportAsExcelFile(n,"surway_data")})},l}(),g=t.nb({encapsulation:0,styles:[[".image-container[_ngcontent-%COMP%]{position:relative}.image-container[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgb(0 0 0 / 34%);border-radius:5px}.dv-mainapp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.dv-msg[_ngcontent-%COMP%]{border-radius:5px;background:#fff;height:auto;color:#e91e63;text-align:center}.dv-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:30px;padding-left:150px;padding-right:150px}.dv-hari1[_ngcontent-%COMP%]{padding-top:30px;padding-bottom:30px;height:auto;text-align:center}.dv-hari2[_ngcontent-%COMP%]{border-radius:5px;background:rgb(0 0 0 / 47%);height:auto;color:#fff;padding:30px 15px 30px 30px}.dv-guru1[_ngcontent-%COMP%]{border-radius:5px;padding-bottom:30px;padding-top:30px;padding-left:60px;background:rgb(0 0 0 / 47%);height:auto;color:#fff}.dv-guru2[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px;height:auto;text-align:center}.dv-asrm1[_ngcontent-%COMP%]{padding-top:30px;padding-bottom:30px;height:auto;text-align:center}.dv-asrm2[_ngcontent-%COMP%]{border-radius:5px;background:rgb(0 0 0 / 47%);height:auto;color:#fff;padding:30px 15px 30px 30px}.dv-mnge1[_ngcontent-%COMP%]{border-radius:5px;padding-bottom:30px;padding-top:30px;padding-left:60px;background:rgb(0 0 0 / 47%);height:auto;color:#fff}.dv-mnge2[_ngcontent-%COMP%]{padding-bottom:30px;padding-top:30px;height:auto;text-align:center}.after[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;padding-left:60px;padding-top:350px;font-size:30px;font-weight:700;font-family:revert}.addrss[_ngcontent-%COMP%]{border-radius:5px;background:#4b5e68d6;height:auto;color:#fff;padding:30px 15px 30px 30px}.notice[_ngcontent-%COMP%]{background-color:#4b5e68d6;border-radius:5px;height:auto;color:#fff;padding:30px 15px 30px 30px}.notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.cntct[_ngcontent-%COMP%]{width:350px}.cntct[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{width:100px;border-bottom:1px solid #fff;padding:5px;margin-bottom:15px}.donat[_ngcontent-%COMP%]{margin-top:40px}.donat[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{width:350px;border-bottom:1px solid #fff;padding:5px;margin-bottom:15px}.notice[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{width:140px;border-bottom:1px solid #fff;padding:5px;margin-bottom:15px}.notice[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;background-image:url(back.4e5a0ec7653aaf6ba749.jpg);margin-left:50px;margin-right:50px;height:300px;color:#000;border:2px solid #433f3f;border-radius:10px}"]],data:{}});function m(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-header",[],null,null,null,d,c)),t.ob(1,114688,null,0,r,[s.k,a.d,i.a],null,null),(l()(),t.pb(2,0,null,null,106,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,105,"div",[["class","row g-0 dv-row-dshbrd"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,5,"div",[["class","col-md-12 col-sm-12 dv-mainapp  "]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,4,"div",[["class","image-container"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,0,"img",[["src","../../../assets/img/hari2.jpg"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,2,"div",[["class","after"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Jay Harichand Jay Guruchand"])),(l()(),t.pb(10,0,null,null,2,"div",[["class","col-md-12 col-sm-12 dv-msg"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[' " Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to " - Sri Sri Harichand Thakur'])),(l()(),t.pb(13,0,null,null,5,"div",[["class","row g-0"]],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,1,"div",[["class","col-md-6 col-sm-12 dv-hari1"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,0,"img",[["alt","..."],["class","img-fluid"],["src","../../../assets/img/harisingle.ico"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,2,"div",[["class","col-md-6 col-sm-12 dv-hari2 "]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[' " Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to "'])),(l()(),t.pb(19,0,null,null,5,"div",[["class","row g-0"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,2,"div",[["class","col-md-6 col-sm-12 dv-guru1"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[' " Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to "'])),(l()(),t.pb(23,0,null,null,1,"div",[["class","col-md-6 col-sm-12 dv-guru2 "]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,0,"img",[["alt","..."],["class","img-fluid"],["src","../../../assets/img/guru1.jpg"]],null,null,null,null,null)),(l()(),t.pb(25,0,null,null,2,"div",[["class","col-md-12 col-sm-12 dv-msg"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" About Harichand Sevasangh Pakhanjore"])),(l()(),t.pb(28,0,null,null,16,"div",[["class","row g-0"]],null,null,null,null,null)),(l()(),t.pb(29,0,null,null,12,"div",[["class","col-md-6 col-sm-12 dv-asrm1"]],null,null,null,null,null)),(l()(),t.pb(30,0,null,null,11,"div",[["class","carousel slide"],["data-bs-ride","carousel"],["id","carouselExampleControls"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,2,"div",[["class","carousel-inner"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,1,"div",[["class","carousel-item active"]],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,0,"img",[["alt","..."],["class","d-block w-100"],["src","../../../assets/img/Capture1.PNG"]],null,null,null,null,null)),(l()(),t.pb(34,0,null,null,3,"button",[["class","carousel-control-prev"],["data-bs-slide","prev"],["data-bs-target","#carouselExampleControls"],["type","button"]],null,null,null,null,null)),(l()(),t.pb(35,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-prev-icon"]],null,null,null,null,null)),(l()(),t.pb(36,0,null,null,1,"span",[["class","visually-hidden"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Previous"])),(l()(),t.pb(38,0,null,null,3,"button",[["class","carousel-control-next"],["data-bs-slide","next"],["data-bs-target","#carouselExampleControls"],["type","button"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-next-icon"]],null,null,null,null,null)),(l()(),t.pb(40,0,null,null,1,"span",[["class","visually-hidden"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Next"])),(l()(),t.pb(42,0,null,null,2,"div",[["class","col-md-6 col-sm-12 dv-asrm2 "]],null,null,null,null,null)),(l()(),t.pb(43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[' " Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to "'])),(l()(),t.pb(45,0,null,null,16,"div",[["class","row g-0"]],null,null,null,null,null)),(l()(),t.pb(46,0,null,null,2,"div",[["class","col-md-6 col-sm-12 dv-mnge1"]],null,null,null,null,null)),(l()(),t.pb(47,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[' " Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to "'])),(l()(),t.pb(49,0,null,null,12,"div",[["class","col-md-6 col-sm-12 dv-mnge2 "]],null,null,null,null,null)),(l()(),t.pb(50,0,null,null,11,"div",[["class","carousel slide"],["data-bs-ride","carousel"],["id","carouselExampleControls2"]],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,2,"div",[["class","carousel-inner"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,1,"div",[["class","carousel-item active"]],null,null,null,null,null)),(l()(),t.pb(53,0,null,null,0,"img",[["alt","..."],["class","d-block w-100"],["src","../../../assets/img/Capture1.PNG"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,3,"button",[["class","carousel-control-prev"],["data-bs-slide","prev"],["data-bs-target","#carouselExampleControls2"],["type","button"]],null,null,null,null,null)),(l()(),t.pb(55,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-prev-icon"]],null,null,null,null,null)),(l()(),t.pb(56,0,null,null,1,"span",[["class","visually-hidden"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Previous"])),(l()(),t.pb(58,0,null,null,3,"button",[["class","carousel-control-next"],["data-bs-slide","next"],["data-bs-target","#carouselExampleControls2"],["type","button"]],null,null,null,null,null)),(l()(),t.pb(59,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-next-icon"]],null,null,null,null,null)),(l()(),t.pb(60,0,null,null,1,"span",[["class","visually-hidden"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Next"])),(l()(),t.pb(62,0,null,null,2,"div",[["class","col-md-12 col-sm-12 dv-msg"]],null,null,null,null,null)),(l()(),t.pb(63,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" About Harichand Sevasangh Pakhanjore"])),(l()(),t.pb(65,0,null,null,43,"div",[["class","row g-0"]],null,null,null,null,null)),(l()(),t.pb(66,0,null,null,32,"div",[["class","col-md-6 col-sm-12 addrss"]],null,null,null,null,null)),(l()(),t.pb(67,0,null,null,10,"div",[["class","row cntct"]],null,null,null,null,null)),(l()(),t.pb(68,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Reach Us "])),(l()(),t.pb(70,0,null,null,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Address : "])),(l()(),t.pb(72,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Harichand Sevasangh, Pakhanjore, Kanker (C.G.), 494776 "])),(l()(),t.pb(74,0,null,null,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Contact : "])),(l()(),t.pb(76,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" harichandpjore@gmail.com "])),(l()(),t.pb(78,0,null,null,20,"div",[["class","row donat"]],null,null,null,null,null)),(l()(),t.pb(79,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Donate to help growing the Aasram "])),(l()(),t.pb(81,0,null,null,8,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.pb(82,0,null,null,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Account No : "])),(l()(),t.pb(84,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" 657812375 "])),(l()(),t.pb(86,0,null,null,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["IFSC : "])),(l()(),t.pb(88,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" SBIN0007321 "])),(l()(),t.pb(90,0,null,null,8,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),t.pb(91,0,null,null,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Bank : "])),(l()(),t.pb(93,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" SBI"])),(l()(),t.pb(95,0,null,null,3,"h6",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Account Holder : "])),(l()(),t.pb(97,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Harichand Sevasangh"])),(l()(),t.pb(99,0,null,null,9,"div",[["class","col-md-6 col-sm-12 notice "]],null,null,null,null,null)),(l()(),t.pb(100,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Notice Board "])),(l()(),t.pb(102,0,null,null,6,"ul",[["class",""]],null,null,null,null,null)),(l()(),t.pb(103,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(104,0,null,null,2,"li",[["class",""]],null,null,null,null,null)),(l()(),t.pb(105,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-arrow-circle-right"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Barooni 2022 "])),(l()(),t.pb(107,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.pb(108,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-arrow-circle-right"]],null,null,null,null,null))],function(l,n){l(n,1,0)},null)}function h(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-dashboard",[],null,null,null,m,g)),t.ob(1,114688,null,0,p,[b,i.a],null,null)],function(l,n){l(n,1,0)},null)}var v=t.lb("app-dashboard",p,h,{},{},[]),f=u("Ip0R"),x=function(){function l(l,n,u){this.router=l,this.adminService=n,this.fb=u,this.token=null,this.userId=null,this.role=null,this.TableData=[],this.take=1,this.moreExist=!1,this.cropList=[],this.initilizeForm()}return l.prototype.initilizeForm=function(){this.farmerForm=this.fb.group({Id:[0],CropId:["",a.o.required],CreatedBy:[""],FullName:[null,a.o.required],LandHolding:[null,a.o.required],Address:[null,a.o.required],Phone:[null]})},l.prototype.ngOnInit=function(){var l=this;if(this.token=localStorage.getItem("token"),null!=this.token){var n=JSON.parse(window.atob(this.token.split(".")[1]));this.userId=n.userId,this.role=n.role}this.adminService.getAll("Farmer?take="+this.take).subscribe(function(n){l.TableData=n.list,l.moreExist=n.exist},function(l){console.log("error occured")}),this.adminService.getAll("Admin/GetCrop").subscribe(function(n){l.cropList=n})},l.prototype.editData=function(l){var n=this.TableData.find(function(n){return n.id==l});this.farmerForm.setValue({Id:n.id,FullName:n.fullName,Address:n.address,Phone:n.phone,CreatedBy:n.createdBy,LandHolding:n.landHolding})},l.prototype._NumberOnly=function(l){var n=String.fromCharCode(l.charCode);/[0-9\.]/.test(n)||l.preventDefault()},l.prototype._CharacterOnly=function(l){var n=String.fromCharCode(l.charCode);/^[a-zA-Z]+$/.test(n)||l.preventDefault()},l.prototype.submitForm=function(l){var n=this;l.CreatedBy=this.userId,l.CropId=parseInt(l.CropId),this.adminService.post("Farmer",l).subscribe(function(l){n.initilizeForm(),n.TableData=l.list,n.moreExist=l.exist},function(l){console.log("error occured")})},l.prototype.removeItem=function(l){var n=this;this.adminService.delete("Farmer",l).subscribe(function(l){n.TableData=l.list,n.moreExist=l.exist},function(l){console.log("error occured")})},l.prototype.toDetail=function(l){this.router.navigate(["admin/farmer-detail"],{queryParams:{id:l}})},l.prototype.viewMore=function(l){var n=this;this.take="front"==l?this.take+1:this.take-1,this.adminService.getAll("Farmer?take="+this.take).subscribe(function(l){n.TableData=l.list,n.moreExist=l.exist},function(l){console.log("error occured")})},l}(),y=t.nb({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(1,147456,null,0,a.l,[t.k,t.D,[2,a.n]],{value:[0,"value"]},null),t.ob(2,147456,null,0,a.u,[t.k,t.D,[8,null]],{value:[0,"value"]},null),(l()(),t.Bb(3,null,[" "," "]))],function(l,n){l(n,1,0,t.rb(1,"",n.context.$implicit.id,"")),l(n,2,0,t.rb(1,"",n.context.$implicit.id,""))},function(l,n){l(n,3,0,n.context.$implicit.cropName)})}function k(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"button",[["class","btn btn-primary submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Bb(-1,null,["Submit"]))],null,function(l,n){l(n,0,0,!n.component.farmerForm.valid)})}function P(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,77,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t.yb(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.yb(l,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.submitForm(o.farmerForm.value)&&e),e},null,null)),t.ob(1,16384,null,0,a.r,[],null,null),t.ob(2,540672,null,0,a.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.zb(2048,null,a.b,null,[a.f]),t.ob(4,16384,null,0,a.k,[[4,a.b]],null,null),(l()(),t.pb(5,0,null,null,72,"div",[["class","adddata"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,68,"div",[["class",""]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,43,"div",[["class","row dv-frm-row"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,17,"div",[["class","col-md-4 col-sm-12 col-12"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,16,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Select Crop "])),(l()(),t.pb(12,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["*"])),(l()(),t.pb(14,0,null,null,11,"select",[["class","form-control"],["formControlName","CropId"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.yb(l,15).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,15).onTouched()&&e),e},null,null)),t.ob(15,16384,null,0,a.n,[t.D,t.k],null,null),t.zb(1024,null,a.h,function(l){return[l]},[a.n]),t.ob(17,671744,null,0,a.e,[[3,a.b],[8,null],[8,null],[6,a.h],[2,a.t]],{name:[0,"name"]},null),t.zb(2048,null,a.i,null,[a.e]),t.ob(19,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),t.pb(20,0,null,null,3,"option",[["value",""]],null,null,null,null,null)),t.ob(21,147456,null,0,a.l,[t.k,t.D,[2,a.n]],{value:[0,"value"]},null),t.ob(22,147456,null,0,a.u,[t.k,t.D,[8,null]],{value:[0,"value"]},null),(l()(),t.Bb(-1,null,["-- Select a Crop --"])),(l()(),t.gb(16777216,null,null,1,null,C)),t.ob(25,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(26,0,null,null,11,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.pb(27,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(28,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Name of Farmer "])),(l()(),t.pb(30,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["*"])),(l()(),t.pb(32,0,null,null,5,"input",[["class","form-control"],["formControlName","FullName"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.yb(l,33)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,33).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.yb(l,33)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.yb(l,33)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(33,16384,null,0,a.c,[t.D,t.k,[2,a.a]],null,null),t.zb(1024,null,a.h,function(l){return[l]},[a.c]),t.ob(35,671744,null,0,a.e,[[3,a.b],[8,null],[8,null],[6,a.h],[2,a.t]],{name:[0,"name"]},null),t.zb(2048,null,a.i,null,[a.e]),t.ob(37,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),t.pb(38,0,null,null,12,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(40,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Land Holds (in Hectare) "])),(l()(),t.pb(42,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["*"])),(l()(),t.pb(44,0,null,null,6,"input",[["class","form-control"],["formControlName","LandHolding"],["min","0"],["placeholder","Land Holding (Ha)"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keypress"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.yb(l,45)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,45).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.yb(l,45)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.yb(l,45)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.yb(l,46).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.yb(l,46).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,46).onTouched()&&e),"keypress"===n&&(e=!1!==o._NumberOnly(u)&&e),e},null,null)),t.ob(45,16384,null,0,a.c,[t.D,t.k,[2,a.a]],null,null),t.ob(46,16384,null,0,a.q,[t.D,t.k],null,null),t.zb(1024,null,a.h,function(l,n){return[l,n]},[a.c,a.q]),t.ob(48,671744,null,0,a.e,[[3,a.b],[8,null],[8,null],[6,a.h],[2,a.t]],{name:[0,"name"]},null),t.zb(2048,null,a.i,null,[a.e]),t.ob(50,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),t.pb(51,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,11,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.pb(53,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,3,"label",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Address "])),(l()(),t.pb(56,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["*"])),(l()(),t.pb(58,0,null,null,5,"input",[["class","form-control"],["formControlName","Address"],["placeholder","Address"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.yb(l,59)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,59).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.yb(l,59)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.yb(l,59)._compositionEnd(u.target.value)&&e),e},null,null)),t.ob(59,16384,null,0,a.c,[t.D,t.k,[2,a.a]],null,null),t.zb(1024,null,a.h,function(l){return[l]},[a.c]),t.ob(61,671744,null,0,a.e,[[3,a.b],[8,null],[8,null],[6,a.h],[2,a.t]],{name:[0,"name"]},null),t.zb(2048,null,a.i,null,[a.e]),t.ob(63,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),t.pb(64,0,null,null,9,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.pb(65,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(66,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Phone "])),(l()(),t.pb(68,0,null,null,5,"input",[["class","form-control"],["formControlName","Phone"],["placeholder","Phone"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keypress"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.yb(l,69)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.yb(l,69).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.yb(l,69)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.yb(l,69)._compositionEnd(u.target.value)&&e),"keypress"===n&&(e=!1!==o._NumberOnly(u)&&e),e},null,null)),t.ob(69,16384,null,0,a.c,[t.D,t.k,[2,a.a]],null,null),t.zb(1024,null,a.h,function(l){return[l]},[a.c]),t.ob(71,671744,null,0,a.e,[[3,a.b],[8,null],[8,null],[6,a.h],[2,a.t]],{name:[0,"name"]},null),t.zb(2048,null,a.i,null,[a.e]),t.ob(73,16384,null,0,a.j,[[4,a.i]],null,null),(l()(),t.pb(74,0,null,null,0,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.pb(75,0,null,null,2,"div",[["class","submitbtn"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,k)),t.ob(77,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.farmerForm),l(n,17,0,"CropId"),l(n,21,0,""),l(n,22,0,""),l(n,25,0,u.cropList),l(n,35,0,"FullName"),l(n,48,0,"LandHolding"),l(n,61,0,"Address"),l(n,71,0,"Phone"),l(n,77,0,null!=u.token)},function(l,n){l(n,0,0,t.yb(n,4).ngClassUntouched,t.yb(n,4).ngClassTouched,t.yb(n,4).ngClassPristine,t.yb(n,4).ngClassDirty,t.yb(n,4).ngClassValid,t.yb(n,4).ngClassInvalid,t.yb(n,4).ngClassPending),l(n,14,0,t.yb(n,19).ngClassUntouched,t.yb(n,19).ngClassTouched,t.yb(n,19).ngClassPristine,t.yb(n,19).ngClassDirty,t.yb(n,19).ngClassValid,t.yb(n,19).ngClassInvalid,t.yb(n,19).ngClassPending),l(n,32,0,t.yb(n,37).ngClassUntouched,t.yb(n,37).ngClassTouched,t.yb(n,37).ngClassPristine,t.yb(n,37).ngClassDirty,t.yb(n,37).ngClassValid,t.yb(n,37).ngClassInvalid,t.yb(n,37).ngClassPending),l(n,44,0,t.yb(n,50).ngClassUntouched,t.yb(n,50).ngClassTouched,t.yb(n,50).ngClassPristine,t.yb(n,50).ngClassDirty,t.yb(n,50).ngClassValid,t.yb(n,50).ngClassInvalid,t.yb(n,50).ngClassPending),l(n,58,0,t.yb(n,63).ngClassUntouched,t.yb(n,63).ngClassTouched,t.yb(n,63).ngClassPristine,t.yb(n,63).ngClassDirty,t.yb(n,63).ngClassValid,t.yb(n,63).ngClassInvalid,t.yb(n,63).ngClassPending),l(n,68,0,t.yb(n,73).ngClassUntouched,t.yb(n,73).ngClassTouched,t.yb(n,73).ngClassPristine,t.yb(n,73).ngClassDirty,t.yb(n,73).ngClassValid,t.yb(n,73).ngClassInvalid,t.yb(n,73).ngClassPending)})}function B(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"i",[["class","fa fa-edit"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editData(l.parent.context.$implicit.id)&&t),t},null,null))],null,null)}function w(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,0,"i",[["class","fa fa-trash"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.removeItem(l.parent.context.$implicit.id)&&t),t},null,null))],null,null)}function O(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,18,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(2,null,["",""])),(l()(),t.pb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(8,null,["",""])),(l()(),t.pb(9,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Bb(10,null,["",""])),(l()(),t.pb(11,0,null,null,7,"td",[],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,0,"i",[["class","fa fa-eye"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toDetail(l.context.$implicit.id)&&t),t},null,null)),(l()(),t.Bb(-1,null,["\xa0\xa0 "])),(l()(),t.gb(16777216,null,null,1,null,B)),t.ob(15,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(-1,null,["\xa0\xa0 "])),(l()(),t.gb(16777216,null,null,1,null,w)),t.ob(18,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,15,0,null!=u.token),l(n,18,0,null!=u.token)},function(l,n){l(n,2,0,n.context.$implicit.fullName),l(n,4,0,n.context.$implicit.cropName),l(n,6,0,n.context.$implicit.landHolding),l(n,8,0,n.context.$implicit.createdBy),l(n,10,0,n.context.$implicit.createdDate)})}function _(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-header",[],null,null,null,d,c)),t.ob(1,114688,null,0,r,[s.k,a.d,i.a],null,null),(l()(),t.pb(2,0,null,null,32,"div",[["class",""]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,31,"div",[["class","row dv-row-dshbrd"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"div",[["class","col-md-2  dv-sidebr"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,29,"div",[["class","col-md-10  dv-mainapp"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,28,"div",[["class",""]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,27,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"div",[["class","col-md-12 col-12 col-sm-12  dv-headr"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Farmer "])),(l()(),t.pb(10,0,null,null,2,"div",[["class","col-md-12 col-12 col-sm-12 dv-frm"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,P)),t.ob(12,16384,null,0,f.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(13,0,null,null,21,"div",[["class","table-responsive dv-tble"]],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,17,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,12,"tr",[],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Farmer"])),(l()(),t.pb(19,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Crop Made"])),(l()(),t.pb(21,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Land Holding"])),(l()(),t.pb(23,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Added By "])),(l()(),t.pb(25,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Added Date"])),(l()(),t.pb(27,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Action"])),(l()(),t.pb(29,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,O)),t.ob(31,278528,null,0,f.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(32,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(33,0,null,null,0,"button",[["aria-hidden","true"],["class","btn btn-primary fa fa-arrow-circle-right"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewMore("front")&&t),t},null,null)),(l()(),t.pb(34,0,null,null,0,"button",[["aria-hidden","true"],["class","btn btn-primary fa fa-arrow-circle-left"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.viewMore("back")&&t),t},null,null))],function(l,n){var u=n.component;l(n,1,0),l(n,12,0,null!=u.token),l(n,31,0,u.TableData)},function(l,n){var u=n.component;l(n,33,0,!u.moreExist),l(n,34,0,1==u.take)})}function M(l){return t.Cb(0,[(l()(),t.pb(0,0,null,null,1,"app-farmer",[],null,null,null,_,y)),t.ob(1,114688,null,0,x,[s.k,i.a,a.d],null,null)],function(l,n){l(n,1,0)},null)}var S=t.lb("app-farmer",x,M,{},{},[]),I=u("t/Na"),F=function(){return function(){}}(),D=u("PCNd");u.d(n,"AdminModuleNgFactory",function(){return N});var N=t.mb(e,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[o.a,v,S]],[3,t.j],t.x]),t.xb(4608,f.k,f.j,[t.u,[2,f.q]]),t.xb(4608,a.s,a.s,[]),t.xb(4608,a.d,a.d,[]),t.xb(4608,I.l,I.l,[]),t.xb(6144,I.j,null,[I.l]),t.xb(4608,I.h,I.h,[I.j]),t.xb(6144,I.b,null,[I.h]),t.xb(4608,I.f,I.k,[I.b,t.q]),t.xb(4608,I.c,I.c,[I.f]),t.xb(4608,i.a,i.a,[I.c]),t.xb(4608,I.i,I.o,[f.c,t.B,I.m]),t.xb(4608,I.p,I.p,[I.i,I.n]),t.xb(5120,I.a,function(l){return[l]},[I.p]),t.xb(4608,b,b,[]),t.xb(1073742336,f.b,f.b,[]),t.xb(1073742336,s.l,s.l,[[2,s.r],[2,s.k]]),t.xb(1073742336,F,F,[]),t.xb(1073742336,a.p,a.p,[]),t.xb(1073742336,a.g,a.g,[]),t.xb(1073742336,a.m,a.m,[]),t.xb(1073742336,D.a,D.a,[]),t.xb(1073742336,I.e,I.e,[]),t.xb(1073742336,I.d,I.d,[]),t.xb(1073742336,e,e,[]),t.xb(1024,s.i,function(){return[[{path:"dashboard",component:p},{path:"farmer",component:x}]]},[]),t.xb(256,I.m,"XSRF-TOKEN",[]),t.xb(256,I.n,"X-XSRF-TOKEN",[])])})}}]);