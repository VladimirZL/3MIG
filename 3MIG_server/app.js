const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();

/***  host页面  ***/

//home页面数据值
const getHomemenuContent = require('./modules/host/home/homeMenuContent.js');
const getHomepageData = require('./modules/host/home/homePageData.js');
//category页面数据值
const getCategorypageData = require('./modules/host/category/categoryPageData.js');
//cart页面数据值
const getCartpageData = require('./modules/host/cart/cartPageData.js');
const getCartshoppiongData = require('./modules/host/cart/cartShoppingData.js');
//search页面数据值
const getSearchpageData = require('./modules/host/search/searchPageData.js');
const getSearchlistData = require('./modules/host/search/searchListData.js');
const getSearchkeyData = require('./modules/host/search/searchKeyData.js');
//channel页面数据
const getChannelpageData = require('./modules/host/channel/channelPageData.js');


/***  product页面  ***/
const getProductData = require('./modules/product/product.js');
const getProductRecommData = require('./modules/product/productRecomm.js');


/***  Login页面  ***/ 

//获取手机验证码 
const getPhoneVcode = require('./modules/login/phoneVcode.js');
//执行登陆
const doLogin = require('./modules/login/login.js');


//返回值
let back = (ctx, result) => {
	if(result.success) {
		ctx.body = {
			success: true,
			data: JSON.parse(result.data)
		}
	} else {
		ctx.body = {
			success: false,
			err: result.err
		}
	}
};

//跨域
app.use(cors());

let host = new Router();
host
	.get('/homePage/menu', async (ctx) => {
		let result = await getHomemenuContent();
		back(ctx, result);
	})
	.get('/homePage/data', async (ctx) => {
		let option_id = ctx.query.optionId;
		let option_type = ctx.query.optionType;
		let result = await getHomepageData(option_id, option_type);
		back(ctx, result);
	})
	.get('/categoryPage/data', async (ctx) => {
		let result = await getCategorypageData();
		back(ctx, result);
	})
	.get('/cartPage/data',  async (ctx) => {
		let result = await getCartpageData();
		back(ctx, result);
	})
	.get('/cartPage/shopping',  async (ctx) => {
		let result = await getCartshoppiongData();
		back(ctx, result);
	})
	.get('/searchPage/data',  async (ctx) => {
		let result = await getSearchpageData();
		back(ctx, result);
	})
	.get('/searchPage/list',  async (ctx) => {
		let list_name = ctx.query.listName;
		let result = await getSearchlistData(list_name);
		back(ctx, result);
	})
	.get('/searchPage/key', async (ctx) => {
		let input_key = ctx.query.key;
		let result = await getSearchkeyData(input_key);
		back(ctx, result);
	})
	.get('/channelPage/data', async (ctx) => {
		let _productId = ctx.query.productId;
		let result = await getChannelpageData(_productId);
		back(ctx, result);
	})


let product = new Router();
product
	.get('/data', async (ctx) => {
		let _productId = ctx.query.productId;
		let result = await getProductData(_productId);
		back(ctx, result);
	})
	.get('/recommend', async (ctx) => {
		let _productId = ctx.query.productId;
		let result = await getProductRecommData(_productId);
		back(ctx, result);
	})


let login = new Router();
login
	.get('/phonevcode', async (ctx) => {
		let _user = ctx.query.user;
		let _vcode = ctx.query.vercode;
		let result = await getPhoneVcode(_user, _vcode);
		back(ctx, result);
	})
	.get('/doLogin', async (ctx) => {
		let _user = ctx.query.user;
		let _phoneVcode = ctx.query.phoneVcode;
		let result = await doLogin(_user, _phoneVcode);
		back(ctx, result);
	})



router.use('/host', host.routes(), host.allowedMethods());
router.use('/product', product.routes(), product.allowedMethods());
router.use('/login', login.routes(), login.allowedMethods());

	
app.use(router.routes());

app.listen(3000, () => {
	console.log('okooo');
});