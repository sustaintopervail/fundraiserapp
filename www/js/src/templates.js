angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("code.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n\n<div class=\"col\" ng-show=\"error != true\">\n	<h1 class=\"headerH1\">The following code is now activated. Please give it to your supporter.</h1>\n	<input readonly class=\"code\" value=\"{{org_code.code.code}}\" />\n</div>\n\n<div class=\"col\" ng-show=\"error\">{{org_code.message}}</div>\n\n<button class=\"btn btn_red\" style=\"font-size:22px;width:95%\" ng-click=\"go(\'tabs.home\')\">GET ANOTHER CODE</button>\n\n<button class=\"btn btn_yellow\" style=\"font-size:22px;width:95%\" ng-if=\"hide_card\" ng-click=\"supporter_card()\">GO BACK TO CARD</button>\n\n<button class=\"btn btn_blue\" style=\"font-size:22px;width:95%\" ng-if=\"hide_logout\"  ng-click=\"logout();\">Logout</button>\n</ion-content> </ion-view>");
$templateCache.put("home.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n\n<div ng-hide=\"data.code\">\n	<div class=\"col\">\n		<h1 class=\"headerH1\">I received <br/>the ${{org.cost}} <br/>contribution</h1>\n	</div>\n\n	<button class=\"btn btn_red\" ng-click=\"get_code()\">Get Code</button>\n	<button class=\"btn btn_yellow\" ng-if=\"hide_card\"  ng-click=\"supporter_card()\">GO BACK TO CARD</button>\n</div>\n<div class=\"col\" ng-show=\"data.code\">\n	<h1 class=\"headerH1\">Code Generated</h1>\n	<h1 class=\"headerH1\">The following code is now activated. Please give it to your supporter.</h1>\n	<h2 style=\"background-color: #fff;padding:5px;\">{{data.code.code}}</h2>\n</div>\n\n</ion-content> </ion-view>");
$templateCache.put("login.html","<ion-view view-title=\"{{view_title}}\"> <ion-content>\n<div class=\"list list-inset formStyle\">\n	<h1>Login</h1>\n	<label class=\"item item-input\">\n		<input type=\"email\" name=\"email\" value=\"{{login.username}}\" ng-model=\"login.username\" class=\"{{login_error.email}}\"\n			placeholder=\"Email\" autocorrect=\"off\" autocomplete=\"off\" autocapitalize=\"off\" />\n	</label>\n	<label class=\"item item-input\">\n		<input type=\"password\" name=\"password\" value=\"{{login.password}}\" ng-model=\"login.password\"\n			class=\"{{login_error.password}}\" placeholder=\"Password\" />\n	</label>\n</div>\n\n<img src=\"img/btn_go.png\" ng-click=\"doLogin()\" /> </ion-content> </ion-view>");
$templateCache.put("menu.html","<ion-side-menus >\n    <ion-pane ion-side-menu-content drag-content=\"false\">\n        <ion-nav-bar class=\"bar-positive\">\n            <ion-nav-buttons side=\"left\">\n                <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\"></button>\n            </ion-nav-buttons>\n            <ion-nav-back-button class=\"button-icon ion-arrow-left-c\"> </ion-nav-back-button>\n        </ion-nav-bar>\n        <ion-nav-view name=\"menuContent\"></ion-nav-view>\n    </ion-pane>\n\n    <ion-side-menu side=\"left\">\n        <ion-content has-header=\"true\" class=\"menu\">\n            <ion-list>\n            \n             <ion-item nav-clear menu-close ng-click=\"go(\'app.home\');\">\n                    Home\n                </ion-item>\n                \n                <ion-item nav-clear menu-close ng-click=\"logout();\">\n                    Logout\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("menu_supporter.html","<ion-side-menus >\n    <ion-pane ion-side-menu-content drag-content=\"false\">\n        <ion-nav-bar class=\"bar-positive\">\n            <ion-nav-buttons side=\"left\">\n                <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\"></button>\n            </ion-nav-buttons>\n            <ion-nav-back-button class=\"button-icon ion-arrow-left-c\"> </ion-nav-back-button>\n        </ion-nav-bar>\n        <ion-nav-view name=\"menuContent\"></ion-nav-view>\n    </ion-pane>\n\n    <ion-side-menu side=\"left\">\n        <ion-content has-header=\"true\" class=\"menu\">\n            <ion-list>\n            \n             <ion-item nav-clear menu-close ng-click=\"go(\'supporter.home\');\">\n                    Home Suppoorter\n                </ion-item>\n                \n                <ion-item nav-clear menu-close ng-click=\"logout();\">\n                    Logout\n                </ion-item>\n            </ion-list>\n        </ion-content>\n    </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("merchants.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n<ul class=\"list prize_list\" style=\"margin-top: 10px !important;\">\n	<li class=\'item\'>\n		<strong style=\"color: #000 !important; font-weight: bolder !important; font-size: 16px !important;\">Restaurant.com</strong>\n		<p>Best Deal, Every Meal</p>\n		<p>\n			<ul class=\"list restaurant_list\" style=\"list-style:decimal\">\n				<li style=\"border:none !important;\">$10 voucher for $3</li>\n				<li style=\"border:none !important;;\">$25 voucher for $6</li>\n				<li style=\"border:none !important;;\">$50 voucher for $11</li>\n			</ul>\n			Browse deals at restaurants near you<br />\n			<a href=\"#\" onclick=\"window.open(\'https://www.restaurant.com\', \'_system\', \'location=no\'); return false;\">Checkout Restaurant.com Offers</a>\n			<button ng-if=\"is_vc\" class=\"button-full btn btn_yellow\" style=\"width: 250px;margin: 0 auto;\" ng-click=\"restaurantOffer()\">Get Offer</button>\n		</p>\n		<!--<p style=\"color: #FF69B4 !important;\">Offer: {{mrg.offer}}</p>\n		<p>Approved by: {{mrg.owner}}</p>-->\n	</li>\n	<li class=\'item\' ng-repeat=\"mrg in merchants\">\n		<strong style=\"color: #000 !important; font-weight: bolder !important; font-size: 16px !important;\">{{mrg.merchant_name}}</strong>\n		<p>Address: {{mrg.address}}</p>\n		<p>\n			Phone:\n			<a ng-click=\"triggerCall(\'{{mrg.business_phone}}\')\" href=\"#\">{{mrg.business_phone}}</a>\n		</p>\n		<p style=\"color: #FF69B4 !important;\">Offer: {{mrg.offer}}</p>\n		<p style=\"color: #FF69B4 !important;\" ng-if=\"is_vc\">{{mrg.code_offer}}</p>\n		<p>Approved by: {{mrg.owner}}</p>\n	</li>\n</ul>\n</ion-content> </ion-view>");
$templateCache.put("payment.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n	<h1>e-payment</h1>\n<div class=\"list list-inset formStyle\">\n	<!--<label class=\"item item-input\">\n		<input type=\"text\" name=\"name\" ng-model=\"formData.name\" placeholder=\"Full Name\" />\n	</label>-->\n	<small style=\"color: #fff;font-size:12px;display:block;text-align: left;padding-left:11px;\">CC # must have spaces. Ex. 1111 2222 3333 4444</small>\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"credit_card\" ng-model=\"formData.number\" payments-validate=\"card\" payments-format=\"card\" placeholder=\"Card Number\" ng-minlength=\"19\" ng-maxlength=\"19\" onkeypress=\"if(this.value.length > 18){event.preventDefault();}\" /> <!--onblur=\"if(this.value.length < 19){alert(\'Credit card number cannot be less than 16 digits\');}\"-->\n	</label>\n\n	<!--<label class=\"item item-input\">\n		<input type=\"text\" name=\"email\" ng-model=\"formData.email\" placeholder=\"Email\" />\n	</label>-->\n	<small style=\"color: #fff;font-size:12px;display:block;text-align: left;padding-left:11px;\">MM/YY</small>\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"expiry\" ng-model=\"formData.expiry\" payments-validate=\"expiry\" payments-format=\"expiry\"\n			placeholder=\"MM/YY\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"cvc\" ng-model=\"formData.cvv\" payments-validate=\"cvc\" payments-format=\"cvc\" placeholder=\"CVV\"  ng-minlength=\"3\" ng-maxlength=\"4\"/>\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"zipcode\" ng-model=\"formData.zipcode\" placeholder=\"Zip Code\"  ng-minlength=\"5\" ng-maxlength=\"5\"  onkeypress=\"if(this.value.length > 4){event.preventDefault();});\" />\n	</label>\n	<!--<label class=\"item item-input\">\n		<input type=\"text\" name=\"code\" ng-model=\"formData.code\" placeholder=\"Code Given to You\" />\n	</label>-->\n</div>\n\n\n<button class=\"button-full btn btn_yellow\"  style=\"margin:0 auto;width: 150px;\" ng-click=\"submitCCForm()\">Pay</button>\n\n</ion-content> </ion-view>\n");
$templateCache.put("payment_cash.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n	<h1>Cash Payment</h1>\n<div class=\"list list-inset formStyle\">\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"first_name\" ng-model=\"formData.first_name\" value=\"{{formData.first_name}}\"\n			placeholder=\"First Name\" class=\"{{form_error.first_name}}\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"last_name\" ng-model=\"formData.last_name\" value=\"{{formData.last_name}}\"\n			placeholder=\"Last Name\" class=\"{{form_error.last_name}}\" />\n	</label>\n\n\n	<label class=\"item item-input\">\n		<input type=\"email\" name=\"email\" ng-model=\"formData.email\" placeholder=\"Email\" value=\"{{formData.email}}\"\n			class=\"{{form_error.email}}\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"cell_no\" ng-model=\"formData.cell_no\" placeholder=\"Mobile Phone\" value=\"{{formData.cell_no}}\"\n			class=\"{{form_error.cell_no}}\" ng-minlength=\"10\" ng-maxlength=\"10\" onkeypress=\"if(this.value.length > 9){event.preventDefault();}\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"code\" ng-model=\"formData.code\" placeholder=\"Code Given to You\" value=\"{{formData.code}}\"\n			class=\"{{form_error.code}}\" />\n	</label>\n</div>\n\n\n<button class=\"button-full btn btn_yellow\"  style=\"margin:0 auto;width: 150px;\" ng-click=\"submit_cash_btn()\">GO</button>\n\n</ion-content> </ion-view>\n");
$templateCache.put("privacy_policy.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-nav-bar=\"false\" hide-back-button=\"false\"><ion-content>\n		<div style=\"text-align: left;color:black;padding:15px;\">\n			<p style=\"text-align: left;color:white;\">\n				<strong style=\"color:black;\">Typical Transaction:</strong> BY PROCEEDING TO THE CHECK OUT AND INPUTTING YOUR CREDIT CARD INFORMATION YOU ARE SUPPORTING THE FUNDRAISING EFFORTS OF THE ORGANIZATION BY PURCHASING THEIR VIRTUAL DISCOUNT CARD FOR A PERIOD OF 12 MONTHS.\n			</p>\n			<p style=\"text-align: left;color:white;\">\n				<strong style=\"color:black;\">PRIOR TO THE CARD EXPIRATION DATE, AND EVERY YEAR THEREAFTER, WE WILL AUTOMATICALLY RENEW YOUR SUPPORT FOR SUBSEQUENT ONE YEAR PERIODS, UNLESS YOU CHOOSE NOT TO CONTINUE YOUR SUPPORT.</strong>\n			</p>\n\n			<p style=\"text-align: left;color:white;\">\n				<strong style=\"color:black;\">Application Use.</strong> MyFundraiserApp grants you the right to use the Application only for your personal use. You must comply with all applicable laws and third party terms of agreement when using the Application (e.g. your wireless data service agreement).\n			</p>\n\n			<p style=\"text-align: left;color:white;\">\n				<strong style=\"color:black;\">Intellectual Property - Applications.</strong> MyFundraiserapp.com owns, or is the licensee to, all right, title, and interest in and to its Applications, including all rights under patent, copyright, trade secret, trademark, or unfair competition law, and any and all other proprietary rights, including all applications, renewals, extensions, and restorations thereof. You will not modify, adapt, translate, prepare derivative works from, decompile, reverse-engineer, disassemble, or otherwise attempt to derive source code from any Application and you will not remove, obscure, or alter MyFundraiserApp�s copyright notice, trademarks or other proprietary rights notices affixed to, contained within, or accessed in conjunction with or by any MyFurdraiserApp Application.\n			</p>\n\n			<p style=\"text-align: left;color:white;\">\n				<strong style=\"color:black;\">Prohibited Countries Policy and Foreign Trade Regulation - Applications.</strong> MyFundraiserApp Applications or their underlying technology may not be downloaded to or exported or re-exported: (a) into (or to a resident or national of) Burma (Myanmar), Cuba, Iraq, Iran, Libya, North Korea, Sudan, Syria, or any other country subject to United States embargo; (b) to anyone on the US Treasury Department\'s list of Specially Designated Nationals or on the US Commerce Department\'s Denied Party or Entity List; and (c) to any prohibited country, person, end-user, or entity specified by US Export Laws. When using an MyFundraiserApp Application, you are responsible for complying with trade regulations and both foreign and domestic laws (e.g., you are not located in a country that is subject to a US Government embargo, or that has been designated by the US Government as a \"terrorist supporting\" country, and you are not listed on any US Government list of prohibited or restricted parties).\n			</p>\n\n			<p style=\"text-align: left;color:white;\">\n				<strong style=\"color:black;\">Additional Terms.</strong> Additional terms and conditions that apply to you based on the mobile device the Application is installed on: <br />\n				<strong style=\"color:black;\">iOS - Apple and Android</strong>\n				<ol>\n					<li style=\"text-align: left;color:white;\">1. These Terms of Use are an agreement between you and MyFundraiserApp, and not with Apple and Google Play. Apple and Google Play are not responsible for the Application and the content thereof.<br /></li>\n					<li style=\"text-align: left;color:white;\">2. MyFundraiserApp grants you the right to use the Application only on an iOS or Android products that you own or control and as permitted by the Usage Rules set forth in the App Store and Google Play Terms of Service.<br /></li>\n					<li style=\"text-align: left;color:white;\">3. Apple and Google Play have no obligation whatsoever to furnish any maintenance and support services with respect to the Application.<br /></li>\n					<li style=\"text-align: left;color:white;\">4. Apple and Google Play are not responsible for the investigation, defense, settlement, and discharge of any third party intellectual property infringement claim.<br /></li>\n					<li style=\"text-align: left;color:white;\">5. Apple and Google Play are not responsible for addressing any claims by you or any third party relating to the Application or your possession and/or use of the Application, including but not limited to: (a) product liability claims; (b) any claim that the Application fails to conform to any applicable legal or regulatory requirement; and (c) claims arising under consumer protection or similar legislation.<br /></li>\n				</ol>\n			</p>\n		</div>\n	</ion-content>\n</ion-view>\n");
$templateCache.put("restaurant_payment.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n	<h1>Restaurant.com\'s Voucher Payment</h1>\n	<div class=\"list list-inset formStyle\">\n		<label class=\"item item-input\" style=\"height: 55px !important;line-height: 55px !important;padding-left:10px\">\n			<select ng-model=\"formData.amount\" name=\"amount\" style=\"width: 100% !important; height: 55px !important;line-height: 55px !important;border:none;\">\n				<option value=\"\" style=\"width: 100%;\">Choose a deal</option>\n				<option value=\"3\" style=\"width: 100%;\">$10 voucher for $3</option>\n				<option value=\"6\" style=\"width: 100%;\">$25 voucher for $6</option>\n				<option value=\"15\" style=\"width: 100%;\">$50 voucher for $11</option>\n			</select>\n		</label>\n		<small style=\"color: #fff;font-size:11px;display:block;text-align: left;padding-left:11px;\">CC # must have spaces. Ex. 1111 2222 3333 4444</small>\n		<label class=\"item item-input\">\n			<input type=\"text\" name=\"credit_card\" ng-model=\"formData.number\" payments-validate=\"card\" payments-format=\"card\"\n				placeholder=\"Card Number\" ng-minlength=\"19\" ng-maxlength=\"19\" onkeypress=\"if(this.value.length > 18){event.preventDefault();}\"  /> <!--onblur=\"if(this.value.length < 19){alert(\'Credit card number cannot be less than 16 digits\');}\"-->\n		</label>\n		<small style=\"color: #fff;font-size:11px;display:block;text-align: left;padding-left:11px;\">MM/YY</small>\n		<label class=\"item item-input\">\n			<input type=\"text\" name=\"expiry\" ng-model=\"formData.expiry\" payments-validate=\"expiry\" payments-format=\"expiry\"\n				placeholder=\"MM/YY\" />\n		</label>\n		<label class=\"item item-input\">\n			<input type=\"text\" name=\"cvc\" ng-model=\"formData.cvv\" payments-validate=\"cvc\" payments-format=\"cvc\" placeholder=\"CVV\"  ng-minlength=\"3\" ng-maxlength=\"4\"/>\n		</label>\n		<label class=\"item item-input\">\n			<input type=\"text\" name=\"zipcode\" ng-model=\"formData.zipcode\" placeholder=\"Zip Code\"  ng-minlength=\"5\" ng-maxlength=\"5\"  onkeypress=\"if(this.value.length > 4){event.preventDefault();});\" />\n		</label>\n	</div>\n	<button class=\"button-full btn btn_yellow\"  style=\"margin:0 auto;width: 150px;\" ng-click=\"submitCCForm()\">Pay</button>\n</ion-content> </ion-view>\n");
$templateCache.put("signup.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\"> <ion-content>\n	<h1>e-payment</h1>\n<div class=\"list list-inset formStyle\">\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"first_name\" ng-model=\"signup.first_name\" class=\"{{signup_error.first_name}}\"\n			   value=\"{{signup.first_name}}\" placeholder=\"First Name\" autocorrect=\"off\" autocomplete=\"off\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"last_name\" ng-model=\"signup.last_name\" class=\"{{signup_error.last_name}}\"\n			   value=\"{{signup.last_name}}\" placeholder=\"Last Name\" autocorrect=\"off\" autocomplete=\"off\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"email\" name=\"email\" ng-model=\"signup.email\" class=\"{{signup_error.email}}\" value=\"{{signup.email}}\"\n			   placeholder=\"Email\" autocorrect=\"off\" autocomplete=\"off\" autocapitalize=\"off\" />\n	</label>\n\n	<label class=\"item item-input\">\n		<input type=\"text\" name=\"cell_no\" ng-model=\"signup.cell_no\" class=\"{{signup_error.cell_no}}\"\n			   value=\"{{signup.cell_no}}\" placeholder=\"Cell Number\" ng-minlength=\"10\" ng-maxlength=\"10\" onkeypress=\"if(this.value.length > 9){event.preventDefault();}\"  />\n	</label>\n\n</div>\n\n<button class=\"button-full btn btn_yellow\" style=\"width: 150px;margin: 0 auto;\" ng-click=\"signupSubmit()\">Go</button>\n\n</ion-content> </ion-view>");
$templateCache.put("splash.html","");
$templateCache.put("start.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-nav-bar=\"true\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n<div>\n	<br />\n	<img src=\"img/splash_logo.png\" />\n	<br />\n	<img src=\"img/splash_text_logo.png\" />\n	<br />\n	<img src=\"img/splash_slogan.png\" />\n	<br />\n	<br />\n</div>\n\n<h1>Name of Organization</h1>\n<div class=\"list list-inset\">\n\n	<label class=\"item item-input\">\n		<input type=\"text\" ng-model=\"data.query\" ng-value=\"data.query\" placeholder=\"Search Organization\" autocorrect=\"off\"\n			autocomplete=\"off\" autocapitalize=\"off\" />\n	</label>\n\n</div>\n<br />\n<div class=\"list prize_list\">\n	<li class=\'item\' ng-if=\"data.query\" ng-repeat=\"org in filteredOrgs\" ng-click=\"org_select(org);\">{{org.organisation_name}},\n		{{org.organisation_city}} ({{org.organisation_state}})</li>\n</div>\n</ion-content>\n	<ion-footer-bar align-title=\"left\" class=\"bar-assertive\">\n		<div  style=\"text-align: center;font-size:11px;\">By using MyFundraiserApp you have agreed to the terms below and you have reviewed the <a href=\"#\" ng-click=\"privacyPolicy();\">Terms of Use</a></div>\n	</ion-footer-bar>\n</ion-view>");
$templateCache.put("supporter_card.html","<ion-view cache-view=\"false\"  view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n<div style=\"text-align: right;padding-right: 20px;color:white;\"><a  style=\"color:white;font-size:13px;\"  href=\"#\" ng-click=\"merchants()\">CLICK TO VIEW BUSINESSES</a></div>\n<h1 style=\"color:white;font-weight:bolder;font-size:24px;\">Virtual Discount Card</h1>\n<p><strong>{{discount_data.organization.organisation_name}}</strong> {{discount_data.organization.organisation_city}} <strong>{{discount_data.organization.organisation_state}}</strong></p>\n<img ng-src=\"{{discount_data.organization.organisation_logo}}\" />\n<h1 style=\"text-align: center;font-weight: bolder;color:black;\">GOOD THRU: {{discount_data.code.expiry_date}}</h1>\n<p ng-if=\"discount.code.subscription_allowed > 1\">\n   {{data.company_name}}\n </p>\n<div style=\"float: left;width:45%;\"><a style=\"color:white;\" href=\"#\" ng-click=\"login();\">Login</a></div>\n<div style=\"float: right;width:45%;color:white;\"><strong>Card#</strong>{{discount_data.code.code}}</div>\n</ion-content>\n</ion-view>");
$templateCache.put("supporter_home.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\"> <ion-content>\n\n<h1>{{org.organisation_name}}</h1>\n	<p>{{org.organisation_city}}({{org.organisation_state}})</p><br/><br/>\n	<h2 class=\"headerH2\">\n		Number of biz<br />Participating <span style=\"color:#E0AD2E !important;\">{{org.participants}}</span> <a style=\"padding:5px;border:solid 1px #fff;border-radius: 20px;color:#E0AD2E !important;\" ng-click=\"merchants_view()\">View</a>\n		<br/><br/>\n		<div>Cost: {{org.cost}}</div>\n	</h2>\n\n	<button class=\"button button-full btn_wepay form_button\" ng-click=\"register_supporter()\" style=\"text-align: center\">\n		<img style=\"padding-right:3px;padding-bottom:3px;\" src=\"http://myfundraiserapp.com/addons/shared_addons/themes/prochista/img/cc_images.png\">\n\n	</button>\n	\n	<br/><span style=\"color:#fff !important;font-size:30px;font-weight: bolder;\">OR</span><br/>\n	<p><small style=\"color:#fff;\">If  a Supporter is sharing a code with you, please proceed by choosing the Cash option</small></p>\n	<button class=\"button button-full btn_cash form_button\" ng-click=\"cash_click()\">Cash</button>\n</ion-content> </ion-view>\n");
$templateCache.put("tabs.html","<ion-nav-bar class=\"bar-positive\"> <ion-nav-back-button class=\"button-icon ion-arrow-left-c\">\n<img class=\"\" src=\"img/back.png\" />\n</ion-nav-back-button> \n<img class=\"header_img\" src=\"img/my_fund_logo_mini.png\" />\n</ion-nav-bar>\n\n<ion-nav-view name=\"public-view\"></ion-nav-view>");
$templateCache.put("welcome.html","<ion-view cache-view=\"false\" view-title=\"{{view_title}}\" hide-back-button=\"{{hide_back_btn}}\">\n    <ion-content>\n        <h2 class=\"welcome_text\">Welcome to</h2>\n        <h1 class=\"org_name\">{{org.organisation_name}}</h1>\n        <p>{{org.organisation_city}} ({{org.organisation_state}})</p>\n        <h3 class=\"iam\">I AM</h3>\n        <button class=\"btn btn_yellow\" ng-click=\"supporter_home_view()\" style=\"width:95%;font-size:18px;\">A Supporter</button>\n        <button class=\"btn btn_blue\" ng-click=\"member_click()\" style=\"width:95%;font-size:18px;\">A Member of the Organization</button>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("modals/modal.html","<ion-modal-view class=\"newModals\"> <ion-content>\n<h3>{{modaldata.title}}</h3>\n<h4>{{modaldata.body}}</h4>\n</ion-content> </ion-modal-view>");
$templateCache.put("modals/modal_error.html","<ion-modal-view class=\"newModals\">\n    <ion-content>\n        <h3>{{modaldata.title}}\n	</h3>\n        <h4>{{modaldata.body}}</h4>\n        <p ng-show=\"modaldata.description\">{{modaldata.description}}</p>\n    </ion-content>\n</ion-modal-view>");}]);