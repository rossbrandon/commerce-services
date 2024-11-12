"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[6579],{56813:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return u},default:function(){return x}});var n=a(58168),r=a(80045),l=(a(88763),a(15680)),m=a(83407);const d=["components"],u={},i={_frontmatter:u},p=m.A;function x(t){let{components:e}=t,a=(0,r.A)(t,d);return(0,l.mdx)(p,(0,n.A)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"adobe-commerce-event-collector"},"Adobe Commerce Event Collector"),(0,l.mdx)("p",null,"This package listens for and handles events sent from the ",(0,l.mdx)("a",{parentName:"p",href:"../sdk/index.md"},"Adobe Commerce Events SDK"),". It runs as a side effect and is meant to be a convenience for users who want to send events to Adobe Commerce for processing."),(0,l.mdx)("h2",{id:"installation"},"Installation"),(0,l.mdx)("p",null,"The collector can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on ",(0,l.mdx)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/@adobe/magento-storefront-events-sdk@1/dist/index.js"},"cdn"),", and the bundled version is hosted on ",(0,l.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@adobe/magento-storefront-event-collector"},"npm"),"."),(0,l.mdx)("p",null,"To load the SDK as a script, use the following snippet."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/@adobe/magento-storefront-events-sdk@1/dist/index.js"><\/script>\n')),(0,l.mdx)("p",null,"To install the script as a dependency, run this command."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install @adobe/magento-storefront-event-collector\n")),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"[!NOTE]"),(0,l.mdx)("p",{parentName:"blockquote"},"To avoid any issues, make sure you keep the script or bundled version up to date with the latest release.")),(0,l.mdx)("h2",{id:"quick-start"},"Quick Start"),(0,l.mdx)("p",null,"After loading the collector script, or importing the package as shown below, there is nothing else to configure."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'import "@adobe/magento-storefront-event-collector";\n')),(0,l.mdx)("p",null,"The collector then begins listening for events. When these events are fired, the collector runs the associated handler and sends the event along with any relevant information to Adobe Commerce for further processing."),(0,l.mdx)("h2",{id:"supported-events"},"Supported events"),(0,l.mdx)("p",null,"The list of supported events can differ between eventing frameworks. The following tables describe the events supported on each framework and the equivalent event names."),(0,l.mdx)("h3",{id:"event-names-by-framework"},"Event names by framework"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Storefront Events SDK (adobeDataLayer)"),(0,l.mdx)("th",{parentName:"tr",align:null},"Commerce (Snowplow)"),(0,l.mdx)("th",{parentName:"tr",align:null},"Adobe Experience Platform"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"add to requisition list"),(0,l.mdx)("td",{parentName:"tr",align:null},"addToRequisitionList"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: requisitionListAdds")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"cart open"),(0,l.mdx)("td",{parentName:"tr",align:null},"openCart"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: productListOpens")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"cart view"),(0,l.mdx)("td",{parentName:"tr",align:null},"shoppingCartView"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: shopping-cart",(0,l.mdx)("br",null),"action: view"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: productListViews")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"complete checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"placeOrder"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: checkout",(0,l.mdx)("br",null),"action: place-order"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: purchases")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"create account"),(0,l.mdx)("td",{parentName:"tr",align:null},"createAccount"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: userAccount",(0,l.mdx)("br",null),"xdm type: createProfile")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"create requisition list"),(0,l.mdx)("td",{parentName:"tr",align:null},"createRequisitionList"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: requisitionListOpens")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"edit account"),(0,l.mdx)("td",{parentName:"tr",align:null},"editAccount"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: userAccount",(0,l.mdx)("br",null),"xdm type: updateProfile")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"page view"),(0,l.mdx)("td",{parentName:"tr",align:null},"pageView"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: ---",(0,l.mdx)("br",null),"action: Pageview"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: web.webpagedetails",(0,l.mdx)("br",null),"xdm type: pageViews")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"product adds to cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"addToCart"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: product",(0,l.mdx)("br",null),"action: add-to-cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: productListAdds")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"product remove from cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"removeFromCart"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: productListRemovals")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"product view"),(0,l.mdx)("td",{parentName:"tr",align:null},"productPageView"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: product",(0,l.mdx)("br",null),"action: view"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: productViews")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recommendation item add to cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"recsItemAddToCartClick"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: recommendation-unit",(0,l.mdx)("br",null),"action: rec-add-to-cart-click"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recommendation item click"),(0,l.mdx)("td",{parentName:"tr",align:null},"recsItemClick"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: recommendation-unit",(0,l.mdx)("br",null),"action: rec-click"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recommendation request sent"),(0,l.mdx)("td",{parentName:"tr",align:null},"recsRequestSent"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: recommendation-unit",(0,l.mdx)("br",null),"action: api-request-sent"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recommendation response received"),(0,l.mdx)("td",{parentName:"tr",align:null},"recsResponseReceived"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: recommendation-unit",(0,l.mdx)("br",null),"action: api-response-received"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recommendation unit render"),(0,l.mdx)("td",{parentName:"tr",align:null},"recsUnitRender"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: recommendation-unit",(0,l.mdx)("br",null),"action: impression-render"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recommendation unit view"),(0,l.mdx)("td",{parentName:"tr",align:null},"recsUnitView"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: recommendation-unit",(0,l.mdx)("br",null),"action: view"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"remove from requisition list"),(0,l.mdx)("td",{parentName:"tr",align:null},"removeFromRequisitionList"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: requisitionListRemovals")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search category click"),(0,l.mdx)("td",{parentName:"tr",align:null},"searchCategoryClick"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: search",(0,l.mdx)("br",null),"action: category-click"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search product click"),(0,l.mdx)("td",{parentName:"tr",align:null},"searchProductClick"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: search",(0,l.mdx)("br",null),"action: product-click"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search request sent"),(0,l.mdx)("td",{parentName:"tr",align:null},"searchRequestSent"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: search",(0,l.mdx)("br",null),"action: api-request-sent"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: ---",(0,l.mdx)("br",null),"xdm type: searchRequest")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search response received"),(0,l.mdx)("td",{parentName:"tr",align:null},"searchResponseReceived"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: search",(0,l.mdx)("br",null),"action: api-response-received"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: ---",(0,l.mdx)("br",null),"xdm type: searchResponse")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search results view"),(0,l.mdx)("td",{parentName:"tr",align:null},"searchResultsView"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: search",(0,l.mdx)("br",null),"action: results-view"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sign in"),(0,l.mdx)("td",{parentName:"tr",align:null},"signIn"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: userAccount",(0,l.mdx)("br",null),"xdm type: login")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sign out"),(0,l.mdx)("td",{parentName:"tr",align:null},"signOut"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: userAccount",(0,l.mdx)("br",null),"xdm type: logout")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"start checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"initiateCheckout"),(0,l.mdx)("td",{parentName:"tr",align:null},"category: shopping-cart",(0,l.mdx)("br",null),"action: initiate-checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"xdm namespace: commerce",(0,l.mdx)("br",null),"xdm type: checkouts")))),(0,l.mdx)("h3",{id:"event-support-by-framework"},"Event support by framework"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},'Luma/PHP  ("Snowplow")'),(0,l.mdx)("th",{parentName:"tr",align:null},"Luma/PHP Adobe Experience Platform"),(0,l.mdx)("th",{parentName:"tr",align:null},'PWA Commerce ("Snowplow")'),(0,l.mdx)("th",{parentName:"tr",align:null},"PWA Adobe Experience Platform"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"add to requisition list"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP",(0,l.mdx)("br",null),"PLP",(0,l.mdx)("br",null),"Cart",(0,l.mdx)("br",null),"Account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"cart open"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)",(0,l.mdx)("br",null),"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"cart view"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart",(0,l.mdx)("br",null),"Mini cart")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"complete checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Checkout")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"create account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"create requisition list"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP",(0,l.mdx)("br",null),"PLP",(0,l.mdx)("br",null),"Cart",(0,l.mdx)("br",null),"Account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"edit account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"page view"),(0,l.mdx)("td",{parentName:"tr",align:null},"Landing page",(0,l.mdx)("br",null),"PDP",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)",(0,l.mdx)("br",null),"Cart",(0,l.mdx)("br",null),"Checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Landing page",(0,l.mdx)("br",null),"PDP",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)",(0,l.mdx)("br",null),"Cart",(0,l.mdx)("br",null),"Checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Landing page",(0,l.mdx)("br",null),"PDP",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)",(0,l.mdx)("br",null),"Cart",(0,l.mdx)("br",null),"Checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Landing page",(0,l.mdx)("br",null),"PDP",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)",(0,l.mdx)("br",null),"Cart",(0,l.mdx)("br",null),"Checkout")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"product add to cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)",(0,l.mdx)("br",null),"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)",(0,l.mdx)("br",null),"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"product remove from cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"product view"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP"),(0,l.mdx)("td",{parentName:"tr",align:null},"PDP")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recs item add to cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recs item click"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recs request sent"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recs response received"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recs unit render"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"recs unit view"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Recs carousel"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"remove from requisition list"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search category click"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search popover"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search product click"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search popover"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search request sent"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search popover",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search popover",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search response received",(0,l.mdx)("br",null)),(0,l.mdx)("td",{parentName:"tr",align:null},"Search popover",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search popover",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"search results view"),(0,l.mdx)("td",{parentName:"tr",align:null},"Search popover",(0,l.mdx)("br",null),"PLP (Browse)",(0,l.mdx)("br",null),"PLP (Search results)"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sign in"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"sign out"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"Account"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌"),(0,l.mdx)("td",{parentName:"tr",align:null},"❌")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"start checkout"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart"),(0,l.mdx)("td",{parentName:"tr",align:null},"Cart",(0,l.mdx)("br",null),"Mini cart")))),(0,l.mdx)("h2",{id:"support"},"Support"),(0,l.mdx)("p",null,"If you have any questions or encounter any issues, reach out here:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/adobe/commerce-events"},"GitHub")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://account.magento.com/customer/account/login/referer/aHR0cHM6Ly9hY2NvdW50Lm1hZ2VudG8uY29tL3plbmRlc2svbG9naW4vaW5kZXgv/"},"Zendesk"))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-shared-services-storefront-events-collector-index-md-8798855de897dfe57c20.js.map